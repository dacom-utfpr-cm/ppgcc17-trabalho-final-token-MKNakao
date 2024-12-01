const NKToken = artifacts.require("NKToken");

module.exports = function (deployer) {
  const initialSupply = web3.utils.toWei("1000000", "ether"); // 1 milhão de tokens
  deployer.deploy(NKToken, initialSupply);
};

