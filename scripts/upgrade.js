// scripts/upgrade-box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const proxyAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';

  const Greeter = await ethers.getContractFactory("Greeter");
  console.log('Implementation address: ' + await upgrades.erc1967.getImplementationAddress(proxyAddress));
  console.log('Admin address: ' + await upgrades.erc1967.getAdminAddress(proxyAddress));

  const greeter = await upgrades.forceImport(proxyAddress, Greeter, { kind: 'transparent' });
  console.log("v1 message: " + await greeter.greet());

  const GreeterV2 = await ethers.getContractFactory("GreeterV2");
  const greeterV2 = await upgrades.upgradeProxy(proxyAddress, GreeterV2);
  console.log("Greeter upgraded");

  console.log("v2 message: "+ await greeterV2.greet());
  await greeterV2.resetGreeting();
  console.log("v2 message after reset: "+ await greeterV2.greet());
}

main();