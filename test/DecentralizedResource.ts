import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("Decentralized Renewable Energy Sharing Test", function () {
    async function deployDecentralizedResourceFixture() {
        const [owner, buyer] = await hre.ethers.getSigners();

        const EnergyToken = await hre.ethers.getContractFactory("EnergyToken");
        const energyToken = await EnergyToken.deploy("Regen Token", "RGT");

        const DecentralizedResource = await hre.ethers.getContractFactory("DecentralizedResource");
        const decentralizedResource = await DecentralizedResource.deploy(energyToken.target);

        return { decentralizedResource, owner, energyToken, buyer };
    }

    describe("Deployment", () => {
        it("Should check if the contract deployed", async function () {
            const { energyToken, decentralizedResource } = await loadFixture(deployDecentralizedResourceFixture);
            expect(energyToken.target).to.be.properAddress;
            expect(decentralizedResource.target).to.be.properAddress;
        });

        it("Should assign total supply of tokens to the owner", async function () {
            const { energyToken, owner } = await loadFixture(deployDecentralizedResourceFixture);
            const totalSupply = await energyToken.getTotalSupply();
            const ownerBalance = await energyToken.balanceOf(owner.address);
            expect(ownerBalance).to.equal(totalSupply);
        });

        it("Should allow listing of excess energy for sale", async function () {
            const { decentralizedResource, owner } = await loadFixture(deployDecentralizedResourceFixture);
            const amount = 5;
            const pricePerUnit = hre.ethers.parseEther("0.5");

            await decentralizedResource.connect(owner).listEnergy(amount, pricePerUnit);

            const energies = await decentralizedResource.getAllEnergyListed();
            const energyListing = energies[0];

            expect(energyListing.seller).to.equal(owner.address);
            expect(energyListing.amount).to.equal(amount);
            expect(energyListing.pricePerUnit).to.equal(pricePerUnit);
            expect(energyListing.active).to.be.true;
        });

        it("Should return the energy balance", async function () {
            const { decentralizedResource, owner } = await loadFixture(deployDecentralizedResourceFixture);
            const energyBalance = await decentralizedResource.energyBalance(owner.address);
            expect(energyBalance).to.equal(0);
        });

        it("Should return all listed energy", async function () {
            const { decentralizedResource } = await loadFixture(deployDecentralizedResourceFixture);
            const allListedEnergy = await decentralizedResource.getAllEnergyListed();
            expect(allListedEnergy).to.be.an("array");
        });

        it("Should return the energy sold metrics", async function () {
            const { decentralizedResource } = await loadFixture(deployDecentralizedResourceFixture);
            const energySoldMetrics = await decentralizedResource.getAllEnergySold();
            expect(energySoldMetrics).to.be.an("array");
        });

        it("Should allow buyer to purchase listed energy and transfer funds to the seller", async function () {
            const { decentralizedResource, energyToken, owner, buyer } = await loadFixture(deployDecentralizedResourceFixture);

            const amount = 5;
            const pricePerUnit = hre.ethers.parseEther("0.5");

            await decentralizedResource.connect(owner).listEnergy(amount, pricePerUnit);

            const purchaseAmount = 3;
            const totalCost = BigInt(pricePerUnit) * BigInt(purchaseAmount);

            const buyerInitialFund = hre.ethers.parseUnits("1000000", 18);
            await energyToken.connect(owner).transfer(buyer.address, buyerInitialFund);

            const buyerBalance = await energyToken.balanceOf(buyer.address);
            expect(buyerBalance).to.be.gte(totalCost);

            const prevSellerBalance = await energyToken.balanceOf(owner.address);

            await energyToken.connect(buyer).approve(decentralizedResource.target, totalCost);
            await decentralizedResource.connect(buyer).buyEnergy(0, purchaseAmount);

            const newSellerBalance = await energyToken.balanceOf(owner.address);
            expect(newSellerBalance).to.equal(prevSellerBalance + totalCost);
            expect(await decentralizedResource.getAllEnergySold()).to.not.be.empty;
        });

        it("Should be able to withdraw funds held in pendingWithdrawals after energy purchase", async function () {
            const { decentralizedResource, energyToken, owner, buyer } = await loadFixture(deployDecentralizedResourceFixture);

            const amount = 5;
            const pricePerUnit = hre.ethers.parseEther("0.5");
            await decentralizedResource.connect(owner).listEnergy(amount, pricePerUnit);

            const purchaseAmount = 3;
            const totalCost = BigInt(pricePerUnit) * BigInt(purchaseAmount);
            const buyerInitialFund = hre.ethers.parseUnits("1000000", 18);
            await energyToken.connect(owner).transfer(buyer.address, buyerInitialFund);

            const buyerBalance = await energyToken.balanceOf(buyer.address);
            expect(buyerBalance).to.be.gte(totalCost);

            await energyToken.connect(buyer).approve(decentralizedResource.target, totalCost);
            await decentralizedResource.connect(buyer).buyEnergy(0, purchaseAmount);

            const pendingWithdrawal = await decentralizedResource.pendingWithdrawals(owner.address);
            expect(pendingWithdrawal).to.equal(totalCost);

            const initialBalance = await energyToken.balanceOf(owner.address);

            await decentralizedResource.connect(owner).withDraw();

            const postWithdrawalPending = await decentralizedResource.pendingWithdrawals(owner.address);
            expect(postWithdrawalPending).to.equal(0);

            const finalBalance = await energyToken.balanceOf(owner.address);
            expect(finalBalance).to.equal(initialBalance + totalCost);
        });

    });
});
