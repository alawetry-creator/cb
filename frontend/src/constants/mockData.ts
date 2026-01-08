// Mock data for Crypto Wallet UI
export const walletAddress = '0x1234...5678';

export const cryptoAssets = [
  {
    id: '1',
    name: 'Ethereum',
    symbol: 'ETH',
    balance: '0.0024',
    value: '$4.82',
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
    balance: '2.50',
    value: '$2.50',
    change: '0.0%',
    isPositive: true,
    icon: 'USDC',
    network: 'Ethereum',
    color: '#2775CA',
  },
  {
    id: '3',
    name: 'Polygon',
    symbol: 'MATIC',
    balance: '1.25',
    value: '$0.82',
    change: '-1.2%',
    isPositive: false,
    icon: 'MATIC',
    network: 'Polygon',
    color: '#8247E5',
  },
  {
    id: '4',
    name: 'Chainlink',
    symbol: 'LINK',
    balance: '0.00',
    value: '$0.00',
    change: '+5.3%',
    isPositive: true,
    icon: 'LINK',
    network: 'Ethereum',
    color: '#375BD2',
  },
  {
    id: '5',
    name: 'Uniswap',
    symbol: 'UNI',
    balance: '0.00',
    value: '$0.00',
    change: '+3.1%',
    isPositive: true,
    icon: 'UNI',
    network: 'Ethereum',
    color: '#FF007A',
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
