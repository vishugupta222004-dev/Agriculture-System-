import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
};

export const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी', flag: '🇮🇳' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇮🇳' },
];

type LanguageContextType = {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

type LanguageProviderProps = {
  children: React.ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage) {
      const language = languages.find(lang => lang.code === savedLanguage);
      if (language) {
        setCurrentLanguage(language);
      }
    }
  }, []);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('preferred-language', language.code);
  };

  const t = (key: string): string => {
    return translations[currentLanguage.code]?.[key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Translations object
const translations: Record<string, Record<string, string>> = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.schemes': 'Schemes',
    'nav.climate': 'Climate',
    'nav.disease-detection': 'Disease Detection',
    'nav.voice-support': 'Voice Support',
    'nav.contact': 'Contact',
    'nav.get-started': 'Get Started',
    'nav.language': 'Language',

    // Hero Section
    'hero.title': 'Smart Farming for',
    'hero.title.highlight': 'Better Harvests',
    'hero.description': 'AI-powered support system for farmers with government schemes, climate predictions, disease recognition, and personalized recommendations based on your needs and budget.',
    'hero.get-started': 'Get Started',
    'hero.learn-more': 'Learn More',

    // Features Section
    'features.title': 'Comprehensive Farming Solutions',
    'features.description': 'Everything you need to make informed farming decisions, from government support to AI-powered insights for sustainable agriculture.',
    'features.schemes.title': 'Government Schemes',
    'features.schemes.description': 'Access MSP schemes, central & state government loans, subsidies on pesticides and farming equipment.',
    'features.schemes.button': 'View Schemes',
    'features.climate.title': 'Climate Predictions',
    'features.climate.description': 'Get AI-powered weather forecasts and climate insights to plan your crops effectively for better yields.',
    'features.climate.button': 'Check Weather',
    'features.disease.title': 'Disease Detection',
    'features.disease.description': 'Upload plant images and detect diseases instantly with AI-powered analysis for immediate treatment recommendations.',
    'features.disease.button': 'Upload Plant Image',
    'features.voice.title': 'Voice Support',
    'features.voice.description': 'Ask questions in your own language and get instant AI-powered answers. Supports multiple regional languages.',
    'features.voice.button': 'Try Voice Support',
    'features.budget.title': 'Budget Planning',
    'features.budget.description': 'Get personalized recommendations based on your budget and farming needs for optimal resource allocation.',
    'features.budget.button': 'Plan Budget',
    'features.gardening.title': 'Home Gardening',
    'features.gardening.description': 'Perfect for domestic farmers and home vegetable plantation with tailored advice for small-scale farming.',
    'features.gardening.button': 'Start Gardening',

    // Language Support Section
    'language.title': 'Multi-Language Support',
    'language.description': 'Access farming support in your preferred language for better understanding and communication',
    'language.support-text': 'Voice support and text assistance available in all listed languages',

    // Footer
    'footer.description': 'Empowering farmers with AI-powered support, government scheme access, and personalized agricultural solutions for sustainable farming.',
    'footer.commercial': 'Supporting commercial and domestic farmers',
    'footer.multilingual': 'Available in multiple regional languages',
    'footer.quick-links': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2024 SmartFarm. All rights reserved. A Government of India Initiative.',

    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.close': 'Close',
  },
  hi: {
    // Header
    'nav.home': 'होम',
    'nav.schemes': 'योजनाएं',
    'nav.climate': 'जलवायु',
    'nav.disease-detection': 'रोग पहचान',
    'nav.voice-support': 'आवाज सहायता',
    'nav.contact': 'संपर्क',
    'nav.get-started': 'शुरू करें',
    'nav.language': 'भाषा',

    // Hero Section
    'hero.title': 'बेहतर फसल के लिए',
    'hero.title.highlight': 'स्मार्ट खेती',
    'hero.description': 'किसानों के लिए AI-संचालित सहायता प्रणाली जिसमें सरकारी योजनाएं, जलवायु पूर्वानुमान, रोग पहचान, और आपकी आवश्यकताओं और बजट के आधार पर व्यक्तिगत सिफारिशें शामिल हैं।',
    'hero.get-started': 'शुरू करें',
    'hero.learn-more': 'और जानें',

    // Features Section
    'features.title': 'व्यापक कृषि समाधान',
    'features.description': 'सूचित कृषि निर्णय लेने के लिए आपको जो कुछ भी चाहिए, सरकारी सहायता से लेकर टिकाऊ कृषि के लिए AI-संचालित अंतर्दृष्टि तक।',
    'features.schemes.title': 'सरकारी योजनाएं',
    'features.schemes.description': 'MSP योजनाओं, केंद्रीय और राज्य सरकारी ऋण, कीटनाशकों और कृषि उपकरणों पर सब्सिडी का उपयोग करें।',
    'features.schemes.button': 'योजनाएं देखें',
    'features.climate.title': 'जलवायु पूर्वानुमान',
    'features.climate.description': 'बेहतर उपज के लिए अपनी फसलों की प्रभावी योजना बनाने हेतु AI-संचालित मौसम पूर्वानुमान और जलवायु अंतर्दृष्टि प्राप्त करें।',
    'features.climate.button': 'मौसम जांचें',
    'features.disease.title': 'रोग पहचान',
    'features.disease.description': 'पौधों की तस्वीरें अपलोड करें और तत्काल उपचार सिफारिशों के लिए AI-संचालित विश्लेषण के साथ तुरंत रोगों का पता लगाएं।',
    'features.disease.button': 'पौधे की तस्वीर अपलोड करें',
    'features.voice.title': 'आवाज सहायता',
    'features.voice.description': 'अपनी भाषा में प्रश्न पूछें और तुरंत AI-संचालित उत्तर प्राप्त करें। कई क्षेत्रीय भाषाओं का समर्थन करता है।',
    'features.voice.button': 'आवाज सहायता आजमाएं',
    'features.budget.title': 'बजट योजना',
    'features.budget.description': 'इष्टतम संसाधन आवंटन के लिए अपने बजट और कृषि आवश्यकताओं के आधार पर व्यक्तिगत सिफारिशें प्राप्त करें।',
    'features.budget.button': 'बजट की योजना बनाएं',
    'features.gardening.title': 'घरेलू बागवानी',
    'features.gardening.description': 'छोटे पैमाने की खेती के लिए अनुकूलित सलाह के साथ घरेलू किसानों और घरेलू सब्जी रोपण के लिए बिल्कुल सही।',
    'features.gardening.button': 'बागवानी शुरू करें',

    // Language Support Section
    'language.title': 'बहु-भाषा समर्थन',
    'language.description': 'बेहतर समझ और संचार के लिए अपनी पसंदीदा भाषा में कृषि सहायता प्राप्त करें',
    'language.support-text': 'सभी सूचीबद्ध भाषाओं में आवाज सहायता और पाठ सहायता उपलब्ध है',

    // Footer
    'footer.description': 'टिकाऊ कृषि के लिए AI-संचालित सहायता, सरकारी योजना पहुंच, और व्यक्तिगत कृषि समाधानों के साथ किसानों को सशक्त बनाना।',
    'footer.commercial': 'वाणिज्यिक और घरेलू किसानों का समर्थन',
    'footer.multilingual': 'कई क्षेत्रीय भाषाओं में उपलब्ध',
    'footer.quick-links': 'त्वरित लिंक',
    'footer.contact': 'संपर्क',
    'footer.copyright': '© 2024 स्मार्टफार्म। सभी अधिकार सुरक्षित। भारत सरकार की एक पहल।',

    // Common
    'common.loading': 'लोड हो रहा है...',
    'common.error': 'त्रुटि',
    'common.success': 'सफलता',
    'common.cancel': 'रद्द करें',
    'common.save': 'सहेजें',
    'common.close': 'बंद करें',
  },
  ml: {
    // Header
    'nav.home': 'ഹോം',
    'nav.schemes': 'പദ്ധതികൾ',
    'nav.climate': 'കാലാവസ്ഥ',
    'nav.disease-detection': 'രോഗ കണ്ടെത്തൽ',
    'nav.voice-support': 'ശബ്ദ പിന്തുണ',
    'nav.contact': 'ബന്ധപ്പെടുക',
    'nav.get-started': 'ആരംഭിക്കുക',
    'nav.language': 'ഭാഷ',

    // Hero Section
    'hero.title': 'മികച്ച വിളവെടുപ്പിനായി',
    'hero.title.highlight': 'സ്മാർട്ട് കൃഷി',
    'hero.description': 'സർക്കാർ പദ്ധതികൾ, കാലാവസ്ഥാ പ്രവചനങ്ങൾ, രോഗ തിരിച്ചറിയൽ, നിങ്ങളുടെ ആവശ്യങ്ങളും ബജറ്റും അടിസ്ഥാനമാക്കിയുള്ള വ്യക്തിഗത ശുപാർശകൾ എന്നിവയുള്ള കർഷകർക്കുള്ള AI-പവർഡ് സപ്പോർട്ട് സിസ്റ്റം.',
    'hero.get-started': 'ആരംഭിക്കുക',
    'hero.learn-more': 'കൂടുതൽ അറിയുക',

    // Features Section
    'features.title': 'സമഗ്ര കൃഷി പരിഹാരങ്ങൾ',
    'features.description': 'സർക്കാർ പിന്തുണ മുതൽ സുസ്ഥിര കൃഷിക്കുള്ള AI-പവർഡ് ഇൻസൈറ്റുകൾ വരെ, വിവരമുള്ള കൃഷി തീരുമാനങ്ങൾ എടുക്കാൻ നിങ്ങൾക്ക് ആവശ്യമായതെല്ലാം.',
    'features.schemes.title': 'സർക്കാർ പദ്ധതികൾ',
    'features.schemes.description': 'MSP പദ്ധതികൾ, കേന്ദ്ര-സംസ്ഥാന സർക്കാർ വായ്പകൾ, കീടനാശിനികളിലും കൃഷി ഉപകരണങ്ങളിലും സബ്സിഡി എന്നിവ ആക്സസ് ചെയ്യുക.',
    'features.schemes.button': 'പദ്ധതികൾ കാണുക',
    'features.climate.title': 'കാലാവസ്ഥാ പ്രവചനങ്ങൾ',
    'features.climate.description': 'മികച്ച വിളവിനായി നിങ്ങളുടെ വിളകൾ ഫലപ്രദമായി ആസൂത്രണം ചെയ്യാൻ AI-പവർഡ് കാലാവസ്ഥാ പ്രവചനങ്ങളും കാലാവസ്ഥാ ഇൻസൈറ്റുകളും നേടുക.',
    'features.climate.button': 'കാലാവസ്ഥ പരിശോധിക്കുക',
    'features.disease.title': 'രോഗ കണ്ടെത്തൽ',
    'features.disease.description': 'ചെടികളുടെ ചിത്രങ്ങൾ അപ്‌ലോഡ് ചെയ്യുക, ഉടനടി ചികിത്സാ ശുപാർശകൾക്കായി AI-പവർഡ് വിശകലനം ഉപയോഗിച്ച് തൽക്ഷണം രോഗങ്ങൾ കണ്ടെത്തുക.',
    'features.disease.button': 'ചെടിയുടെ ചിത്രം അപ്‌ലോഡ് ചെയ്യുക',
    'features.voice.title': 'ശബ്ദ പിന്തുണ',
    'features.voice.description': 'നിങ്ങളുടെ സ്വന്തം ഭാഷയിൽ ചോദ്യങ്ങൾ ചോദിക്കുക, തൽക്ഷണം AI-പവർഡ് ഉത്തരങ്ങൾ നേടുക. ഒന്നിലധികം പ്രാദേശിക ഭാഷകളെ പിന്തുണയ്ക്കുന്നു.',
    'features.voice.button': 'ശബ്ദ പിന്തുണ പരീക്ഷിക്കുക',
    'features.budget.title': 'ബജറ്റ് ആസൂത്രണം',
    'features.budget.description': 'ഒപ്റ്റിമൽ റിസോഴ്സ് അലോക്കേഷനായി നിങ്ങളുടെ ബജറ്റും കൃഷി ആവശ്യങ്ങളും അടിസ്ഥാനമാക്കി വ്യക്തിഗത ശുപാർശകൾ നേടുക.',
    'features.budget.button': 'ബജറ്റ് ആസൂത്രണം ചെയ്യുക',
    'features.gardening.title': 'വീട്ടുതോട്ടം',
    'features.gardening.description': 'ചെറുകിട കൃഷിക്കുള്ള അനുയോജ്യമായ ഉപദേശങ്ങളോടെ ഗാർഹിക കർഷകർക്കും വീട്ടിലെ പച്ചക്കറി കൃഷിക്കും അനുയോജ്യം.',
    'features.gardening.button': 'തോട്ടപ്പണി ആരംഭിക്കുക',

    // Language Support Section
    'language.title': 'മൾട്ടി-ലാംഗ്വേജ് സപ്പോർട്ട്',
    'language.description': 'മികച്ച ധാരണയ്ക്കും ആശയവിനിമയത്തിനുമായി നിങ്ങളുടെ ഇഷ്ട ഭാഷയിൽ കൃഷി പിന്തുണ ആക്സസ് ചെയ്യുക',
    'language.support-text': 'ലിസ്റ്റ് ചെയ്ത എല്ലാ ഭാഷകളിലും ശബ്ദ പിന്തുണയും ടെക്സ്റ്റ് സഹായവും ലഭ്യമാണ്',

    // Footer
    'footer.description': 'സുസ്ഥിര കൃഷിക്കായി AI-പവർഡ് സപ്പോർട്ട്, സർക്കാർ സ്കീം ആക്സസ്, വ്യക്തിഗത കാർഷിക പരിഹാരങ്ങൾ എന്നിവയിലൂടെ കർഷകരെ ശാക്തീകരിക്കുന്നു.',
    'footer.commercial': 'വാണിജ്യ, ഗാർഹിക കർഷകരെ പിന്തുണയ്ക്കുന്നു',
    'footer.multilingual': 'ഒന്നിലധികം പ്രാദേശിക ഭാഷകളിൽ ലഭ്യം',
    'footer.quick-links': 'ദ്രുത ലിങ്കുകൾ',
    'footer.contact': 'ബന്ധപ്പെടുക',
    'footer.copyright': '© 2024 സ്മാർട്ട്ഫാം. എല്ലാ അവകാശങ്ങളും സംരക്ഷിതം. ഇന്ത്യാ ഗവൺമെന്റിന്റെ ഒരു സംരംഭം.',

    // Common
    'common.loading': 'ലോഡ് ചെയ്യുന്നു...',
    'common.error': 'പിശക്',
    'common.success': 'വിജയം',
    'common.cancel': 'റദ്ദാക്കുക',
    'common.save': 'സേവ് ചെയ്യുക',
    'common.close': 'അടയ്ക്കുക',
  },
  // Add more languages as needed...
  te: {
    'nav.home': 'హోమ్',
    'nav.schemes': 'పథకాలు',
    'nav.climate': 'వాతావరణం',
    'nav.disease-detection': 'వ్యాధి గుర్తింపు',
    'nav.voice-support': 'వాయిస్ సపోర్ట్',
    'nav.contact': 'సంప్రదించండి',
    'nav.get-started': 'ప్రారంభించండి',
    'nav.language': 'భాష',
    'hero.title': 'మెరుగైన పంటల కోసం',
    'hero.title.highlight': 'స్మార్ట్ వ్యవసాయం',
    'hero.description': 'ప్రభుత్వ పథకాలు, వాతావరణ అంచనాలు, వ్యాధి గుర్తింపు మరియు మీ అవసరాలు మరియు బడ్జెట్ ఆధారంగా వ్యక్తిగత సిఫార్సులతో రైతుల కోసం AI-శక్తితో కూడిన మద్దతు వ్యవస్థ.',
    'hero.get-started': 'ప్రారంభించండి',
    'hero.learn-more': 'మరింత తెలుసుకోండి',
  },
  ta: {
    'nav.home': 'முகப்பு',
    'nav.schemes': 'திட்டங்கள்',
    'nav.climate': 'காலநிலை',
    'nav.disease-detection': 'நோய் கண்டறிதல்',
    'nav.voice-support': 'குரல் ஆதரவு',
    'nav.contact': 'தொடர்பு',
    'nav.get-started': 'தொடங்குங்கள்',
    'nav.language': 'மொழி',
    'hero.title': 'சிறந்த அறுவடைக்காக',
    'hero.title.highlight': 'ஸ்மார்ட் விவசாயம்',
    'hero.description': 'அரசாங்க திட்டங்கள், காலநிலை கணிப்புகள், நோய் அடையாளம் மற்றும் உங்கள் தேவைகள் மற்றும் பட்ஜெட்டின் அடிப்படையில் தனிப்பட்ட பரிந்துரைகளுடன் விவசாயிகளுக்கான AI-இயங்கும் ஆதரவு அமைப்பு.',
    'hero.get-started': 'தொடங்குங்கள்',
    'hero.learn-more': 'மேலும் அறிக',
  },
  kn: {
    'nav.home': 'ಮುಖ್ಯಪುಟ',
    'nav.schemes': 'ಯೋಜನೆಗಳು',
    'nav.climate': 'ಹವಾಮಾನ',
    'nav.disease-detection': 'ರೋಗ ಪತ್ತೆ',
    'nav.voice-support': 'ಧ್ವನಿ ಬೆಂಬಲ',
    'nav.contact': 'ಸಂಪರ್ಕಿಸಿ',
    'nav.get-started': 'ಪ್ರಾರಂಭಿಸಿ',
    'nav.language': 'ಭಾಷೆ',
    'hero.title': 'ಉತ್ತಮ ಸುಗ್ಗಿಗಾಗಿ',
    'hero.title.highlight': 'ಸ್ಮಾರ್ಟ್ ಕೃಷಿ',
    'hero.description': 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು, ಹವಾಮಾನ ಮುನ್ಸೂಚನೆಗಳು, ರೋಗ ಗುರುತಿಸುವಿಕೆ ಮತ್ತು ನಿಮ್ಮ ಅಗತ್ಯತೆಗಳು ಮತ್ತು ಬಜೆಟ್ ಆಧಾರದ ಮೇಲೆ ವೈಯಕ್ತಿಕ ಶಿಫಾರಸುಗಳೊಂದಿಗೆ ರೈತರಿಗಾಗಿ AI-ಚಾಲಿತ ಬೆಂಬಲ ವ್ಯವಸ್ಥೆ.',
    'hero.get-started': 'ಪ್ರಾರಂಭಿಸಿ',
    'hero.learn-more': 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ',
  },
  mr: {
    'nav.home': 'मुख्यपृष्ठ',
    'nav.schemes': 'योजना',
    'nav.climate': 'हवामान',
    'nav.disease-detection': 'रोग ओळख',
    'nav.voice-support': 'आवाज समर्थन',
    'nav.contact': 'संपर्क',
    'nav.get-started': 'सुरुवात करा',
    'nav.language': 'भाषा',
    'hero.title': 'चांगल्या कापणीसाठी',
    'hero.title.highlight': 'स्मार्ट शेती',
    'hero.description': 'सरकारी योजना, हवामान अंदाज, रोग ओळख आणि तुमच्या गरजा आणि बजेटवर आधारित वैयक्तिक शिफारशींसह शेतकऱ्यांसाठी AI-चालित समर्थन प्रणाली.',
    'hero.get-started': 'सुरुवात करा',
    'hero.learn-more': 'अधिक जाणून घ्या',
  },
  bn: {
    'nav.home': 'হোম',
    'nav.schemes': 'প্রকল্প',
    'nav.climate': 'জলবায়ু',
    'nav.disease-detection': 'রোগ সনাক্তকরণ',
    'nav.voice-support': 'ভয়েস সাপোর্ট',
    'nav.contact': 'যোগাযোগ',
    'nav.get-started': 'শুরু করুন',
    'nav.language': 'ভাষা',
    'hero.title': 'ভাল ফসলের জন্য',
    'hero.title.highlight': 'স্মার্ট কৃষি',
    'hero.description': 'সরকারি প্রকল্প, জলবায়ু পূর্বাভাস, রোগ সনাক্তকরণ এবং আপনার প্রয়োজন ও বাজেটের ভিত্তিতে ব্যক্তিগত সুপারিশ সহ কৃষকদের জন্য AI-চালিত সহায়তা ব্যবস্থা।',
    'hero.get-started': 'শুরু করুন',
    'hero.learn-more': 'আরও জানুন',
  },
};