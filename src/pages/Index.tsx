import { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Code, 
  Gauge, 
  ShieldCheck, 
  Wallet, 
  ChartLine, 
  ArrowRight,
  CaretRight,
  CaretLeft
} from "@phosphor-icons/react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { projects } from "@/data/projects";
import heroImage from "@/assets/hero-dashboard.jpg";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-blur");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".observe-section").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "CTO",
      company: "CryptoStart",
      content: "Rayan delivered a production-ready stablecoin protocol that exceeded our expectations. The code quality and attention to security details were outstanding.",
      result: "Reduced transaction gas costs by 30%"
    },
    {
      name: "Sarah Chen",
      role: "Product Lead",
      company: "DeFinance",
      content: "Working with Rayan was seamless. They understood our requirements immediately and delivered a polished crowdfunding platform with excellent UX.",
      result: "Launched alpha in 2 weeks"
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder",
      company: "Web3Games",
      content: "The raffle system Rayan built has been rock solid. Zero downtime, provably fair, and our users love the transparency.",
      result: "1000+ active users, zero incidents"
    }
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "Auditable Solidity",
      description: "Security-first smart contracts with comprehensive testing and gas optimization"
    },
    {
      icon: Gauge,
      title: "Gas Optimization",
      description: "Efficient contract design minimizing transaction costs without compromising functionality"
    },
    {
      icon: Code,
      title: "Robust Testing",
      description: "Extensive test coverage using Hardhat, including edge cases and attack vectors"
    },
    {
      icon: Wallet,
      title: "UX-Focused dApps",
      description: "Intuitive frontends with seamless wallet integration and real-time feedback"
    }
  ];

  const services = [
    {
      icon: ShieldCheck,
      title: "Audit & Smart Contracts",
      description: "Design and develop secure, auditable smart contracts with comprehensive testing",
      features: ["Security audits", "Gas optimization", "Test coverage", "Documentation"]
    },
    {
      icon: Code,
      title: "dApp Frontends",
      description: "Build responsive React/Next.js interfaces with wallet integration",
      features: ["Modern UI/UX", "Wallet connect", "Real-time updates", "Mobile responsive"]
    },
    {
      icon: ChartLine,
      title: "Deploy & Maintain",
      description: "Production deployment, monitoring, and ongoing support",
      features: ["CI/CD setup", "Monitoring", "Bug fixes", "Feature updates"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse"></span>
              Available for new projects
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight mb-6">
              Rayan — Web3 Engineer & 
              <span className="text-gradient"> dApp Builder</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Secure smart contracts and polished dApps. From audit-ready Solidity to production React frontends.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact">
                <Button variant="neumorphic" size="lg" className="min-w-[180px]">
                  Hire Rayan
                  <ArrowRight size={20} weight="light" />
                </Button>
              </a>
              <a href="#projects">
                <Button variant="ghost" size="lg" className="min-w-[180px]">
                  View Projects
                </Button>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-5xl mx-auto glow-backdrop-strong">
            <div className="glass-card rounded-3xl p-2 glow-hover ambient-glow-strong">
              <img 
                src={heroImage} 
                alt="Web3 Dashboard" 
                className="rounded-2xl w-full"
                style={{ animation: "scale-in 520ms ease-out 200ms both" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured In */}
      <section className="py-12 px-4 observe-section">
        <div className="container mx-auto">
          <p className="text-center text-sm text-muted-foreground mb-8">Trusted by Web3 teams</p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-50">
            {["Ethereum", "Polygon", "Chainlink", "Hardhat", "OpenZeppelin"].map((name) => (
              <span key={name} className="text-lg font-light">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 observe-section">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-world dApps and smart contracts built with security and UX in mind
            </p>
          </div>



<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
  {projects.map((project) => (
    <ProjectCard
      key={project.id}
      title={project.title}
      description={project.shortDescription}
      techStack={project.techStack}
      liveUrl={project.liveUrl}
      caseStudyUrl={project.caseStudyUrl}
      image={project.image} // Add this line
    />
  ))}
</div>


        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 observe-section">
        <div className="container mx-auto mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-4">
            Client <span className="text-gradient">Results</span>
          </h2>
          <p className="text-muted-foreground">What teams say about working with Rayan</p>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 px-4 snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 observe-section">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-4">
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From concept to production, a proven process for Web3 development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {services.map((service, index) => (
              <div key={service.title} className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-all glow-hover glow-backdrop ambient-glow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon size={24} weight="light" className="text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Process Flow */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <div className="glass-card rounded-xl px-6 py-3">Connect</div>
            <CaretRight size={24} weight="light" className="text-primary hidden sm:block" />
            <div className="glass-card rounded-xl px-6 py-3">Build</div>
            <CaretRight size={24} weight="light" className="text-primary hidden sm:block" />
            <div className="glass-card rounded-xl px-6 py-3">Deploy</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 observe-section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature) => (
              <div key={feature.title} className="glass-card rounded-2xl p-6 text-center hover:scale-[1.02] transition-all glow-hover ambient-glow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <feature.icon size={24} weight="light" className="text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 observe-section">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-6">
            Building Web3 with <span className="text-gradient">Security & UX</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I believe Web3 should be secure, efficient, and accessible. Every smart contract I write is 
            thoroughly tested, every dApp I build prioritizes user experience, and every line of code 
            is focused on delivering measurable results for my clients.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 observe-section">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-4">
              Let's Build <span className="text-gradient">Together</span>
            </h2>
            <p className="text-muted-foreground">
              Have a project in mind? Let's discuss how I can help bring it to life.
            </p>
          </div>

          <form className="glass-card rounded-2xl p-8 space-y-6 glow-backdrop ambient-glow">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input placeholder="Your name" className="bg-background/50" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="your@email.com" className="bg-background/50" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Company</label>
              <Input placeholder="Your company (optional)" className="bg-background/50" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Project Budget</label>
              <select className="w-full px-4 py-2 rounded-md bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Select budget range</option>
                <option>$5,000 - $10,000</option>
                <option>$10,000 - $25,000</option>
                <option>$25,000 - $50,000</option>
                <option>$50,000+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <Textarea placeholder="Tell me about your project..." rows={5} className="bg-background/50" />
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="nda" className="rounded" />
              <label htmlFor="nda" className="text-sm text-muted-foreground">
                I'm interested in signing an NDA
              </label>
            </div>

            <Button variant="neumorphic" size="lg" className="w-full">
              Send Message
              <ArrowRight size={20} weight="light" />
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
