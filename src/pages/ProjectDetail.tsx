import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, GithubLogo } from "@phosphor-icons/react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getProjectById } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = getProjectById(id || "");

  if (!project) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-light mb-4">Project Not Found</h1>
          <Link to="/">
            <Button variant="ghost">
              <ArrowLeft size={20} weight="light" />
              Back to Home
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

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} weight="light" />
            Back to Projects
          </Link>

          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">{project.description}</p>

            <div className="flex gap-4">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="neumorphic">
                  View Live Demo
                  <ArrowUpRight size={20} weight="light" />
                </Button>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  <GithubLogo size={20} weight="light" />
                  View Code
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card rounded-2xl p-2">
            <div className="aspect-video bg-secondary/50 rounded-xl flex items-center justify-center">
              <span className="text-muted-foreground">Project Screenshot</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-light tracking-tight mb-8">
            Project <span className="text-gradient">Overview</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card rounded-xl p-6">
              <div className="text-sm text-muted-foreground mb-1">Duration</div>
              <div className="text-lg font-medium">{project.duration}</div>
            </div>
            <div className="glass-card rounded-xl p-6">
              <div className="text-sm text-muted-foreground mb-1">Role</div>
              <div className="text-lg font-medium">{project.role}</div>
            </div>
            <div className="glass-card rounded-xl p-6">
              <div className="text-sm text-muted-foreground mb-1">Team Size</div>
              <div className="text-lg font-medium">{project.team}</div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light mb-4">The Problem</h3>
              <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
            </div>

            <div>
              <h3 className="text-2xl font-light mb-4">The Solution</h3>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </div>

            <div>
              <h3 className="text-2xl font-light mb-4">Key Highlights</h3>
              <ul className="space-y-3">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.impact && (
              <div className="glass-card rounded-2xl p-6 bg-primary/5 border-primary/20">
                <h3 className="text-xl font-medium mb-2">Impact & Results</h3>
                <p className="text-primary">{project.impact}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Architecture/Tech Stack */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-light tracking-tight mb-8">
            Technical <span className="text-gradient">Stack</span>
          </h2>

          <div className="glass-card rounded-2xl p-8">
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <div key={tech} className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">Interested in the code?</p>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                <GithubLogo size={20} weight="light" />
                View Repository
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">
            Like What You <span className="text-gradient">See?</span>
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
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="lg">
                Try Live Demo
                <ArrowUpRight size={20} weight="light" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
