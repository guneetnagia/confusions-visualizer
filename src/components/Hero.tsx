import heroImage from "@/assets/confusion-matrix-hero.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-glow to-secondary py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center text-primary-foreground">
          <h1 className="mb-6 text-5xl md:text-7xl font-bold tracking-tight animate-fade-in">
            Understanding Confusion Matrix
          </h1>
          <p className="mb-8 text-xl md:text-2xl opacity-95 max-w-3xl mx-auto">
            Master the fundamental metrics of machine learning classification: 
            Accuracy, Precision, Recall, and F1 Score
          </p>
          <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto border-4 border-white/20">
            <img 
              src={heroImage} 
              alt="Confusion Matrix visualization showing True Positive, True Negative, False Positive, and False Negative quadrants"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/10 pointer-events-none" />
    </section>
  );
};

export default Hero;
