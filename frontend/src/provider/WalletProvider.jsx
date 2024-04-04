import {
  createWeb3Modal,
  defaultConfig,
  useWeb3ModalTheme,
} from "@web3modal/ethers/react";

export const SEPOLIA_CHAIN_ID = 11155111;

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID || "";

// 2. Set chains
const sepolia = {
  chainId: SEPOLIA_CHAIN_ID,
  name: "Sepolia Testnet",
  currency: "ETH",
  explorerUrl: "https://sepolia.infura.io/v3/",
  rpcUrl: `https://sepolia.infura.io/v3/${import.meta.env.VITE_INFURA_ID}`,
};

// 3. Create a metadata object
const metadata = {
  name: "Chat app",
  description: "Description",
  url: "http://localhost:5173/", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

// Check if projectId is defined before passing it to createWeb3Modal
if (projectId) {
  const web3Modal = createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains: [sepolia],
    projectId,
    enableAnalytics: true, // Optional - defaults to your Cloud configuration
    enableOnramp: true, // Optional - false as default
  });
} else {
  console.error("Project ID is not defined.");
}

// Now you can use the web3Modal instance to handle web3 modal related functionality
// For example, you can use useWeb3ModalTheme hook
export function Web3Modal({ children }) {
  const theme = useWeb3ModalTheme();
  // You can use the theme object here
  return children;
}
