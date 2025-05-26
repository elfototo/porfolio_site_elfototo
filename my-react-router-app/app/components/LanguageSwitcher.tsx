import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ru" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="relative">
      <button className="absolute top-6 left-6 z-20 cursor-pointer font-bold bg-yellow-500 rounded-full py-2 px-1 hover:scale-105 transition duration-300 hover:text-white text-white" onClick={toggleLanguage}>
        {i18n.language === "en" ? "RU" : "EN"}
      </button>
    </div>
  );
}
