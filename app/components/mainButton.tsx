import { useTranslation } from "react-i18next";
import { Link, Outlet, useLocation } from "react-router";

export default function MainButton({
  onClick,
  value,
  isMain,
}: {
  onClick: () => void,
  value: string;
  isMain: boolean;
}) {
  const { i18n } = useTranslation();

  

  return (
    <>
      <button
        onClick={onClick}
        className={`h-auto py-4 px-10 cursor-pointer ${
          isMain
            ? "bg-yellow-500 text-white"
            : "bg-white border border-solid border-yellow-500 text-yellow-500"
        } hover:scale-103 font-inter-semiBold rounded-lg mr-4 transition duration-300`}
      >
        {value}
      </button>
    </>
  );
}
