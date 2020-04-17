# Truffle Suite & Ganache CLI Demo

## Installation

- Blockchain: `npm install --global truffle solc ganache-cli`
- Nodejs Backend: `npm install --save ethers typechain-target-ethers`, `npm install --global typescript tsc typechain`
- Finally `npm install` in case I forgot something :)
- NOTE
- - `npm install --global` == `npm i -g`
- - `npm install --save` == `npm i -S`

## Building the code

- Blockchain
- - `truffle compile`
- Server
- - `npm run build:contracts` (requires typechain, typechain-target-ethers, typescript, and tsc to be installed)
- - `tsc index.ts`

## Running the code

- Blockchain
- - `ganache-cli -p 8545` to start the blockchain on http://localhost:8545
- - `truffle migrate --reset` to deploy the contracts to localhost:8545 (this is defined in truffle-config.js subsection development)
- Server
- - `cd server` to go into the right directory
- - `tsc` to build the Typescript server (requires typescript to be installed with `npm i -g typescript tsc`)
- - `node index.js` to run the server
