import { Star } from "@phosphor-icons/react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  result: string;
}

const TestimonialCard = ({ name, role, company, content, result }: TestimonialCardProps) => {
  return (
    <div className="glass-card rounded-2xl p-8 w-[min(450px,calc(100vw-3rem))] h-[420px] flex flex-col justify-between text-center glow-hover ambient-glow">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} weight="fill" className="text-primary" />
        ))}
      </div>

      <p className="text-sm mb-4 leading-relaxed">{content}</p>

      <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 mb-4 shadow-[0_0_26px_hsl(263_86%_68%_/_0.12)]">
        <p className="text-sm font-medium text-primary">{result}</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-medium shadow-[0_0_24px_hsl(263_86%_68%_/_0.3)]">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-muted-foreground">
            {role} at {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
