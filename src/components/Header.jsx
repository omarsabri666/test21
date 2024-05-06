import { useEffect } from "react";
import { useTranslation } from "react-i18next";


function Header() {
  const { i18n } = useTranslation();
  function changeLng(lng){
    i18n.changeLanguage(lng)
  }
  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n.language,i18n]);
    return (
      <header className="     bg-[#FFFFFF]  py-4">
        <div className=" mx-auto flex max-w-5xl items-center justify-between  px-7 ">
          {i18n.language === "en" && (
            <img width={79} height={52} src="../../public/Group.png" alt="" />
          )}
          {i18n.language === "ar" && (
            <button
              onClick={() => changeLng("en")}
              className="  font-header text-[20px]   font-bold text-[#41393D]"
            >
              English{" "}
            </button>
          )}
          {i18n.language === "ar" && (
            <img width={79} height={52} src="../../public/Group.png" alt="" />
          )}

          {i18n.language === "en" && (
            <button
              onClick={() => changeLng("ar")}
              className="  font-header text-[20px]   font-bold text-[#41393D]"
            >
              عربى
            </button>
          ) 
        
          }
        </div>
      </header>
    );
}

export default Header
