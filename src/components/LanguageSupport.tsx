import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Languages } from "lucide-react";
import { useLanguage, languages } from "@/contexts/LanguageContext";

const LanguageSupport = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-gradient-card shadow-card">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-4">
              <Languages className="h-8 w-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl md:text-3xl font-bold text-primary">
              {t('language.title')}
            </CardTitle>
            <p className="text-muted-foreground">
              {t('language.description')}
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              {languages.map((language) => (
                <Badge 
                  key={language.code}
                  variant="outline" 
                  className="px-4 py-2 text-sm border-primary/20 hover:bg-primary/10 transition-colors"
                >
                  {language.flag} {language.nativeName}
                </Badge>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              {t('language.support-text')}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LanguageSupport;