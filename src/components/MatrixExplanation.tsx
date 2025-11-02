import { Card } from "@/components/ui/card";

const MatrixExplanation = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          What is a Confusion Matrix?
        </h2>
        
        <Card className="p-8 shadow-lg border-2">
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            A confusion matrix is a table used to evaluate the performance of a classification model. 
            It shows the relationship between predicted and actual values, helping you understand where 
            your model is making correct predictions and where it's getting confused.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">The Four Quadrants</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-700 dark:text-green-400">True Positive (TP)</h4>
                  <p className="text-sm mt-1 text-foreground/80">Model correctly predicted positive class</p>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-700 dark:text-green-400">True Negative (TN)</h4>
                  <p className="text-sm mt-1 text-foreground/80">Model correctly predicted negative class</p>
                </div>

                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-bold text-red-700 dark:text-red-400">False Positive (FP)</h4>
                  <p className="text-sm mt-1 text-foreground/80">Model incorrectly predicted positive (Type I Error)</p>
                </div>

                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-bold text-red-700 dark:text-red-400">False Negative (FN)</h4>
                  <p className="text-sm mt-1 text-foreground/80">Model incorrectly predicted negative (Type II Error)</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <div className="p-6 bg-accent rounded-xl">
                <h4 className="font-semibold text-lg mb-2 text-accent-foreground">Real-World Example</h4>
                <p className="text-sm text-accent-foreground/80">
                  In medical diagnosis for a disease:
                </p>
                <ul className="text-sm mt-3 space-y-2 text-accent-foreground/80">
                  <li><strong>TP:</strong> Patient has disease, test says positive ✓</li>
                  <li><strong>TN:</strong> Patient healthy, test says negative ✓</li>
                  <li><strong>FP:</strong> Patient healthy, test says positive ✗</li>
                  <li><strong>FN:</strong> Patient has disease, test says negative ✗</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default MatrixExplanation;
