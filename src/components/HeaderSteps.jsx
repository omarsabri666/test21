// import { CheckIcon } from "@heroicons/react/24/solid";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RiArrowDownDoubleFill } from "react-icons/ri";


function HeaderSteps({step}) {
  const { t, i18n } = useTranslation();
  const {step1, step2, step3, step4, step5} = t("header");
  //  useEffect(() => {
  //    i18n = i18n.dir();
  //  }, [i18n.language, i18n]);
  
    //  const [step, setStep] = useState(0);

    //  const stepName = ["General Information", "Email", "Message"];

    return (
      <div className=" flex  flex-col items-center  justify-center gap-6 px-2  pt-4 md:flex-row">
        <div className="flex flex-col items-center justify-center  gap-4 md:flex-row  ">
          <div className=" flex flex-col items-center gap-2  md:flex-row">
            <span
              className={` rounded-full  font-number  text-[16px] font-[500]  ${
                step == 0
                  ? " bg-[#41393D] text-white "
                  : step >= 1
                    ? " bg-[#4CAF50] text-white"
                    : "bg-[#9CA3AF] text-black"
              } flex  size-8 items-center justify-center`}
            >
              {step <= 0 ? (
                "01"
              ) : (
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.10364 9.99999C4.88604 10.0009 4.67673 9.90894 4.52049 9.74369L0.585001 5.57747C0.506559 5.49392 0.44397 5.39434 0.400806 5.2844C0.357642 5.17446 0.334749 5.05633 0.333434 4.93674C0.330778 4.69522 0.416175 4.46244 0.570838 4.28961C0.725501 4.11678 0.936762 4.01806 1.15814 4.01516C1.37953 4.01226 1.5929 4.10543 1.75132 4.27416L5.10698 7.82508L12.2482 0.258806C12.4068 0.0900745 12.6204 -0.00299449 12.8419 7.3515e-05C13.0635 0.00314152 13.2748 0.102095 13.4295 0.275166C13.5841 0.448236 13.6695 0.681246 13.6666 0.922937C13.6638 1.16463 13.5731 1.3952 13.4145 1.56393L5.6868 9.74369C5.53056 9.90894 5.32125 10.0009 5.10364 9.99999Z"
                    fill="white"
                  />
                </svg>
              )}
            </span>
            <h2
              className={`  text-[16px] font-[400] text-[#41393D] ${step === 0 ? " text-[#42393d]" : ""}`}
            >
              {step1}
            </h2>
          </div>

          {i18n.language === "ar" && (
            <svg
              width="25"
              className=" hidden md:block"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0752 19L13.0752 12L18.0752 5H15.6252L10.6252 12L15.6252 19H18.0752ZM12.1252 19L7.1252 12L12.1252 5H9.6752L4.67519 12L9.6752 19H12.1252Z"
                fill="#8F8A8E"
              />
            </svg>
          )}
          {i18n.language === "en" && (
            <svg
              className=" hidden md:block"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.17505 19L11.175 12L6.17505 5H8.62505L13.625 12L8.62505 19H6.17505ZM12.125 19L17.125 12L12.125 5H14.575L19.575 12L14.575 19H12.125Z"
                fill="#8F8A8E"
              />
            </svg>
          )}
          <RiArrowDownDoubleFill className=" md:hidden " />
          {/* <div className=" relative   h-[8px]  w-full rounded-lg bg-[#d2d3d8]">
            <div
              className={`absolute  ${step >= 1 ? "w-full" : ""} ${
                step === 0 ? "w-1/2" : ""
              } left-0 top-0 h-full rounded-lg
bg-[#c1b0a3]`}
            ></div>
          </div> */}
        </div>
        <div className="flex  flex-col items-center justify-center gap-4 md:flex-row ">
          <div className=" flex flex-col items-center gap-2 md:flex-row">
            <span
              className={` rounded-full  font-number  text-[16px] font-[500]  ${
                step == 1
                  ? " bg-[#41393D] text-white  "
                  : step >= 1
                    ? " bg-[#4CAF50]   text-white"
                    : "  bg-[#9CA3AF] text-white"
              } flex  size-8 items-center justify-center`}
            >
              {step <= 1 ? (
                "02"
              ) : (
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.10364 9.99999C4.88604 10.0009 4.67673 9.90894 4.52049 9.74369L0.585001 5.57747C0.506559 5.49392 0.44397 5.39434 0.400806 5.2844C0.357642 5.17446 0.334749 5.05633 0.333434 4.93674C0.330778 4.69522 0.416175 4.46244 0.570838 4.28961C0.725501 4.11678 0.936762 4.01806 1.15814 4.01516C1.37953 4.01226 1.5929 4.10543 1.75132 4.27416L5.10698 7.82508L12.2482 0.258806C12.4068 0.0900745 12.6204 -0.00299449 12.8419 7.3515e-05C13.0635 0.00314152 13.2748 0.102095 13.4295 0.275166C13.5841 0.448236 13.6695 0.681246 13.6666 0.922937C13.6638 1.16463 13.5731 1.3952 13.4145 1.56393L5.6868 9.74369C5.53056 9.90894 5.32125 10.0009 5.10364 9.99999Z"
                    fill="white"
                  />
                </svg>
              )}
            </span>
            <h2 className={` text-[16px] font-[400] text-[#41393D]`}>
              {step2}
            </h2>
          </div>

          {i18n.language === "ar" && (
            <svg
              width="25"
              className=" hidden md:block"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0752 19L13.0752 12L18.0752 5H15.6252L10.6252 12L15.6252 19H18.0752ZM12.1252 19L7.1252 12L12.1252 5H9.6752L4.67519 12L9.6752 19H12.1252Z"
                fill="#8F8A8E"
              />
            </svg>
          )}
          {i18n.language === "en" && (
            <svg
              className=" hidden md:block"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.17505 19L11.175 12L6.17505 5H8.62505L13.625 12L8.62505 19H6.17505ZM12.125 19L17.125 12L12.125 5H14.575L19.575 12L14.575 19H12.125Z"
                fill="#8F8A8E"
              />
            </svg>
          )}
          <RiArrowDownDoubleFill className=" md:hidden " />
          {/* <div className=" relative h-[8px]  w-full rounded-lg bg-[#d2d3d8]">
            <div
              className={`absolute ${step >= 2 ? "w-full" : ""} ${
                step === 1 ? "w-1/2" : ""
              } left-0 top-0 h-full rounded-lg bg-[#c1b0a3]`}
            ></div>
          </div> */}
        </div>
        <div className="flex flex-col items-center  justify-center gap-4 md:flex-row   ">
          <div className=" flex flex-col items-center gap-2 md:flex-row">
            <span
              className={` rounded-full  font-number  text-[16px] font-[500]  ${
                step == 2
                  ? " bg-[#41393D]   text-white "
                  : step >= 3
                    ? " bg-[#4CAF50] text-white"
                    : "bg-[#9CA3AF] text-white"
              } flex  size-8 items-center justify-center`}
            >
              {step <= 2 ? (
                "03"
              ) : (
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.10364 9.99999C4.88604 10.0009 4.67673 9.90894 4.52049 9.74369L0.585001 5.57747C0.506559 5.49392 0.44397 5.39434 0.400806 5.2844C0.357642 5.17446 0.334749 5.05633 0.333434 4.93674C0.330778 4.69522 0.416175 4.46244 0.570838 4.28961C0.725501 4.11678 0.936762 4.01806 1.15814 4.01516C1.37953 4.01226 1.5929 4.10543 1.75132 4.27416L5.10698 7.82508L12.2482 0.258806C12.4068 0.0900745 12.6204 -0.00299449 12.8419 7.3515e-05C13.0635 0.00314152 13.2748 0.102095 13.4295 0.275166C13.5841 0.448236 13.6695 0.681246 13.6666 0.922937C13.6638 1.16463 13.5731 1.3952 13.4145 1.56393L5.6868 9.74369C5.53056 9.90894 5.32125 10.0009 5.10364 9.99999Z"
                    fill="white"
                  />
                </svg>
              )}
            </span>
            <h2 className={` text-[16px] font-[400] text-[#41393D]`}>
              {step3}
            </h2>
          </div>

          {i18n.language === "ar" && (
            <svg
              width="25"
              className=" hidden md:block"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0752 19L13.0752 12L18.0752 5H15.6252L10.6252 12L15.6252 19H18.0752ZM12.1252 19L7.1252 12L12.1252 5H9.6752L4.67519 12L9.6752 19H12.1252Z"
                fill="#8F8A8E"
              />
            </svg>
          )}
          {i18n.language === "en" && (
            <svg
              className=" hidden md:block"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.17505 19L11.175 12L6.17505 5H8.62505L13.625 12L8.62505 19H6.17505ZM12.125 19L17.125 12L12.125 5H14.575L19.575 12L14.575 19H12.125Z"
                fill="#8F8A8E"
              />
            </svg>
          )}
          <RiArrowDownDoubleFill className=" md:hidden " />
          {/* <div className=" relative h-[8px]  w-full rounded-lg bg-[#d2d3d8]">
            <div
              className={`absolute ${step >= 3 ? "w-full" : ""} ${
                step === 2 ? "w-1/2" : ""
              } left-0 top-0 h-full rounded-lg bg-[#c1b0a3]`}
            ></div>
          </div> */}
        </div>
        <div className="flex  flex-col items-center  justify-center   gap-4 py-4 md:flex-row">
          <div className=" flex flex-col items-center gap-2 md:flex-row">
            <span
              className={` rounded-full  font-number  text-[16px] font-[500]  ${
                step == 3
                  ? " bg-[#41393D]   text-white "
                  : step >= 4
                    ? " bg-[#4CAF50] text-white"
                    : "bg-[#9CA3AF] text-white"
              } flex  size-8 items-center justify-center`}
            >
              {step <= 3 ? (
                "04"
              ) : (
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.10364 9.99999C4.88604 10.0009 4.67673 9.90894 4.52049 9.74369L0.585001 5.57747C0.506559 5.49392 0.44397 5.39434 0.400806 5.2844C0.357642 5.17446 0.334749 5.05633 0.333434 4.93674C0.330778 4.69522 0.416175 4.46244 0.570838 4.28961C0.725501 4.11678 0.936762 4.01806 1.15814 4.01516C1.37953 4.01226 1.5929 4.10543 1.75132 4.27416L5.10698 7.82508L12.2482 0.258806C12.4068 0.0900745 12.6204 -0.00299449 12.8419 7.3515e-05C13.0635 0.00314152 13.2748 0.102095 13.4295 0.275166C13.5841 0.448236 13.6695 0.681246 13.6666 0.922937C13.6638 1.16463 13.5731 1.3952 13.4145 1.56393L5.6868 9.74369C5.53056 9.90894 5.32125 10.0009 5.10364 9.99999Z"
                    fill="white"
                  />
                </svg>
              )}
            </span>
            <h2 className={` text-[16px] font-[400] text-[#41393D]`}>
              {step4}
            </h2>
          </div>

          {i18n.language === "ar" && (
            <svg
              width="25"
              className=" hidden md:block"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0752 19L13.0752 12L18.0752 5H15.6252L10.6252 12L15.6252 19H18.0752ZM12.1252 19L7.1252 12L12.1252 5H9.6752L4.67519 12L9.6752 19H12.1252Z"
                fill="#8F8A8E"
              />
            </svg>
          )}
          {i18n.language === "en" && (
            <svg
              className=" hidden md:block"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.17505 19L11.175 12L6.17505 5H8.62505L13.625 12L8.62505 19H6.17505ZM12.125 19L17.125 12L12.125 5H14.575L19.575 12L14.575 19H12.125Z"
                fill="#8F8A8E"
              />
            </svg>
          )}
          <RiArrowDownDoubleFill className=" md:hidden " />
          {/* <div className=" relative h-[8px]  w-full rounded-lg bg-[#d2d3d8]">
            <div
              className={`absolute ${step >= 3 ? "w-full" : ""} ${
                step === 2 ? "w-1/2" : ""
              } left-0 top-0 h-full rounded-lg bg-[#c1b0a3]`}
            ></div>
          </div> */}
        </div>
        <div className="flex  flex-col items-center  justify-center   gap-4 py-4 md:flex-row">
          <div className=" flex flex-col items-center gap-2 md:flex-row">
            <span
              className={` rounded-full  font-number  text-[16px] font-[500]  ${
                step == 4
                  ? " bg-[#41393D]   text-white "
                  : step >= 5
                    ? " bg-[#4CAF50] text-white"
                    : "bg-[#9CA3AF] text-white"
              } flex  size-8 items-center justify-center`}
            >
              {step <= 4 ? (
                "05"
              ) : (
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.10364 9.99999C4.88604 10.0009 4.67673 9.90894 4.52049 9.74369L0.585001 5.57747C0.506559 5.49392 0.44397 5.39434 0.400806 5.2844C0.357642 5.17446 0.334749 5.05633 0.333434 4.93674C0.330778 4.69522 0.416175 4.46244 0.570838 4.28961C0.725501 4.11678 0.936762 4.01806 1.15814 4.01516C1.37953 4.01226 1.5929 4.10543 1.75132 4.27416L5.10698 7.82508L12.2482 0.258806C12.4068 0.0900745 12.6204 -0.00299449 12.8419 7.3515e-05C13.0635 0.00314152 13.2748 0.102095 13.4295 0.275166C13.5841 0.448236 13.6695 0.681246 13.6666 0.922937C13.6638 1.16463 13.5731 1.3952 13.4145 1.56393L5.6868 9.74369C5.53056 9.90894 5.32125 10.0009 5.10364 9.99999Z"
                    fill="white"
                  />
                </svg>
              )}
            </span>
            <h2 className={` text-[16px] font-[400] text-[#41393D]`}>
              {step5}
            </h2>
          </div>

          {/* <div className=" relative h-[8px]  w-full rounded-lg bg-[#d2d3d8]">
            <div
              className={`absolute ${step >= 3 ? "w-full" : ""} ${
                step === 2 ? "w-1/2" : ""
              } left-0 top-0 h-full rounded-lg bg-[#c1b0a3]`}
            ></div>
          </div> */}
        </div>
      </div>
    );
}

export default HeaderSteps
