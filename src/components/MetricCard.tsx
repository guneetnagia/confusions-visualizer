import { Card } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  formula: string;
  description: string;
  interpretation: string;
  icon: string;
  example: string;
}

const MetricCard = ({ title, formula, description, interpretation, icon, example }: MetricCardProps) => {
  return (
    <Card className="p-6 h-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
      <div className="flex items-center gap-4 mb-4">
        <img src={icon} alt={`${title} icon`} className="w-16 h-16 object-contain" />
        <h3 className="text-2xl font-bold text-primary">{title}</h3>
      </div>
      
      <div className="space-y-4">
        <div className="p-4 bg-accent rounded-lg">
          <p className="text-sm font-semibold text-accent-foreground mb-2">Formula:</p>
          <code className="text-base font-mono text-accent-foreground">{formula}</code>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground mb-2">What it measures:</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground mb-2">When to use:</p>
          <p className="text-sm text-muted-foreground">{interpretation}</p>
        </div>

        <div className="p-3 bg-primary/10 rounded-lg border-l-4 border-primary">
          <p className="text-sm font-semibold text-primary mb-1">Example:</p>
          <p className="text-sm text-foreground/80">{example}</p>
        </div>
      </div>
    </Card>
  );
};

export default MetricCard;
