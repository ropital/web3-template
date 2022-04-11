import CocoaArtifact from '../artifacts/contracts/CocoaNFT.sol/CocoaNFT.json'
import { ethers } from 'ethers'

const contractAddress = '0x774fc9baC494D2D46234A035b7880752b7a5cEf5'

const provider = new ethers.providers.InfuraProvider('rinkeby', '74ac4f6074e1498daa7c80e01e089f75')
const contract = new ethers.Contract(contractAddress, CocoaArtifact.abi, provider)

async function main() {
  const tx = await contract.mint(2)
  const receipt = await tx.wait()
  console.log(receipt)
}

main()

export const Greeter = {
  provider,
  contract
}
