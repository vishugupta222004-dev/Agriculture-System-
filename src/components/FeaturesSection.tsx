import FeatureCard from "./FeatureCard";
import { 
  FileText, 
  Cloud, 
  Camera, 
  Mic, 
  DollarSign, 
  Sprout 
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: "Government Schemes",
      description: "Access MSP schemes, central & state government loans, subsidies on pesticides and farming equipment.",
      buttonText: "View Schemes",
      buttonVariant: "agriculture" as const,
    },
    {
      icon: Cloud,
      title: "Climate Predictions",
      description: "Get AI-powered weather forecasts and climate insights to plan your crops effectively for better yields.",
      buttonText: "Check Weather",
      buttonVariant: "default" as const,
    },
    {
      icon: Camera,
      title: "Disease Detection",
      description: "Upload plant images and detect diseases instantly with AI-powered analysis for immediate treatment recommendations.",
      buttonText: "Upload Plant Image",
      buttonVariant: "hero" as const,
    },
    {
      icon: Mic,
      title: "Voice Support",
      description: "Ask questions in your own language and get instant AI-powered answers. Supports multiple regional languages.",
      buttonText: "Try Voice Support",
      buttonVariant: "outline" as const,
    },
    {
      icon: DollarSign,
      title: "Budget Planning",
      description: "Get personalized recommendations based on your budget and farming needs for optimal resource allocation.",
      buttonText: "Plan Budget",
      buttonVariant: "agriculture" as const,
    },
    {
      icon: Sprout,
      title: "Home Gardening",
      description: "Perfect for domestic farmers and home vegetable plantation with tailored advice for small-scale farming.",
      buttonText: "Start Gardening",
      buttonVariant: "default" as const,
    },
  ];

  return (
    <section className="py-16 bg-muted/30" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Comprehensive Farming Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to make informed farming decisions, from government support 
            to AI-powered insights for sustainable agriculture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              buttonText={feature.buttonText}
              buttonVariant={feature.buttonVariant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;