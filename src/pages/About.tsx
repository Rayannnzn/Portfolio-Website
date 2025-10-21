import { 
  Code, 
  GitBranch, 
  Shield, 
  Rocket, 
  FileArrowDown,
  LinkedinLogo,
  GithubLogo,
  TwitterLogo
} from "@phosphor-icons/react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  const skills = [
    "Solidity",
    "Hardhat",
    "Ethers.js",
    "Web3.js",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Vercel",
    "IPFS",
    "MetaMask",
    "WalletConnect",
    "Chainlink",
    "OpenZeppelin"
  ];

  const timeline = [
    {
      year: "2025",
      title: "Full-Stack Web3 Development",
      description: "Building production dApps and consulting for Web3 startups"
    },
    {
      year: "2023-2024",
      title: "Junior Blockchain Developer",
      description: "Launched 10+ smart contracts and dApps on Ethereum mainnet"
    },
    {
      year: "2023",
      title: "Started Web3 Journey",
      description: "Discovered blockchain development and began learning Solidity"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-6 flex items-center justify-center text-3xl font-semibold">
              R
            </div>
            <h1 className="text-5xl sm:text-6xl font-light tracking-tight mb-4">
              About <span className="text-gradient">Rayan</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Web3 Developer with 2+ years building secure smart contracts and dApps
            </p>
          </div>

          {/* Bio */}
          <div className="glass-card rounded-2xl p-8 mb-12">
            <p className="text-lg leading-relaxed mb-4">
              I'm Rayan, a Web3 developer passionate about building secure blockchain systems and polished user experiences. 
              Over the past 3 years, I've specialized in Solidity smart contracts, dApp frontends with React and Next.js, 
              and full-stack Web3 development.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              My approach combines security-first smart contract development with modern frontend design. Every project 
              I work on is thoroughly tested, gas-optimized, and built with the end user in mind.
            </p>
            <p className="text-lg leading-relaxed">
              I work with startups, crypto teams, and VCs to bring Web3 ideas to life — from initial architecture 
              to production deployment and beyond.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12">
            <a href="https://github.com/Rayannnzn" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                <GithubLogo size={20} weight="light" />
                GitHub
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/muhammad-rayan-779318320" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                <LinkedinLogo size={20} weight="light" />
                LinkedIn
              </Button>
            </a>
            <a href="https://x.com/real_rayanhere" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                <TwitterLogo size={20} weight="light" />
                Twitter
              </Button>
            </a>
          </div>

          <div className="text-center">
            <a href="/resume.pdf" download>
              <Button variant="neumorphic" size="lg">
                <FileArrowDown size={20} weight="light" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-12 text-center">
            Experience <span className="text-gradient">Timeline</span>
          </h2>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-sm font-medium text-primary">{item.year}</span>
                </div>
                <div className="flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  {index !== timeline.length - 1 && (
                    <div className="w-px h-24 bg-border ml-1 mt-2"></div>
                  )}
                </div>
                <div className="glass-card rounded-xl p-4 flex-1">
                  <h3 className="font-medium mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-12 text-center">
            Skills & <span className="text-gradient">Tech Stack</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="glass-card rounded-full px-6 py-3 text-sm hover:scale-105 transition-all glow-hover"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-12 text-center">
            Core <span className="text-gradient">Specialties</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Code, title: "Smart Contracts", desc: "Solidity development with security best practices" },
              { icon: GitBranch, title: "dApp Development", desc: "React/Next.js frontends with Web3 integration" },
              { icon: Shield, title: "Security Audits", desc: "Comprehensive testing and vulnerability assessment" },
              { icon: Rocket, title: "Deployment", desc: "Production deployment to Ethereum and L2s" }
            ].map((specialty) => (
              <div key={specialty.title} className="glass-card rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <specialty.icon size={24} weight="light" className="text-primary" />
                </div>
                <h3 className="font-medium mb-2">{specialty.title}</h3>
                <p className="text-sm text-muted-foreground">{specialty.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">
            Ready to <span className="text-gradient">Collaborate?</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Let's build something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact">
              <Button variant="neumorphic" size="lg">
                Start a Project
              </Button>
            </a>
            <a href="/#projects">
              <Button variant="ghost" size="lg">
                View My Work
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
