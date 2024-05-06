import { useTranslation } from "react-i18next";

function LastStep() {
  const {t} = useTranslation();
  const {downloadBtn,share,h1,h2,h3} = t("lastStep");
    return (
      <div className=" mx-5 flex w-screen flex-col items-center justify-center bg-white  p-10 ">
        <span className=" inline-flex size-8 items-center justify-center rounded-full bg-[#4CAF50]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 14 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.10364 9.99999C4.88604 10.0009 4.67673 9.90894 4.52049 9.74369L0.585001 5.57747C0.506559 5.49392 0.44397 5.39434 0.400806 5.2844C0.357642 5.17446 0.334749 5.05633 0.333434 4.93674C0.330778 4.69522 0.416175 4.46244 0.570838 4.28961C0.725501 4.11678 0.936762 4.01806 1.15814 4.01516C1.37953 4.01226 1.5929 4.10543 1.75132 4.27416L5.10698 7.82508L12.2482 0.258806C12.4068 0.0900745 12.6204 -0.00299449 12.8419 7.3515e-05C13.0635 0.00314152 13.2748 0.102095 13.4295 0.275166C13.5841 0.448236 13.6695 0.681246 13.6666 0.922937C13.6638 1.16463 13.5731 1.3952 13.4145 1.56393L5.6868 9.74369C5.53056 9.90894 5.32125 10.0009 5.10364 9.99999Z"
              fill="white"
            />
          </svg>
        </span>
        <div className=" my-3 text-center font-[700]">
          <h1>
            {h1} <br /> {h2}
            <br /> {h3}
          </h1>
        </div>
        <div className=" mt-5 flex  items-center gap-5">
          <button className=" inline-flex items-center gap-2 rounded-md bg-[#3B3539] px-6 py-2  text-white">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.2001 14.9728V1.6H12.8001V14.8688L16.2337 11.4336L17.3665 12.5664L12.0225 17.9104L6.2561 12.5856L7.3409 11.4112L11.2001 14.9728ZM3.2001 20.8V11.2H1.6001V22.4H22.4001V11.2H20.8001V20.8H3.2001Z"
                fill="white"
              />
            </svg>
{downloadBtn}         
 </button>
          <button className=" inline-flex items-center gap-2 rounded-md bg-[#3B3539] px-6 py-2  text-white">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0498 4.91C18.133 3.98392 17.041 3.24967 15.8374 2.75005C14.6339 2.25043 13.3429 1.99546 12.0398 2C6.5798 2 2.1298 6.45 2.1298 11.91C2.1298 13.66 2.5898 15.36 3.4498 16.86L2.0498 22L7.2998 20.62C8.7498 21.41 10.3798 21.83 12.0398 21.83C17.4998 21.83 21.9498 17.38 21.9498 11.92C21.9498 9.27 20.9198 6.78 19.0498 4.91ZM12.0398 20.15C10.5598 20.15 9.1098 19.75 7.8398 19L7.5398 18.82L4.4198 19.64L5.2498 16.6L5.0498 16.29C4.22755 14.977 3.79094 13.4592 3.7898 11.91C3.7898 7.37 7.4898 3.67 12.0298 3.67C14.2298 3.67 16.2998 4.53 17.8498 6.09C18.6173 6.85396 19.2255 7.76266 19.6392 8.76342C20.0529 9.76419 20.2638 10.8371 20.2598 11.92C20.2798 16.46 16.5798 20.15 12.0398 20.15ZM16.5598 13.99C16.3098 13.87 15.0898 13.27 14.8698 13.18C14.6398 13.1 14.4798 13.06 14.3098 13.3C14.1398 13.55 13.6698 14.11 13.5298 14.27C13.3898 14.44 13.2398 14.46 12.9898 14.33C12.7398 14.21 11.9398 13.94 10.9998 13.1C10.2598 12.44 9.7698 11.63 9.6198 11.38C9.4798 11.13 9.5998 11 9.7298 10.87C9.8398 10.76 9.9798 10.58 10.0998 10.44C10.2198 10.3 10.2698 10.19 10.3498 10.03C10.4298 9.86 10.3898 9.72 10.3298 9.6C10.2698 9.48 9.7698 8.26 9.5698 7.76C9.3698 7.28 9.1598 7.34 9.0098 7.33H8.5298C8.3598 7.33 8.0998 7.39 7.8698 7.64C7.6498 7.89 7.0098 8.49 7.0098 9.71C7.0098 10.93 7.89981 12.11 8.0198 12.27C8.1398 12.44 9.7698 14.94 12.2498 16.01C12.8398 16.27 13.2998 16.42 13.6598 16.53C14.2498 16.72 14.7898 16.69 15.2198 16.63C15.6998 16.56 16.6898 16.03 16.8898 15.45C17.0998 14.87 17.0998 14.38 17.0298 14.27C16.9598 14.16 16.8098 14.11 16.5598 13.99Z"
                fill="white"
              />
            </svg>
{share}          </button>
        </div>
      </div>
    );
}

export default LastStep