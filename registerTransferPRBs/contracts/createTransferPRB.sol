pragma solidity ^0.5.2;

contract createTransferPRB{
    
    //Contract variables 
    uint public availablePRBs = 0;
    mapping (address =>bool) public registeredSU;
    address public owner; //Smart contract owner
    uint public isSURegistered = 0;
    
    constructor() public{
        //Owner set as user deploying the smart contract
        owner = msg.sender;
    }
    
    function registerSU (address _SU) public {
        require(msg.sender == owner); //Only PU can register SU
        registeredSU[_SU] = true;
        isSURegistered = 1;
    }
    
    function registerPRB(uint _PRBs) public{
        require(msg.sender == owner); //Only PU can register SU
        availablePRBs = availablePRBs + _PRBs;
    }
    
    function checkPRBAvailability () view public returns (uint) {
        require (registeredSU[msg.sender]); //Only registered SU users
        return availablePRBs;
    }
    
    function transferPRB (uint _requestedPRBs) public {
        require (registeredSU[msg.sender]); //Only registered SU users
        //uint ether_amount = _requestedPRBs; //Converts PRBs into Ether
        //msg.sender.transfer(ether_amount);
        availablePRBs -= _requestedPRBs;
    }
    
    
    
    
    
    
    
}