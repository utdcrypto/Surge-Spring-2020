pragma solidity >=0.4.21 <0.7.0;


contract TestContract {
    address public owner;
    uint256 public last_completed_migration;

    mapping(string => bool) hash_valid;

    constructor() public {
        owner = msg.sender;
    }

    function id_not_in_map(string memory video_id) public view returns (bool) {
        return hash_valid[video_id] == false;
    }

    function ping() public view returns (string memory) {
        return "Ping call!";
    }

    modifier restricted() {
        if (msg.sender == owner) _;
    }

    function check_video_entry(string memory video_id) public returns (bool) {
        return hash_valid[video_id];
    }

    function add_video_entry(string memory video_id) public returns (bool) {
        // require(id_not_in_map(video_id) == true, "Video hash already in map");
        hash_valid[video_id] = true;
        return true;
    }
}
