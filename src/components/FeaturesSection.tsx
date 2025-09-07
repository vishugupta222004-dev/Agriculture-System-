import FeatureCard from "./FeatureCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  FileText, 
  Cloud, 
  Camera, 
  Mic, 
  DollarSign, 
  Sprout 
} from "lucide-react";

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: FileText,
      title: t('features.schemes.title'),
      description: t('features.schemes.description'),
      buttonText: t('features.schemes.button'),
      buttonVariant: "agriculture" as const,
    },
    {
      icon: Cloud,
      title: t('features.climate.title'),
      description: t('features.climate.description'),
      buttonText: t('features.climate.button'),
      buttonVariant: "default" as const,
    },
    {
      icon: Camera,
      title: t('features.disease.title'),
      description: t('features.disease.description'),
      buttonText: t('features.disease.button'),
      buttonVariant: "hero" as const,
    },
    {
      icon: Mic,
      title: t('features.voice.title'),
      description: t('features.voice.description'),
      buttonText: t('features.voice.button'),
      buttonVariant: "outline" as const,
    },
    {
      icon: DollarSign,
      title: t('features.budget.title'),
      description: t('features.budget.description'),
      buttonText: t('features.budget.button'),
      buttonVariant: "agriculture" as const,
    },
    {
      icon: Sprout,
      title: t('features.gardening.title'),
      description: t('features.gardening.description'),
      buttonText: t('features.gardening.button'),
      buttonVariant: "default" as const,
    },
  ];

  return (
    <section className="py-16 bg-muted/30" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('features.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('features.description')}
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