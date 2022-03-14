import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'TheRamenShop',
  tokenName: 'The Ramen Shop NFT',
  tokenSymbol: 'TRS',
  hiddenMetadataUri: 'ipfs://QmbSAFST5ucC9dDynRbjEm5tVSPcVB6tg82gmUAvhC26U1/hide.json',
  maxSupply: 4600,
  whitelistSale: {
    price: 0.1,
    maxMintAmountPerTx: 2,
  },
  preSale: {
    price: 0.1,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.1,
    maxMintAmountPerTx: 2,
  },
  contractAddress: "0xD08d06d0c09531d5fAdB782E7c9F7edCe9Ec0593",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
