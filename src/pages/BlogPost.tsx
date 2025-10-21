import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Share } from "@phosphor-icons/react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { id } = useParams();

  // In a real app, this would fetch from a CMS or markdown files
  const posts: Record<string, any> = {
    "gas-efficient-stablecoin": {
      title: "Building a Gas-Efficient Stablecoin — Lessons & Patterns",
      date: "January 15, 2025",
      readTime: "8 min read",
      tags: ["Solidity", "DeFi", "Gas Optimization"],
      content: `
        <h2>Introduction</h2>
        <p>Stablecoins are a cornerstone of DeFi, but building one that's both secure and gas-efficient requires careful design decisions. In this post, I'll share the patterns and optimizations I used while building a production-ready stablecoin protocol.</p>

        <h2>The Challenge</h2>
        <p>The main challenge in stablecoin design is balancing three key aspects: security, gas efficiency, and functionality. Every additional feature adds complexity and gas costs, so it's crucial to optimize early.</p>

        <h2>Key Optimizations</h2>
        <h3>1. Storage Layout</h3>
        <p>Organizing storage variables efficiently can save significant gas. By packing related variables together and using smaller integer types where possible, I reduced storage costs by approximately 30%.</p>

        <h3>2. Batch Operations</h3>
        <p>Implementing batch mint/burn operations allows users to perform multiple actions in a single transaction, reducing the per-operation gas cost.</p>

        <h3>3. Event Optimization</h3>
        <p>Using indexed parameters strategically and avoiding redundant events helps keep gas costs down while maintaining transparency.</p>

        <h2>Mint/Burn Mechanics</h2>
        <p>The core of any stablecoin is its mint and burn mechanism. Here's the approach I took:</p>
        <ul>
          <li>Over-collateralization ratio of 150% to maintain stability</li>
          <li>Automated price feed integration using Chainlink oracles</li>
          <li>Liquidation mechanism for under-collateralized positions</li>
          <li>Emergency pause functionality for security</li>
        </ul>

        <h2>Testing Strategy</h2>
        <p>Comprehensive testing is non-negotiable for financial protocols. My test suite includes:</p>
        <ul>
          <li>Unit tests for all functions</li>
          <li>Integration tests for complex workflows</li>
          <li>Fuzz testing for edge cases</li>
          <li>Gas profiling to track optimization improvements</li>
        </ul>

        <h2>Lessons Learned</h2>
        <p>Building this stablecoin taught me that premature optimization is real, but so is post-launch optimization difficulty. Finding the right balance and optimizing critical paths early saves headaches later.</p>

        <h2>Conclusion</h2>
        <p>Gas-efficient stablecoins are possible with careful design and testing. The patterns shared here can be applied to many DeFi protocols beyond stablecoins.</p>
      `
    },
    "crowdfunding-case-study": {
      title: "From Idea to Mainnet: Crowdfunding DApp Case Study",
      date: "January 8, 2025",
      readTime: "12 min read",
      tags: ["Case Study", "dApp", "Full-Stack"],
      content: `
        <h2>Project Overview</h2>
        <p>This case study walks through the complete lifecycle of building a decentralized crowdfunding platform, from initial concept to mainnet deployment.</p>

        <h2>Phase 1: Architecture & Design</h2>
        <p>The first step was designing a system that balanced transparency with practical functionality. Key features included:</p>
        <ul>
          <li>Campaign creation with funding goals and deadlines</li>
          <li>Milestone-based fund releases</li>
          <li>Contributor voting for milestone approval</li>
          <li>Automatic refunds for failed campaigns</li>
        </ul>

        <h2>Smart Contract Development</h2>
        <p>The smart contract architecture uses a factory pattern to create individual campaign contracts. This approach provides isolation between campaigns and reduces gas costs.</p>

        <h3>Security Considerations</h3>
        <p>Security was paramount. I implemented:</p>
        <ul>
          <li>Reentrancy guards on all fund transfers</li>
          <li>Access controls for campaign creators</li>
          <li>Time locks for fund withdrawals</li>
          <li>Emergency pause mechanism</li>
        </ul>

        <h2>Frontend Development</h2>
        <p>The dApp frontend was built with React and Web3.js, focusing on:</p>
        <ul>
          <li>Intuitive campaign creation flow</li>
          <li>Real-time updates via blockchain events</li>
          <li>Mobile-responsive design</li>
          <li>Wallet connection with MetaMask and WalletConnect</li>
        </ul>

        <h2>Testing & Auditing</h2>
        <p>Before mainnet deployment, the project underwent:</p>
        <ul>
          <li>Comprehensive unit and integration testing</li>
          <li>Internal security review</li>
          <li>Beta testing on testnet with real users</li>
          <li>Gas optimization profiling</li>
        </ul>

        <h2>Deployment & Launch</h2>
        <p>The deployment process was carefully orchestrated:</p>
        <ol>
          <li>Deploy factory contract to mainnet</li>
          <li>Verify contracts on Etherscan</li>
          <li>Configure frontend with mainnet addresses</li>
          <li>Soft launch with limited campaigns</li>
          <li>Monitor and iterate based on feedback</li>
        </ol>

        <h2>Results</h2>
        <p>The platform successfully launched 15+ campaigns in the first month with zero security incidents. Users appreciated the transparency and control over fund releases.</p>

        <h2>Key Takeaways</h2>
        <ul>
          <li>Thorough planning prevents costly mistakes</li>
          <li>User testing reveals issues missed in code review</li>
          <li>Gas optimization should happen iteratively</li>
          <li>Documentation is crucial for adoption</li>
        </ul>
      `
    },
    "raffle-randomness": {
      title: "Raffle & Lottery on Ethereum — Randomness & Fairness",
      date: "December 28, 2024",
      readTime: "10 min read",
      tags: ["Chainlink", "VRF", "Security"],
      content: `
        <h2>The Randomness Problem</h2>
        <p>True randomness on blockchain is notoriously difficult. Block hashes and timestamps can be manipulated by miners, making them unsuitable for lotteries where fairness is critical.</p>

        <h2>Chainlink VRF Solution</h2>
        <p>Chainlink's Verifiable Random Function (VRF) provides cryptographically secure randomness that can be verified on-chain. Here's how it works:</p>
        <ol>
          <li>Your contract requests randomness</li>
          <li>Chainlink oracle generates a random number off-chain</li>
          <li>The oracle provides a cryptographic proof with the random number</li>
          <li>Your contract verifies the proof before using the number</li>
        </ol>

        <h2>Implementation Details</h2>
        <p>Integrating Chainlink VRF requires careful consideration:</p>

        <h3>Gas Costs</h3>
        <p>VRF calls are not free. I optimized by:</p>
        <ul>
          <li>Batching multiple draws when possible</li>
          <li>Charging participants a small fee to cover VRF costs</li>
          <li>Using the callback gas limit efficiently</li>
        </ul>

        <h3>Request Flow</h3>
        <p>The typical flow looks like:</p>
        <ol>
          <li>Raffle closes after time period</li>
          <li>Contract requests random number from VRF</li>
          <li>VRF responds with random number and proof</li>
          <li>Contract selects winner(s) based on random number</li>
          <li>Prizes distributed automatically</li>
        </ol>

        <h2>Security Considerations</h2>
        <p>Even with VRF, several security aspects need attention:</p>
        <ul>
          <li>Prevent re-entrancy during winner selection</li>
          <li>Handle cases where VRF request fails</li>
          <li>Implement timeouts for stale requests</li>
          <li>Validate all inputs before requesting randomness</li>
        </ul>

        <h2>Alternative Approaches</h2>
        <p>While VRF is the gold standard, other options exist:</p>
        <ul>
          <li><strong>Commit-Reveal:</strong> Simple but vulnerable to griefing</li>
          <li><strong>Block Hash:</strong> Fast but manipulatable by miners</li>
          <li><strong>drand:</strong> Another oracle-based option with different tradeoffs</li>
        </ul>

        <h2>User Experience</h2>
        <p>Randomness generation takes time. I improved UX by:</p>
        <ul>
          <li>Showing a progress indicator during VRF request</li>
          <li>Sending notifications when winner is selected</li>
          <li>Displaying the VRF proof for transparency</li>
          <li>Providing estimated completion time</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Chainlink VRF provides the security and verifiability needed for fair lotteries. While it adds complexity and cost, the trustless nature is worth it for applications where fairness is paramount.</p>
      `
    },
    "wallet-ux-best-practices": {
      title: "Wallet UX: Best Practices for dApp Onboarding",
      date: "December 20, 2024",
      readTime: "6 min read",
      tags: ["UX", "Frontend", "Web3"],
      content: `
        <h2>The Web3 UX Challenge</h2>
        <p>Web3 onboarding is notoriously complex. Users need to install wallets, manage seed phrases, understand gas fees, and sign transactions. How can we make this smoother?</p>

        <h2>Progressive Onboarding</h2>
        <p>Don't overwhelm users with everything at once. Instead:</p>
        <ol>
          <li>Show the app's value before requiring wallet connection</li>
          <li>Explain what wallet connection means in simple terms</li>
          <li>Guide users through their first transaction</li>
          <li>Provide context for each action they're taking</li>
        </ol>

        <h2>Multiple Wallet Support</h2>
        <p>Users have preferences. Supporting multiple wallets increases adoption:</p>
        <ul>
          <li>MetaMask (most common)</li>
          <li>WalletConnect (mobile users)</li>
          <li>Coinbase Wallet (US market)</li>
          <li>Consider social logins via Web3Auth or Magic</li>
        </ul>

        <h2>Clear Transaction Feedback</h2>
        <p>Users need to know what's happening at every step:</p>

        <h3>Before Transaction</h3>
        <ul>
          <li>Show estimated gas cost in USD</li>
          <li>Explain what the transaction does</li>
          <li>Indicate if it's a one-time or recurring action</li>
        </ul>

        <h3>During Transaction</h3>
        <ul>
          <li>Show pending state with spinner</li>
          <li>Display transaction hash with Etherscan link</li>
          <li>Estimate completion time</li>
        </ul>

        <h3>After Transaction</h3>
        <ul>
          <li>Confirm success with clear messaging</li>
          <li>Show updated balances/state</li>
          <li>Suggest next actions</li>
        </ul>

        <h2>Error Handling</h2>
        <p>Web3 errors are cryptic. Translate them:</p>
        <ul>
          <li>"Insufficient funds" → "You need X more ETH for this transaction"</li>
          <li>"User rejected" → "Transaction cancelled. No worries!"</li>
          <li>"Gas too low" → "This transaction needs more gas. Try increasing it."</li>
        </ul>

        <h2>Gas Fee Management</h2>
        <p>Help users understand and control gas:</p>
        <ul>
          <li>Show gas price options (slow, standard, fast)</li>
          <li>Display total cost in familiar currency</li>
          <li>Suggest optimal times for lower fees</li>
          <li>Consider gas sponsorship for new users</li>
        </ul>

        <h2>Mobile Considerations</h2>
        <p>Many users access dApps from mobile. Make it seamless:</p>
        <ul>
          <li>Use WalletConnect for smooth mobile wallet connection</li>
          <li>Test on actual mobile devices, not just emulators</li>
          <li>Design for thumb-friendly tap targets</li>
          <li>Handle wallet app switching gracefully</li>
        </ul>

        <h2>Network Switching</h2>
        <p>If your dApp uses multiple chains:</p>
        <ul>
          <li>Detect current network automatically</li>
          <li>Prompt to switch with one click</li>
          <li>Add network to wallet if not configured</li>
          <li>Show which network is required for each action</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Good wallet UX is about reducing friction and building trust. Every improvement in usability lowers the barrier to Web3 adoption.</p>
      `
    }
  };

  const post = posts[id || ""];

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-light mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button variant="ghost">
              <ArrowLeft size={20} weight="light" />
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} weight="light" />
            Back to Blog
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-4">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <span>{post.date}</span>
            <span className="flex items-center gap-1">
              <Clock size={16} weight="light" />
              {post.readTime}
            </span>
            <button className="ml-auto flex items-center gap-1 hover:text-primary transition-colors">
              <Share size={16} weight="light" />
              Share
            </button>
          </div>

          {/* Content */}
          <div 
            className="prose prose-invert prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              color: 'hsl(var(--muted-foreground))'
            }}
          />

          {/* CTA */}
          <div className="glass-card rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-light mb-4">
              Enjoyed this article?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how I can help with your Web3 project
            </p>
            <a href="/#contact">
              <Button variant="neumorphic">
                Get in Touch
              </Button>
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
