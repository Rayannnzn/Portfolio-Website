// Import your project preview images
// Place these images in your assets folder (e.g., src/assets/)
import tsenderPreview from "@/assets/tsender-preview.jpg";
import stablecoinPreview from "@/assets/stablecoin-preview.jpg";
import crowdfundingPreview from "@/assets/crowdfunding-preview.jpg";
import rafflePreview from "@/assets/raffle-preview.jpg";
import nftMarketplacePreview from "@/assets/nftMarketplacePreview.jpg";

export const projects = [

      {
  id: "nft-marketplace",
  title: "NFT Marketplace",
  shortDescription: "Decentralized marketplace for NFT trading with compliance and live indexing",
  description: "A fully-featured NFT marketplace supporting real-time updates, database indexing, and compliance filtering to ensure secure and transparent trading.",
  image: nftMarketplacePreview, // Add this line
  techStack: ["Solidity","Next.js", "TypeScript", "PostgreSQL", "Docker", "Wagmi", "Vercel"],
  liveUrl: "https://nft-market-place-gilt.vercel.app",
  liveCode: "https://github.com/Rayannnzn/NFT-MarketPlace",
  caseStudyUrl: "/projects/nft-marketplace",
  duration: "1 month",
  role: "Full-stack (Frontend + Indexer + Database Integration)",
  team: "Solo",
  problem: "Existing NFT platforms lack real-time data synchronization and compliance checks, making them vulnerable to outdated listings and suspicious activity.",
  solution: "Built a modern NFT marketplace with live indexers that sync blockchain data to the database, ensuring real-time updates for listings, purchases, and cancellations while enforcing compliance checks.",
  highlights: [
    "Deployed and hosted seamlessly on Vercel",
    "Integrated real-time indexers with PostgreSQL",
    "Automatic listing and delisting of NFTs based on blockchain events",
    "Added compliance route to prevent suspicious or illicit access",
    "Optimized UI for fast NFT browsing and interaction"
  ],
  impact: "Enhanced trust and transparency for NFT trading while maintaining live, accurate data across frontend and database."
  },

    {
    id: "stablecoin",
    title: "DeFi Stablecoin",
    shortDescription: "Algorithmic stablecoin with collateral management system",
    description: "A decentralized stablecoin protocol featuring algorithmic stability mechanisms, over-collateralization, and liquidation systems.",
    image: stablecoinPreview, // Add this line
    techStack: ["Solidity", "Next.js", "Web3.js", "Chainlink", "TypeScript"],
    liveUrl: "https://stablecoin-dapp.vercel.app",
    liveCode: "https://github.com/Rayannnzn/Stable-Coin-DApp",
    caseStudyUrl: "/projects/stablecoin",
    duration: "2 months",
    role: "Full-stack (UI + Smart Contracts)",
    team: "Solo",
    problem: "Need for a transparent, algorithmic stablecoin with robust collateralization and liquidation mechanisms.",
    solution: "Developed a full stablecoin protocol with mint/burn mechanics, collateral management, and price oracle integration.",
    highlights: [
      "Implemented Chainlink price feeds for accurate valuations",
      "Built automated liquidation system",
      "Created comprehensive admin dashboard",
      "Extensive testing including edge cases and attack vectors"
    ],
    impact: "$500K+ in total value locked during testnet phase"
  },

    {
    id: "crowdfunding",
    title: "Crowd Funding dApp",
    shortDescription: "Decentralized crowdfunding platform with milestone-based releases",
    description: "A transparent crowdfunding platform where campaign creators can raise funds with milestone-based fund releases and contributor voting rights.",
    image: crowdfundingPreview, // Add this line
    techStack: ["Solidity","Wagmi", "React", "Hardhat", "IPFS", "MetaMask"],
    liveUrl: "https://crowd-funding-dapp-kappa.vercel.app",
    liveCode: "https://github.com/Rayannnzn/Crowd-Funding-Dapp",
    caseStudyUrl: "/projects/crowdfunding",
    duration: "2.5 months",
    role: "Full-stack (UI + Smart Contracts)",
    team: "Solo",
    problem: "Traditional crowdfunding platforms charge high fees and lack transparency in fund management.",
    solution: "Built a decentralized platform with milestone-based funding, contributor governance, and complete transparency.",
    highlights: [
      "Milestone-based fund release mechanism",
      "Contributor voting system for milestone approval",
      "IPFS integration for decentralized campaign data",
      "Zero platform fees"
    ],
    impact: "Launched 15+ campaigns in beta with 100% transparency"
  },


  {
    id: "raffle",
    title: "Raffle Lottery dApp",
    shortDescription: "Provably fair lottery system with Chainlink VRF",
    description: "A fully decentralized lottery platform using Chainlink VRF for verifiable randomness and automatic prize distribution.",
    image: rafflePreview, // Add this line
    techStack: ["Solidity", "React", "Chainlink VRF", "Wagmi", "Tailwind"],
    liveUrl: "https://raffle-dapp-navy.vercel.app",
    liveCode: "https://github.com/Rayannnzn/Decentralized-Raffle-DApp",
    caseStudyUrl: "/projects/raffle",
    duration: "1 month",
    role: "Full-stack (UI + Smart Contracts)",
    team: "Solo",
    problem: "Online lotteries lack transparency and users can't verify fairness of the random selection process.",
    solution: "Implemented Chainlink VRF for cryptographically secure randomness with complete on-chain verification.",
    highlights: [
      "Provably fair randomness using Chainlink VRF",
      "Automated winner selection and prize distribution",
      "Real-time raffle status updates",
      "Gas-efficient ticket purchasing"
    ],
    impact: "1000+ tickets sold with 100% verifiable fairness"
  },

  {
    id: "tsender",
    title: "TSender",
    shortDescription: "Multi-signature token transfer platform with batch operations",
    description: "A sophisticated dApp enabling secure batch token transfers with multi-signature wallet support. Features gas optimization and comprehensive testing.",
    image: tsenderPreview, // Add this line
    techStack: ["Solidity","Wagmi", "React", "Hardhat", "Ethers.js", "Tailwind"],
    liveUrl: "https://t-sender-ui-cyan.vercel.app",
    liveCode: "https://github.com/Rayannnzn/TSender-UI",
    caseStudyUrl: "/projects/tsender",
    duration: "1 months",
    role: "Full-stack (UI + Smart Contracts)",
    team: "Solo",
    problem: "Users needed a reliable way to send tokens to multiple addresses without paying excessive gas fees or risking transaction failures.",
    solution: "Built an optimized smart contract with batch transfer capabilities and an intuitive UI for managing recipients and tracking transactions.",
    highlights: [
      "Reduced gas costs by 40% through optimized batch operations",
      "Implemented multi-signature security layer",
      "Built comprehensive test suite with 95% coverage",
      "Deployed on Ethereum mainnet and testnets"
    ],
    impact: "Processed over 10,000 transactions with zero security incidents"
  },


];

export const getProjectById = (id: string) => {
  return projects.find(project => project.id === id);
};