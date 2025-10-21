import { ArrowUpRight, Code } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  caseStudyUrl: string;
  image?: string;
}

const ProjectCard = ({
  title,
  description,
  techStack,
  liveUrl,
  caseStudyUrl,
  image,
}: ProjectCardProps) => {
  return (
    <div className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 glow-hover glow-backdrop group ambient-glow">
      <div className="aspect-video bg-secondary/50 rounded-xl mb-4 overflow-hidden relative">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <Code size={48} weight="light" className="text-primary/40" />
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <span className="text-sm font-medium">View Project</span>
        </div>
      </div>

      <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <a 
          href={liveUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1"
          onClick={(e) => {
            console.log('Clicking live demo:', liveUrl);
          }}
        >
          <Button variant="neumorphic" size="sm" className="w-full group/btn" type="button">
            Live Demo
            <ArrowUpRight size={16} weight="light" className="ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </Button>
        </a>
        
        <Link to={caseStudyUrl} className="flex-1">
          <Button variant="ghost" size="sm" className="w-full" type="button">
            Case Study
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;