import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";


import Data from "../ignition/deployments/chain-11155111/deployed_addresses.json"


describe("Decentralized Renewable Energy Sharing Test", function () {

    async function deployDecentralizedResourceFixture() {
        const [owner] = await hre.ethers.getSigners();

        const DecentralizedResource = await hre.ethers.getContractFactory("DecentralizedResource");
        const decentralizedResource = await DecentralizedResource.deploy(Data["TokenModule#EnergyToken"]);

        return { decentralizedResource, owner };
    }

    describe("Deployment", () => {
        it("Should check if the contract deployed", async function () {
            const { decentralizedResource, owner } = await loadFixture(deployDecentralizedResourceFixture);

            expect(decentralizedResource)

        });

        it("Should be able to list excess energy for sale", async function () {
            const { decentralizedResource, owner } = await loadFixture(deployDecentralizedResourceFixture);
            const amount_ = 5;
            const pricePerUnit_ = hre.ethers.parseEther("0.5");
            const index = 0

            await decentralizedResource.connect(owner).listEnergy(amount_, pricePerUnit_);

            const energies = await decentralizedResource.getAllEnergyListed();
            const energyListing = energies[index];

            expect(energyListing.seller).to.equal(owner.address);
            expect(energyListing.amount).to.equal(amount_);
            expect(energyListing.pricePerUnit).to.equal(pricePerUnit_);
            expect(energyListing.active).to.be.true;
        });
    })
})