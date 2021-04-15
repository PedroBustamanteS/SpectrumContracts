pragma solidity ^0.5.8;
contract useBurnPRB{
    
    //Variables
    address public owner;
    uint public receivedPRBs=0;
    uint constant price = 1;
    uint public burntPRBs = 0;
    
    constructor () public{
        owner = msg.sender;
    }
    
    function usePRB(uint _usedPRB) payable public{
        if (msg.value != (_usedPRB * price)){
         revert("The amount of ether sent is not correct");   
        }
        receivedPRBs += _usedPRB;
    }
    
    function burnPRB() public{
        require(msg.sender == owner,"Sender not authorized");
        uint ether_amount = receivedPRBs*price; //Converts PRBs into Ether
        msg.sender.transfer(ether_amount);
        burntPRBs += receivedPRBs;
        receivedPRBs = 0;
        
    }
    
}