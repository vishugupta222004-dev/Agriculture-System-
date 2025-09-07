import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-farming.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t('hero.title')}{" "}
            <span className="text-harvest-orange">{t('hero.title.highlight')}</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/schemes">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                {t('hero.get-started')}
              </Button>
            </Link>
            <Link to="/climate">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                {t('hero.learn-more')}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;