import Hero from "@/components/Hero";
import MatrixExplanation from "@/components/MatrixExplanation";
import MetricCard from "@/components/MetricCard";
import accuracyIcon from "@/assets/accuracy-icon.png";
import precisionIcon from "@/assets/precision-icon.png";
import recallIcon from "@/assets/recall-icon.png";
import f1Icon from "@/assets/f1-icon.png";

const Index = () => {
  const metrics = [
    {
      title: "Accuracy",
      formula: "(TP + TN) / (TP + TN + FP + FN)",
      description: "The proportion of correct predictions (both true positives and true negatives) among all predictions made.",
      interpretation: "Use accuracy when classes are balanced. It answers: 'How often is the model correct overall?'",
      icon: accuracyIcon,
      example: "Out of 100 predictions, 85 were correct. Accuracy = 85%"
    },
    {
      title: "Precision",
      formula: "TP / (TP + FP)",
      description: "The proportion of positive predictions that were actually correct. It measures how precise the positive predictions are.",
      interpretation: "Use precision when false positives are costly. It answers: 'When the model predicts positive, how often is it right?'",
      icon: precisionIcon,
      example: "Model predicted 50 positive cases, 45 were actually positive. Precision = 90%"
    },
    {
      title: "Recall (Sensitivity)",
      formula: "TP / (TP + FN)",
      description: "The proportion of actual positives that were correctly identified. It measures the model's ability to find all positive cases.",
      interpretation: "Use recall when false negatives are costly. It answers: 'Of all actual positive cases, how many did we catch?'",
      icon: recallIcon,
      example: "There were 60 actual positive cases, model found 54. Recall = 90%"
    },
    {
      title: "F1 Score",
      formula: "2 × (Precision × Recall) / (Precision + Recall)",
      description: "The harmonic mean of precision and recall. It provides a single score that balances both metrics.",
      interpretation: "Use F1 score when you need balance between precision and recall, especially with imbalanced classes.",
      icon: f1Icon,
      example: "Precision = 90%, Recall = 90%. F1 Score = 90%"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      <MatrixExplanation />
      
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Key Performance Metrics
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Understand the essential metrics derived from the confusion matrix
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {metrics.map((metric) => (
              <MetricCard key={metric.title} {...metric} />
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-card border-t">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground text-sm">
          <p>Understanding confusion matrices is essential for evaluating classification models in machine learning.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
