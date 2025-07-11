import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n";

const AboutPage = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen w-full bg-white relative">
      {/* Noise Texture (Darker Dots) Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
      backgroundImage: `
        linear-gradient(to right, #e5e7eb 1px, transparent 1px),
        linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
      `,
      backgroundSize: "30px 30px",
    }}

      />
      
        <div className="relative z-10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-center mb-12">
            {t.aboutUs}
          </h1>

          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="w-full md:w-1/2">
              <img
            src="/cover/cconner.png"
            alt="May Studio workspace"
            className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2">
              <img
            src="/cover/image.png"
            alt="May Studio workspace"
            className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          <div className="prose prose-lg md:prose-xl max-w-none mx-auto text-foreground">
            <p className="text-lg md:text-xl mb-6 transition-transform duration-300 ease-in-out hover:scale-[1.02]">
              {t.aboutStudio}
            </p>
            <p className="text-lg md:text-xl mb-6 transition-transform duration-300 ease-in-out hover:scale-[1.02]">
              {t.about_desc_1}
            </p>
            <p className="text-lg md:text-xl mb-6 transition-transform duration-300 ease-in-out hover:scale-[1.02]">
              {t.about_desc_2}
            </p>
          </div>

          {/* Optional: Team section can be added here later */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

