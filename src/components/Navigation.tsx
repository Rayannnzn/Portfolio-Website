import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // 👇 Close mobile menu and scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/#projects" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/#contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();

    // ✅ Go Home
    if (href === "/") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMobileMenuOpen(false);
      return;
    }

    // ✅ Handle section scroll (/#projects, /#contact)
    if (href.startsWith("/#")) {
      const sectionId = href.substring(2);

      if (location.pathname === "/") {
        scrollToSection(sectionId);
      } else {
        // Navigate home first, then scroll
        navigate("/");
        setTimeout(() => scrollToSection(sectionId), 400);
      }
      return;
    }

    // ✅ Navigate to other pages (About, Blog)
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-xl bg-background/80 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-semibold tracking-tighter"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-gradient">Rayan</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-light hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="/#projects" onClick={(e) => handleNavClick(e, "/#projects")}>
              <Button variant="ghost" size="sm">
                View Projects
              </Button>
            </a>
            <a href="/#contact" onClick={(e) => handleNavClick(e, "/#contact")}>
              <Button variant="neumorphic" size="sm">
                Hire Rayan
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} weight="light" /> : <List size={24} weight="light" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 w-full sm:w-80 bg-card/95 backdrop-blur-xl transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6 pb-6">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="py-4 text-lg font-light hover:text-primary transition-colors border-b border-border/50"
              style={{ animation: `fade-in 320ms ease-out ${index * 50}ms both` }}
            >
              {link.label}
            </a>
          ))}

          <div className="mt-8 space-y-3">
            <a href="/#projects" onClick={(e) => handleNavClick(e, "/#projects")}>
              <Button variant="ghost" className="w-full">
                View Projects
              </Button>
            </a>
            <a href="/#contact" onClick={(e) => handleNavClick(e, "/#contact")}>
              <Button variant="neumorphic" className="w-full">
                Hire Rayan
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
