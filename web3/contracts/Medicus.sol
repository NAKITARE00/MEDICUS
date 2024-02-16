// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Medicus {

    struct Researcher{
        string name;
        string email;
        address researcherAddress;
    }
    mapping (address => Researcher) public researchers;

    struct Research{
        string title;
        uint256 id;
        string description;
        address[] researchers;
        uint256 funding;
    }
    mapping (uint256 => Research) public researches;

    
    uint256 public researchCount = 0;

    function register(string memory _name, string memory _email) public {
        researchers[msg.sender] = Researcher(_name, _email, msg.sender);
    }

    function createPatent(string memory _title, string memory _description, address[] memory _researchers) public{
        uint256 id = researchCount + 1;
        Research storage newResearch = researches[id];
        newResearch.title = _title;
        newResearch.id = id;
        newResearch.description = _description;
        newResearch.researchers = _researchers;
        researchCount = id;
    }

    function crowdFund (uint256 _id) public payable {
        require(msg.value > 0, "You must send some ether");
        require(researches[_id].id != 0, "Research does not exist");
        (bool sent, ) = payable(address(this)).call{value: msg.value}("");
        require(sent, "Failed to send ether");
        Research storage research = researches[_id];
        uint256 amount = research.funding + msg.value;
        research.funding = amount;
    }

    function contributeToResearch(uint256 _id, string memory _description) public{
        require(researches[_id].id != 0, "Research does not exist");
        require(researchers[msg.sender].researcherAddress != address(0), "Researcher does not exist");
        Research storage research = researches[_id];
        research.researchers.push(msg.sender);
        research.description = _description;
    } 

    function getResearch(uint256 _id) public view returns (Research memory){
        return researches[_id];
    }

    function getResearcher(address _address) public view returns (Researcher memory){
        return researchers[_address];
    }

    function getResearch() public view returns (Research[] memory){
        Research[] memory researchList = new Research[](researchCount);
        for (uint256 i = 1; i <= researchCount; i++){
            researchList[i] = researches[i];
        }
        return researchList;
    }
}