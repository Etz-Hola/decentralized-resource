// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { vars } from "hardhat/config";


const TOKEN = vars.get("TOKEN_KEY")


const DRSModule = buildModule("DRSModule", (m) => {


  const dRS = m.contract("DecentralizedResource", [TOKEN]);

  return { dRS };
});

export default DRSModule;
