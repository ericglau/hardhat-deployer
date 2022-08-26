## Installation

```shell script
$ npm install
```

## Proxy Deployment and Upgrade

1. In a separate terminal, start a Hardhat local node:
```
npx hardhat node
```

2. Deploy proxy:
```
npx hardhat deploy --network localhost --tags Greeter
```

3. Copy the proxy address (of `Greeter_Proxy`) from the output to the [`proxyAddress` variable of `scripts/upgrade.js`](https://github.com/ericglau/hardhat-deployer/blob/master/scripts/upgrade.js#L5).

4. `forceImport` and upgrade using Hardhat Upgrades plugin:
```
npx hardhat run scripts/upgrade.js --network localhost  
```
