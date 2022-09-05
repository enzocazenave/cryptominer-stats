# cryptominer-stats

It is a panel where you can see the stats of your cryptocurrency miner.

## Build Setup

```
# add your walletId in src/helpers/getEnvVariables.js
{
    API_URL: 'https://eth.2miners.com/api/accounts/',
    API_ETH_URL: 'https://currencies.2miners.com/api/v1/ticker/ethereum/',
    WALLET_ID: '',
}

# add your server miner of 2miners
{
    API_URL: '',
    API_ETH_URL: 'https://currencies.2miners.com/api/v1/ticker/ethereum/',
    WALLET_ID: '0x3906dab57868f9e89a71d4f427dfbc01ccd88e00',
}

# install dependencies
yarn

# serve with hot reload at localhost:5173
yarn dev

# build for production with minification
yarn build
```
