import { useTranslation } from "react-i18next";

const Skeleton = () => {
  const { t } = useTranslation();
  return (
    <>
      <p className="text-center text-xl animate-pulse">{t("loading")}</p>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 m-4 md:grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-5">
          <div className="flex flex-col gap-4 w-80 md:w-96 my-6">
            <div className="skeleton h-72 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="flex flex-col gap-4 w-80 md:w-96 my-6">
            <div className="skeleton h-72 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="flex flex-col gap-4 w-80 md:w-96 my-6">
            <div className="skeleton h-72 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skeleton;
