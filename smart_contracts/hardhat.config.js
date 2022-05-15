// https://eth-ropsten.alchemyapi.io/v2/vXNe1BOyaawRfZHfsXtyh6W5H-k2_pEe

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/vXNe1BOyaawRfZHfsXtyh6W5H-k2_pEe',
      accounts: ['5cc055d710e7d46504f887a868af9435fdec1c41905a0add6900b674652c9615']
    }
  }
}