// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DecentralizedResource is ReentrancyGuard {
    using Counters for Counters.Counter;
    
    EnergyToken public token;
    Counters.Counter private _listingIds;
    
    struct EnergyListing {
        address seller;
        uint256 amount;        // Amount in kWh * 1e18
        uint256 pricePerUnit;  // Price per kWh in tokens
        bool active;
    }
    
    mapping(uint256 => EnergyListing) public listings;
    uint256 public listingCount;
    
    mapping(address => uint256) public energyBalances;
    
    mapping(address => uint256) public pendingWithdrawals;
    
    event EnergyListed(uint256 indexed listingId, address seller, uint256 amount, uint256 pricePerUnit);
    event EnergyPurchased(uint256 indexed listingId, address buyer, uint256 amount);
    event WithdrawalMade(address indexed user, uint256 amount);
    
    constructor(address _tokenAddress) {
        require(_tokenAddress != address(0), "Invalid token address");
        token = EnergyToken(_tokenAddress);
    }
    
    function listEnergy(uint256 _amount, uint256 _pricePerUnit) external {
        require(_amount > 0, "Amount must be greater than 0");
        require(_pricePerUnit > 0, "Price must be greater than 0");
        
        _listingIds.increment();
        uint256 newListingId = _listingIds.current();
        
        listings[newListingId] = EnergyListing({
            seller: msg.sender,
            amount: _amount,
            pricePerUnit: _pricePerUnit,
            active: true
        });
        
        listingCount = newListingId;
        emit EnergyListed(newListingId, msg.sender, _amount, _pricePerUnit);
    }
    
    
   
    
    function energyBalance(address _user) external view returns (uint256) {
        return energyBalances[_user];
    }

}