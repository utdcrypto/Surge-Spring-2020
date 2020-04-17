import { providers } from 'ethers';
import { BigNumber } from 'ethers/utils';
import { HelloWorld } from './contracts/HelloWorld';
import { HelloWorldFactory } from './contracts/HelloWorldFactory';


const provider = new providers.JsonRpcProvider("http://localhost:8545");

const signer = provider.getSigner(0);

const contract: HelloWorld = HelloWorldFactory.connect("0xa087B0440aFfCdEe7e70258037EFb7aD29E6468d",
    signer
);

const main = async () => {
    const name: string = "surge";

    let check_main: boolean = await contract.name_in_map(name);
    console.log('Initial log', check_main)
    let add_main = await contract.add_name(name, 100);
    console.log('Add main', add_main)
    let get_main: BigNumber = await contract.get_value(name)
    console.log('Final value', get_main)
}

main();


    // web3.contracts.__function__
