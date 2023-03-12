/** @type import('hardhat/config').HardhatUserConfig */

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const {API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {},
    alchemy: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
  // API key of alchemy
  // Wallet Password
  
};


