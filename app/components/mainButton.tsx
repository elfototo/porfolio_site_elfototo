import { useTranslation } from "react-i18next";


export default function MainButton({
  value
}: {
  value: string
}) {
  const { i18n } = useTranslation();

  const handleDownload = () => {
    
    const currentLang = i18n.language;
    const fileName = currentLang === "ru" ? "CV_rus.pdf" : "CV_eng.pdf";

    fetch(`/${fileName}`)
      .then((res) => res.blob())
      .then((blob) => {
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = blobUrl;
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl); // очищаем память
      })
      .catch((err) => {
        console.error("Download failed:", err);
      });
  };

  return (
    <>
      <button
        onClick={handleDownload}
        className="h-auto py-4 px-10 cursor-pointer bg-yellow-500 hover:scale-103 text-white font-inter-semiBold rounded-lg mr-4 transition duration-300"
      >
        {value}
      </button>
    </>
  );
}
