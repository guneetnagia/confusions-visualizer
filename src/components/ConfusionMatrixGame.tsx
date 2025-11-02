import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { medicalScenarios, spamScenarios, Scenario } from "./GameScenario";
import { CheckCircle2, XCircle, Heart, Mail } from "lucide-react";

interface GameStats {
  tp: number;
  tn: number;
  fp: number;
  fn: number;
}

const ConfusionMatrixGame = () => {
  const [gameMode, setGameMode] = useState<"medical" | "spam" | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stats, setStats] = useState<GameStats>({ tp: 0, tn: 0, fp: 0, fn: 0 });
  const [gameComplete, setGameComplete] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastPrediction, setLastPrediction] = useState<"correct" | "incorrect" | null>(null);

  const scenarios = gameMode === "medical" ? medicalScenarios : spamScenarios;
  const currentScenario = scenarios[currentIndex];

  const calculateMetrics = (s: GameStats) => {
    const total = s.tp + s.tn + s.fp + s.fn;
    const accuracy = total > 0 ? ((s.tp + s.tn) / total) * 100 : 0;
    const precision = (s.tp + s.fp) > 0 ? (s.tp / (s.tp + s.fp)) * 100 : 0;
    const recall = (s.tp + s.fn) > 0 ? (s.tp / (s.tp + s.fn)) * 100 : 0;
    const f1 = (precision + recall) > 0 ? (2 * (precision * recall) / (precision + recall)) : 0;
    
    return { accuracy, precision, recall, f1 };
  };

  const handlePrediction = (prediction: boolean) => {
    const actual = currentScenario.actualValue;
    let newStats = { ...stats };

    if (prediction && actual) {
      newStats.tp++;
      setLastPrediction("correct");
      toast.success("Correct! True Positive", {
        description: gameMode === "medical" ? "Patient has the condition" : "It's spam"
      });
    } else if (!prediction && !actual) {
      newStats.tn++;
      setLastPrediction("correct");
      toast.success("Correct! True Negative", {
        description: gameMode === "medical" ? "Patient is healthy" : "It's legitimate"
      });
    } else if (prediction && !actual) {
      newStats.fp++;
      setLastPrediction("incorrect");
      toast.error("Incorrect! False Positive", {
        description: gameMode === "medical" ? "Patient is actually healthy" : "It's actually legitimate"
      });
    } else {
      newStats.fn++;
      setLastPrediction("incorrect");
      toast.error("Incorrect! False Negative", {
        description: gameMode === "medical" ? "Patient actually has the condition" : "It's actually spam"
      });
    }

    setStats(newStats);
    setShowFeedback(true);

    setTimeout(() => {
      setShowFeedback(false);
      setLastPrediction(null);
      
      if (currentIndex < scenarios.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setGameComplete(true);
      }
    }, 1500);
  };

  const resetGame = () => {
    setCurrentIndex(0);
    setStats({ tp: 0, tn: 0, fp: 0, fn: 0 });
    setGameComplete(false);
    setGameMode(null);
    setShowFeedback(false);
    setLastPrediction(null);
  };

  const metrics = calculateMetrics(stats);
  const progress = ((currentIndex + 1) / scenarios.length) * 100;

  if (!gameMode) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <Card className="p-8 max-w-2xl w-full shadow-2xl">
          <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Confusion Matrix Game
          </h1>
          <p className="text-center text-muted-foreground mb-8">
            Make predictions and watch your confusion matrix metrics update in real-time!
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Button
              onClick={() => setGameMode("medical")}
              className="h-40 flex flex-col gap-4 text-lg hover:scale-105 transition-transform"
              variant="outline"
            >
              <Heart className="w-12 h-12 text-primary" />
              <div>
                <div className="font-bold">Medical Diagnosis</div>
                <div className="text-sm opacity-70">Predict heart disease risk</div>
              </div>
            </Button>
            
            <Button
              onClick={() => setGameMode("spam")}
              className="h-40 flex flex-col gap-4 text-lg hover:scale-105 transition-transform"
              variant="outline"
            >
              <Mail className="w-12 h-12 text-primary" />
              <div>
                <div className="font-bold">Spam Detection</div>
                <div className="text-sm opacity-70">Identify spam emails</div>
              </div>
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  if (gameComplete) {
    const score = Math.round(metrics.accuracy);
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <Card className="p-8 max-w-4xl w-full shadow-2xl">
          <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Game Complete! 🎉
          </h2>
          
          <div className="text-center mb-8">
            <div className="text-6xl font-bold text-primary mb-2">{score}%</div>
            <div className="text-xl text-muted-foreground">Accuracy Score</div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-2 border-green-500">
              <h3 className="text-2xl font-bold text-center mb-4">Confusion Matrix</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-green-500 text-white p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold">{stats.tp}</div>
                  <div className="text-xs">True Positive</div>
                </div>
                <div className="bg-green-500 text-white p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold">{stats.tn}</div>
                  <div className="text-xs">True Negative</div>
                </div>
                <div className="bg-red-500 text-white p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold">{stats.fp}</div>
                  <div className="text-xs">False Positive</div>
                </div>
                <div className="bg-red-500 text-white p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold">{stats.fn}</div>
                  <div className="text-xs">False Negative</div>
                </div>
              </div>
            </Card>

            <div className="space-y-4">
              <Card className="p-4 bg-accent">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Precision:</span>
                  <span className="text-2xl font-bold text-primary">{metrics.precision.toFixed(1)}%</span>
                </div>
              </Card>
              <Card className="p-4 bg-accent">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Recall:</span>
                  <span className="text-2xl font-bold text-primary">{metrics.recall.toFixed(1)}%</span>
                </div>
              </Card>
              <Card className="p-4 bg-accent">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">F1 Score:</span>
                  <span className="text-2xl font-bold text-primary">{metrics.f1.toFixed(1)}%</span>
                </div>
              </Card>
            </div>
          </div>

          <Button onClick={resetGame} className="w-full h-12 text-lg">
            Play Again
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container mx-auto max-w-6xl py-8">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-bold">
              {gameMode === "medical" ? "Medical Diagnosis Game" : "Spam Detection Game"}
            </h2>
            <Button onClick={resetGame} variant="outline" size="sm">
              Change Game
            </Button>
          </div>
          <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-primary to-secondary h-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Question {currentIndex + 1} of {scenarios.length}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="p-8 shadow-xl min-h-[400px] flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-4">{currentScenario.description}</h3>
                <p className="text-lg text-muted-foreground mb-8">{currentScenario.details}</p>
                
                <div className="text-lg font-semibold mb-4 text-primary">
                  {gameMode === "medical" 
                    ? "Does this patient have heart disease risk?"
                    : "Is this email spam?"}
                </div>
              </div>

              {!showFeedback && (
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    onClick={() => handlePrediction(true)}
                    size="lg"
                    className="h-20 text-xl bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                  >
                    <XCircle className="w-8 h-8 mr-2" />
                    {gameMode === "medical" ? "At Risk" : "Spam"}
                  </Button>
                  <Button
                    onClick={() => handlePrediction(false)}
                    size="lg"
                    className="h-20 text-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                  >
                    <CheckCircle2 className="w-8 h-8 mr-2" />
                    {gameMode === "medical" ? "Healthy" : "Legitimate"}
                  </Button>
                </div>
              )}

              {showFeedback && (
                <div className={`text-center p-6 rounded-lg ${
                  lastPrediction === "correct" 
                    ? "bg-green-100 dark:bg-green-950 border-2 border-green-500" 
                    : "bg-red-100 dark:bg-red-950 border-2 border-red-500"
                }`}>
                  <div className="text-3xl font-bold">
                    {lastPrediction === "correct" ? "✓ Correct!" : "✗ Incorrect"}
                  </div>
                </div>
              )}
            </Card>
          </div>

          <div className="space-y-4">
            <Card className="p-6 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-center">Live Confusion Matrix</h3>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-green-500 text-white p-3 rounded-lg text-center animate-scale-in">
                  <div className="text-2xl font-bold">{stats.tp}</div>
                  <div className="text-xs">TP</div>
                </div>
                <div className="bg-green-500 text-white p-3 rounded-lg text-center animate-scale-in">
                  <div className="text-2xl font-bold">{stats.tn}</div>
                  <div className="text-xs">TN</div>
                </div>
                <div className="bg-red-500 text-white p-3 rounded-lg text-center animate-scale-in">
                  <div className="text-2xl font-bold">{stats.fp}</div>
                  <div className="text-xs">FP</div>
                </div>
                <div className="bg-red-500 text-white p-3 rounded-lg text-center animate-scale-in">
                  <div className="text-2xl font-bold">{stats.fn}</div>
                  <div className="text-xs">FN</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-center">Current Metrics</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Accuracy:</span>
                  <span className="text-xl font-bold text-primary">{metrics.accuracy.toFixed(1)}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Precision:</span>
                  <span className="text-xl font-bold text-primary">{metrics.precision.toFixed(1)}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Recall:</span>
                  <span className="text-xl font-bold text-primary">{metrics.recall.toFixed(1)}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">F1 Score:</span>
                  <span className="text-xl font-bold text-primary">{metrics.f1.toFixed(1)}%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfusionMatrixGame;
