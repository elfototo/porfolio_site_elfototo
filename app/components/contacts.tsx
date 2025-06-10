import ContactForm from "../components/contactForm";
import SocialContacts from "../components/socialContacts";
import { useTranslation } from "react-i18next";

export default function Contacts() {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full mb-4 mx-auto flex items-center">
        <h1 className="text-white text-5xl font-inter-bold mb-10 mx-auto">
          {t("contacts.title")}
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-center">
        {/* form */}
        <div className="lg:w-[75%] w-full lg:order-1 order-2">
          <ContactForm />
        </div>

        {/* content */}
        <div className="flex flex-col lg:order-2 order-1">
          <div className="max-w-md mx-auto lg:order-1 order-2">
            <h2 className="text-white text-2xl font-inter-extraBold mb-2">
              {t("form.text-title")}
            </h2>
            <p className="text-white text-md">{t("form.text-content")}</p>
          </div>

          <div className="flex flex-col items-center lg:items-start lg:w-[80%] w-full lg:order-2 order-1 lg:mb-0 mb-10 lg:mt-4 mt-0">
            <div className="bg-gray-300 w-full h-[1px] mb-10 lg:hidden block"></div>
            <SocialContacts />
            <div className="bg-gray-300 w-full h-[1px] mt-10 lg:hidden block"></div>

          </div>
        </div>
      </div>
    </>
  );
}
