// Mock data for Crypto Wallet UI
export const walletAddress = '0x1234...5678';

// ETH price ~$2,000 USD
// Total ETH: 53.00174 + 1 + 1 + 0.01 = 55.01174 ETH = $110,023.48
// Total USDC: 6,000 USDC = $6,000.00
// Total Balance: $116,023.48

export const cryptoAssets = [
  {
    id: '1',
    name: 'Ethereum',
    symbol: 'ETH',
    balance: '55.01174',
    value: '$110,023.48',
    change: '+2.4%',
    isPositive: true,
    icon: 'ETH',
    network: 'Ethereum',
    color: '#627EEA',
  },
  {
    id: '2',
    name: 'USD Coin',
    symbol: 'USDC',
    balance: '6,000.00',
    value: '$6,000.00',
    change: '0.0%',
    isPositive: true,
    icon: 'USDC',
    network: 'Ethereum',
    color: '#2775CA',
  },
];

export const nftAssets = [
  {
    id: '1',
    name: 'CryptoPunk #1234',
    collection: 'CryptoPunks',
    floorPrice: '65 ETH',
  },
  {
    id: '2',
    name: 'Bored Ape #5678',
    collection: 'BAYC',
    floorPrice: '30 ETH',
  },
];

export const defiPositions = [
  {
    id: '1',
    protocol: 'Aave',
    type: 'Lending',
    value: '$1,250',
    apy: '4.5%',
  },
  {
    id: '2',
    protocol: 'Uniswap',
    type: 'Liquidity',
    value: '$890',
    apy: '12.3%',
  },
];
