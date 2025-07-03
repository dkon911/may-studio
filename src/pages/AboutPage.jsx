import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n";

const AboutPage = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-center mb-12">
            {t.aboutUs}
          </h1>

          <img
            src="/placeholder.svg?height=400&width=800" // Replace with a real image
            alt="May Studio workspace"
            className="w-full h-64 md:h-96 object-cover mb-12 rounded-lg shadow-lg"
          />

          <div className="prose prose-lg md:prose-xl max-w-none mx-auto text-foreground">
            <p>
              {t.aboutStudio}
            </p>
            <p>
              {t.about_desc_1}
            </p>
            <p>
              {t.about_desc_2}
            </p>
          </div>

          {/* Optional: Team section can be added here later */}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

