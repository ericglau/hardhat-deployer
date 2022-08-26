import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import '@openzeppelin/hardhat-upgrades';

import 'hardhat-deploy';

import * as dotenv from 'dotenv';
import { HardhatUserConfig } from 'hardhat/config';

dotenv.config();

const { DEPLOYER_PRIVATE_KEY, INFURA_PROJECT_ID, ETHERSCAN_API_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: '0.8.3',
  networks: {

  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  namedAccounts: {
    deployer: 0,
  },
};

export default config;
