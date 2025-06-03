import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ru" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="relative">
      <button className="fixed z-99 w-[50px] h-[50px] top-5 left-4 cursor-pointer font-bold bg-yellow-500 rounded-full py-2 px-1 hover:scale-105 transition duration-300 hover:text-white text-white" onClick={toggleLanguage}>
        {i18n.language === "en" ? "RU" : "EN"}
      </button>
    </div>
  );
}

export function LanguageSwitcheMobiler() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ru" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="">
      <button className="cursor-pointer font-bold bg-yellow-500 rounded-full w-[50px] h-[50px] hover:scale-105 transition duration-300 hover:text-white text-white shadow-xl" onClick={toggleLanguage}>
        {i18n.language === "en" ? "RU" : "EN"}
      </button>
    </div>
  );
}
