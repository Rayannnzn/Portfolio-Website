import { ArrowUpRight, Code } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  liveCode?: string;
  caseStudyUrl: string;
  image?: string;
}

const ProjectCard = ({
  title,
  description,
  techStack,
  liveUrl,
  liveCode,
  caseStudyUrl,
  image,
}: ProjectCardProps) => {
  return (
    <div className="group glass-card rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 glow-hover glow-backdrop ambient-glow">
      {/* Clickable area for case study */}
      <Link to={caseStudyUrl} className="block">
        <div className="aspect-video bg-secondary/50 rounded-xl mb-4 overflow-hidden relative">
          {image ? (
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Code size={48} weight="light" className="text-primary/40" />
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <span className="text-sm font-medium">View Case Study</span>
          </div>
        </div>
      </Link>

      <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {description}
      </p>

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

      <div className="flex flex-wrap gap-3">
        {/* Live Demo */}
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
          aria-label={`Open live demo for ${title}`}
        >
          <Button variant="neumorphic" size="sm" className="w-full group/btn">
            Live Demo
            <ArrowUpRight
              size={16}
              weight="light"
              className="ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
            />
          </Button>
        </a>

        {/* View Code (conditionally rendered) */}
        {liveCode && (
          <a
            href={liveCode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
            aria-label={`View source code for ${title}`}
          >
            <Button variant="ghost" size="sm" className="w-full">
              View Code
            </Button>
          </a>
        )}

        {/* Case Study */}
        <Link to={caseStudyUrl} className="flex-1">
          <Button variant="ghost" size="sm" className="w-full">
            Case Study
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
