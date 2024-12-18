import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const content = {
  vi: {
    hero: 'Lưu giữ khoảnh khắc đẹp nhất của bạn',
    recentWork: 'Dự án gần đây',
    bookNow: 'Đặt lịch ngay',
  },
  en: {
    hero: 'Capturing Your Perfect Moments',
    recentWork: 'Recent Work',
    bookNow: 'Book Now',
  },
};

export default function Home() {
  const { language } = useLanguage();
  const { isDark } = useTheme();

  return (
    <div className="space-y-8">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="aspect-[3/4] relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800"
      >
        <img
          src="/placeholder-hero.jpg"
          alt="Studio showcase"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center p-4">
          <h1 className="text-white text-3xl font-light text-center">
            {content[language].hero}
          </h1>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="mt-6 btn btn-primary :bg-white dark:text-gray-900 dark:hover:bg-gray-100"
          >
            {content[language].bookNow}
          </motion.button>
        </div>
      </motion.section>

      <section className="space-y-4">
        <h2 className="text-2xl">{content[language].recentWork}</h2>
        <div className="grid grid-cols-2 gap-2">
          {/* Thêm ảnh preview gallery ở đây */}
        </div>
      </section>
    </div>
  );
} 