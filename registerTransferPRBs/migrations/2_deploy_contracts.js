var createTransferPRB = artifacts.require("./createTransferPRB.sol");
var useBurnPRB = artifacts.require("./useBurnPRB.sol");


module.exports = function(deployer) {
  deployer.deploy(createTransferPRB);
  deployer.deploy(useBurnPRB);
};