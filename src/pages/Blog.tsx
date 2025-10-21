import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "@phosphor-icons/react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const posts = [
    {
      id: "gas-efficient-stablecoin",
      title: "Building a Gas-Efficient Stablecoin — Lessons & Patterns",
      excerpt: "Deep dive into mint/burn mechanics and gas optimization strategies for stablecoin-like contracts. Learn how to design efficient token systems.",
      date: "January 8, 2025",
      readTime: "8 min read",
      tags: ["Solidity", "DeFi", "Gas Optimization"]
    },
    {
      id: "crowdfunding-case-study",
      title: "From Idea to Mainnet: Crowdfunding DApp Case Study",
      excerpt: "Step-by-step walkthrough of a crowdfunding dApp lifecycle: smart contracts, frontend development, security audits, and mainnet deployment.",
      date: "January 15, 2025",
      readTime: "12 min read",
      tags: ["Case Study", "dApp", "Full-Stack"]
    },
    {
      id: "raffle-randomness",
      title: "Raffle & Lottery on Ethereum — Randomness & Fairness",
      excerpt: "How to design a verifiable raffle system, tradeoffs of on-chain randomness solutions, and best practices for provably fair lotteries.",
      date: "March 28, 2025",
      readTime: "10 min read",
      tags: ["Chainlink", "VRF", "Security"]
    },
    {
      id: "wallet-ux-best-practices",
      title: "Wallet UX: Best Practices for dApp Onboarding",
      excerpt: "Practical patterns to reduce friction when users connect wallets and sign transactions. Make Web3 feel like Web2.",
      date: "July 28, 2025",
      readTime: "6 min read",
      tags: ["UX", "Frontend", "Web3"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl sm:text-6xl font-light tracking-tight mb-6 animate-fade-in">
            Web3 <span className="text-gradient">Insights</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Articles about smart contract development, dApp architecture, and Web3 best practices
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {posts.map((post, index) => (
              <article
                key={post.id}
                className="glass-card rounded-2xl p-8 hover:scale-[1.01] transition-all glow-hover"
                style={{ animation: `fade-in 420ms ease-out ${index * 100}ms both` }}
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link to={`/blog/${post.id}`}>
                  <h2 className="text-2xl sm:text-3xl font-light tracking-tight mb-3 hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={16} weight="light" />
                      {post.readTime}
                    </span>
                  </div>

                  <Link to={`/blog/${post.id}`}>
                    <Button variant="ghost" size="sm">
                      Read More
                      <ArrowRight size={16} weight="light" />
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">
            Want to Work <span className="text-gradient">Together?</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            I'm available for Web3 development projects and consulting
          </p>
          <a href="/#contact">
            <Button variant="neumorphic" size="lg">
              Get in Touch
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
