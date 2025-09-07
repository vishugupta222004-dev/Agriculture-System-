import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Languages } from "lucide-react";

const LanguageSupport = () => {
  const languages = [
    { name: "English", code: "EN" },
    { name: "हिंदी", code: "HI" },
    { name: "മലയാളം", code: "ML" },
    { name: "తెలుగు", code: "TE" },
    { name: "தமிழ்", code: "TA" },
    { name: "ಕನ್ನಡ", code: "KN" },
    { name: "मराठी", code: "MR" },
    { name: "বাংলা", code: "BN" },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-gradient-card shadow-card">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-4">
              <Languages className="h-8 w-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl md:text-3xl font-bold text-primary">
              Multi-Language Support
            </CardTitle>
            <p className="text-muted-foreground">
              Access farming support in your preferred language for better understanding and communication
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
                  {language.name}
                </Badge>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              Voice support and text assistance available in all listed languages
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LanguageSupport;