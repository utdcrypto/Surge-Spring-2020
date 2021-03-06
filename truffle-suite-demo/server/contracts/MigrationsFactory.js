"use strict";
/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ethers_1 = require("ethers");
var MigrationsFactory = /** @class */ (function (_super) {
    __extends(MigrationsFactory, _super);
    function MigrationsFactory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    MigrationsFactory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides);
    };
    MigrationsFactory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides);
    };
    MigrationsFactory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    MigrationsFactory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    MigrationsFactory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return MigrationsFactory;
}(ethers_1.ContractFactory));
exports.MigrationsFactory = MigrationsFactory;
var _abi = [
    {
        inputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        constant: true,
        inputs: [],
        name: "last_completed_migration",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "completed",
                type: "uint256"
            }
        ],
        name: "setCompleted",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    }
];
var _bytecode = "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061019c806100606000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063445df0ac146100465780638da5cb5b14610064578063fdacd576146100ae575b600080fd5b61004e6100dc565b6040518082815260200191505060405180910390f35b61006c6100e2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100da600480360360208110156100c457600080fd5b8101908080359060200190929190505050610107565b005b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561016457806001819055505b5056fea265627a7a72315820bbf1405dcf2e3b9554ef8cb14ea4f8f3f57fcee671a5aca9dbbdf9122c87109864736f6c63430005100032";
