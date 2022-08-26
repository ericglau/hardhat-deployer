import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {
    deployments: { deploy },
    getNamedAccounts,
  } = hre;
  const { deployer } = await getNamedAccounts();

  await deploy('Greeter', {
    from: deployer,
    log: true,
    args: ['Hi World'],
    proxy: { 
      proxyContract: 'OpenZeppelinTransparentProxy',
      methodName: 'initialize',
    },
  });
};

export default func;
func.tags = ['Greeter'];
