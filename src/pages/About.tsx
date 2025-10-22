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
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Portrait */}
              <div className="animate-blur-in">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                  <div className="relative glass-card p-2 rounded-xl overflow-hidden">
                    <img
                      src={rayanPortrait}
                      alt="Rayan - Full-Stack Blockchain Developer"
                      className="w-full h-auto rounded-xl object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="animate-fade-up">
                <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
                  Building the <span className="text-gradient">Future of Finance</span>
                </h1>
                <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                  With over 3+ years of experience in blockchain development, I've helped dozens of startups
                  and enterprises build secure, scalable decentralized applications.
                </p>
                <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
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
                    className="btn-neuro inline-flex items-center gap-2"
                  >
                    View Projects
                  </a>
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass hover:bg-muted/20 transition-all duration-300"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 md:py-24 bg-muted/10">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-4xl md:text-5xl font-light text-center mb-4">
              Technical <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-center text-foreground/60 mb-16 max-w-2xl mx-auto">
              Technologies and platforms I work with daily
            </p>

            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {techStack.map((tech) => (
                <div
                  key={tech}
                  className="glass-card px-6 py-3 hover:bg-muted/20 transition-all duration-300 rounded-full"
                >
                  <span className="text-foreground/80">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-4xl md:text-5xl font-light text-center mb-4">
              Key <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-center text-foreground/60 mb-16 max-w-2xl mx-auto">
              Milestones and achievements in blockchain development
            </p>

            <div className="max-w-4xl mx-auto space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="glass-card hover:bg-muted/20 transition-all duration-300 p-6 rounded-2xl"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon & Metric */}
                    <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2 md:min-w-[120px]">
                      <div className="w-12 h-12 rounded-xl glass flex items-center justify-center">
                        <milestone.icon size={24} weight="light" className="text-primary" />
                      </div>
                      <div className="text-2xl font-light text-gradient">
                        {milestone.metric}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="text-sm text-foreground/50 mb-2">{milestone.year}</div>
                      <h3 className="text-2xl font-light mb-3">{milestone.title}</h3>
                      <p className="text-foreground/70 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-muted/10">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Ready to Start Your <span className="text-gradient">Blockchain Project?</span>
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help bring your vision to life with secure, scalable infrastructure.
            </p>
            <a href="/#contact" className="btn-neuro inline-flex items-center gap-2">
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
