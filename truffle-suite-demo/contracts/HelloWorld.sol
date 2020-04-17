pragma solidity >=0.5.0 <0.7.0;


contract HelloWorld {
    // keccak256 hash
    // takes in a series of bytes, and outputs a uint256
    mapping(string => uint256) names;

    constructor() public {}

    function add_name(string memory name, uint256 value) public returns (bool) {
        require(name_in_map(name) == false, "Name must not be in the map");

        names[name] = value;
        return true;
    }

    function get_value(string memory name) public view returns (uint256) {
        return names[name];
    }

    function name_in_map(string memory name) public view returns (bool) {
        return names[name] != 0;
    }

    function test() public pure returns (uint32) {
        return 1;
    }
}
