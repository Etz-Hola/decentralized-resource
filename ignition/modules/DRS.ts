// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import TOKEN from "../deployments/chain-11155111/deployed_addresses.json"




const DRSModule = buildModule("DRSModule", (m) => {


  const dRS = m.contract("DecentralizedResource", [TOKEN["TokenModule#EnergyToken"]]);

  return { dRS };
});

export default DRSModule;
