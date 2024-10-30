// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import {IERC20} from "./Interface.sol";


contract DecentralizedResource {
    address energyToken;


    bool internal locked;


    uint256 internal unitBalance;

    struct EnergyListing {
        address seller;
        uint256 amount;
        uint256 pricePerUnit;
        bool active;
    }

    mapping(uint256 => EnergyListing) public listings;
    uint256[] public listingIds;
    Purchases[] public allPurchases;


    struct Purchases {
        address buyer;
        uint256 amount;
        uint256 price;
    }

    mapping(address => Purchases[]) purchases;

    uint256 public listingCount;

    mapping(address => uint256) public energyBalances;

    mapping(address => uint256) public pendingWithdrawals;

    modifier reentrancyGuard() {
        require(!locked, "Not allowed to re-enter");

        locked = true;
        _;
        locked = false;
    }

    event EnergyListed(
        uint256 indexed listingId,
        address seller,
        uint256 amount,
        uint256 pricePerUnit
    );

    event EnergyPurchased(
        uint256 indexed listingId,
        address buyer,
        uint256 amount
    );
    event WithdrawalMade(address indexed user, uint256 amount);



    constructor(address _tokenAddress) {
        require(_tokenAddress != address(0), "Invalid token address");
        energyToken = _tokenAddress;
    }



    function listEnergy(
        uint256 _amount,
        uint256 _pricePerUnit
    ) external reentrancyGuard {
        require(_amount > 0, "Amount must be greater than 0");
        require(_pricePerUnit > 0, "Price must be greater than 0");

        uint256 newListingId = listingCount;

        listings[newListingId] = EnergyListing({
            seller: msg.sender,
            amount: _amount,
            pricePerUnit: _pricePerUnit,
            active: true
        });
        listingIds.push(newListingId);
        listingCount++;
        emit EnergyListed(newListingId, msg.sender, _amount, _pricePerUnit);
    }




    function energyBalance(address _user) external view returns (uint256) {
        return energyBalances[_user];
    }

    function buyEnergy(
        uint256 _index,
        uint256 _amount
    ) external payable reentrancyGuard returns (bool) {
        EnergyListing storage listing = listings[_index];
        require(listing.active, "Unit not available");
        require(_amount <= listing.amount, "Not enough energy available");

        uint256 totalCost = _amount * listing.pricePerUnit;
        require(
            IERC20(energyToken).balanceOf(msg.sender) >= totalCost,
            "Insufficient balance"
        );

        bool sent = IERC20(energyToken).transferFrom(
            msg.sender,
            listing.seller,
            totalCost
        );

        require(sent, "Transfer failed, Payment not executed");

        listing.amount -= _amount;
        if (listing.amount == 0) {
            listing.active = false;
        }

        pendingWithdrawals[listing.seller] += totalCost;

        purchases[msg.sender].push(
            Purchases({buyer: msg.sender, amount: _amount, price: totalCost})
        );

        recordPurchase(msg.sender, _amount, listing.pricePerUnit);

        emit EnergyPurchased(_index, msg.sender, _amount);

        return true;
    }

    function recordPurchase(
        address _buyer,
        uint256 _amount,
        uint256 _price
    ) internal {
        Purchases memory newPurchase = Purchases({
            buyer: _buyer,
            amount: _amount,
            price: _price
        });

        purchases[_buyer].push(newPurchase);

        allPurchases.push(newPurchase);
    }
    // function recordPurchase(
    

    

    function withDraw() external reentrancyGuard {
        uint256 amount = pendingWithdrawals[msg.sender];
        require(amount > 0, "Nothing to withdraw");

        pendingWithdrawals[msg.sender] = 0;
        bool success = IERC20(energyToken).transfer(msg.sender, amount);
        require(success, "Withdrawal failed");

        emit WithdrawalMade(msg.sender, amount);
    }


    function getAllEnergyListed()
        external
        view
        returns (EnergyListing[] memory)
    {
        EnergyListing[] memory allListings = new EnergyListing[](listingCount);

        for (uint256 i = 0; i < listingCount; i++) {
            allListings[i] = listings[listingIds[i]];
        }

        return allListings;
    }



    function getAllEnergySold() external view returns (Purchases[] memory) {
        return allPurchases;
    }
}
