import '@/styles/about-section.css'; // ✅ isolated Lunexa styling
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ShieldCheck, Code, Rocket, TrendUp } from '@phosphor-icons/react';
import rayanPortrait from '@/assets/rayan-portrait.png';

const techStack = [
  'Solidity', 'TypeScript', 'React', 'Node.js',
  'Ethereum', 'Polygon', 'Arbitrum', 'Optimism',
  'Hardhat', 'Foundry', 'Next.js', 'IPFS', 'OpenZeppelin'
];

const milestones = [
  {
    year: '2025',
    title: 'Defi Stable Coin dApp Launch',
    description: 'Full-stack decentralized finance application processing 1M+ transactions with zero downtime.',
    metric: '1M+ tx',
    icon: Rocket,
  },
  {
    year: '2025',
    title: 'USDT Token',
    description: 'Redesigned ERC-20 token contract achieving 28% gas reduction and passing all security audits.',
    metric: '-28% gas',
    icon: TrendUp,
  },
  {
    year: '2025',
    title: 'Airdrop Token Security',
    description: 'Comprehensive smart contract audit identifying and fixing critical vulnerabilities.',
    metric: '100% secure',
    icon: ShieldCheck,
  },
  {
    year: '2025',
    title: 'Cross Chain Token',
    description: 'Layer-2 optimization project increasing transactions 6x faster on Arbitrum.',
    metric: '6x faster',
    icon: Code,
  },
];

const About = () => {
  return (
    <div className="about-page min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="about-hero py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              
              {/* Portrait Frame */}
              <div className="glass-card border border-[hsl(var(--glass-border))] rounded-2xl p-4 glow">
                <img
                  src={rayanPortrait}
                  alt="Rayan - Full-Stack Blockchain Developer"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>

              {/* Text Content */}
              <div>
                <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight gradient-text">
                  Building the Future of Finance
                </h1>
                <p className="text-xl mb-8 leading-relaxed opacity-80">
                  With over 3+ years of experience in blockchain development, I've helped dozens of startups
                  and enterprises build secure, scalable decentralized applications.
                </p>
                <p className="text-lg mb-8 leading-relaxed opacity-80">
                  My expertise spans smart contract development, dApp architecture, tokenomics design,
                  and Layer-2 scaling solutions. I'm passionate about creating infrastructure that
                  empowers the next generation of Web3 applications.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <a
                    href="#timeline"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#timeline')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="btn-neuro"
                  >
                    View Projects
                  </a>
                  <a href="/#contact" className="btn-neuro">
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-4 gradient-text">
              Technical Expertise
            </h2>
            <p className="mb-12 text-lg opacity-80">
              Technologies and platforms I work with daily
            </p>

            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {techStack.map((tech) => (
                <div key={tech} className="glass-card text-sm px-4 py-2">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-4xl md:text-5xl font-light text-center mb-4 gradient-text">
              Key Projects
            </h2>
            <p className="text-center mb-16 max-w-2xl mx-auto opacity-80">
              Milestones and achievements in blockchain development
            </p>

            <div className="max-w-4xl mx-auto space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="glass-card glow-lg">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <milestone.icon size={24} weight="light" />
                      </div>
                      <div className="text-2xl font-light gradient-text">
                        {milestone.metric}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="text-sm mb-2 opacity-70">{milestone.year}</div>
                      <h3 className="text-2xl font-light mb-3">{milestone.title}</h3>
                      <p className="leading-relaxed opacity-80">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-20">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-4xl md:text-5xl font-light mb-6 gradient-text">
              Ready to Start Your Blockchain Project?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-80">
              Let's discuss how I can help bring your vision to life with secure, scalable infrastructure.
            </p>
            <a href="/#contact" className="btn-neuro">
              Get Started
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
