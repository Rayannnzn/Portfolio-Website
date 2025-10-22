import { Link, useLocation } from "react-router-dom";
import { GithubLogo, LinkedinLogo, TwitterLogo, FileArrowDown } from "@phosphor-icons/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        // navigate to home first, then scroll after short delay
        window.location.href = href;
      }
    }
  };

  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
      {/* ✨ CTA Section */}
      <div className="py-16 text-center bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <h3 className="text-3xl md:text-4xl font-light mb-6">
          Let’s build something <span className="text-gradient">amazing</span> together.
        </h3>
        <a
          href="/#contact"
          onClick={(e) => scrollToSection(e, "/#contact")}
          className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:scale-105 transition-transform shadow-lg"
        >
          Start a Project
        </a>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-semibold tracking-tighter mb-3">
              <span className="text-gradient">Rayan</span>
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Web3 Engineer building secure smart contracts and polished dApps.
            </p>
            <p className="text-xs text-foreground/60 italic mb-4">
              Available for freelance & full-time opportunities.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/Rayannnzn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all glow-hover"
                aria-label="GitHub"
              >
                <GithubLogo size={20} weight="light" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-rayan-779318320"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all glow-hover"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={20} weight="light" />
              </a>
              <a
                href="https://x.com/real_rayanhere"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all glow-hover"
                aria-label="Twitter"
              >
                <TwitterLogo size={20} weight="light" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-3 text-foreground">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="/#projects"
                  onClick={(e) => scrollToSection(e, "/#projects")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-medium mb-3 text-foreground">Featured Work</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/projects/tsender" className="text-muted-foreground hover:text-primary transition-colors">
                  TSender dApp
                </Link>
              </li>
              <li>
                <Link to="/projects/stablecoin" className="text-muted-foreground hover:text-primary transition-colors">
                  DeFi Stablecoin
                </Link>
              </li>
              <li>
                <Link to="/projects/crowdfunding" className="text-muted-foreground hover:text-primary transition-colors">
                  Crowdfunding Platform
                </Link>
              </li>
              <li>
                <Link to="/projects/raffle" className="text-muted-foreground hover:text-primary transition-colors">
                  Raffle Lottery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-3 text-foreground">Get in Touch</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/#contact"
                  onClick={(e) => scrollToSection(e, "/#contact")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Form
                </a>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  download
                >
                  <FileArrowDown size={16} weight="light" />
                  Download Resume (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Rayan. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <a href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
