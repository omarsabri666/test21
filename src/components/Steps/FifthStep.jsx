import { useTranslation } from "react-i18next";

function FifthStep() {
  const { t } = useTranslation();
  const { person,bottle,Disclaimers,date,l1,l2,extra,extraAnswer,type,name,phone,email} = t("step5");
    return (
      <div className=" mx-5 mb-20 flex  w-screen flex-col bg-white  p-10 ">
        <div className="  flex  flex-col   justify-center   gap-1  md:w-[260px]">
          <div className="flex items-center  justify-between">
            <h4>{type}:</h4>
            <h4 className=" font-semibold">Multipe Date Event</h4>
          </div>
          <div className="flex items-center  justify-between">
            <h4>{name}:</h4>
            <h4 className=" font-semibold">Ahmed Tahseen</h4>
          </div>
          <div className="flex items-center  justify-between">
            <h4>{email}:</h4>
            <h4 className=" font-semibold">ahmed@gmail.com</h4>
          </div>
          <div className="flex items-center  justify-between">
            <h4>{phone}:</h4>
            <h4 className=" font-semibold">+966 xxx xxxxx</h4>
          </div>
        </div>
        <div className=" text-center md:text-start">

        <h2 className=" mt-6 font-[700]">{date}:</h2>
        </div>
        <div className=" my-4 grid grid-cols-1  gap-6 md:grid-cols-3 ">
          <div className=" flex flex-col  items-center  md:items-start   ">
            <div className="  flex items-center gap-5">
              <span className=" inline-flex size-6  items-center justify-center rounded-full bg-[#8F8A8E]">
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_104_920)">
                    <path
                      d="M3.4038 0.25C3.51519 0.25 3.62202 0.29425 3.70079 0.373015C3.77955 0.45178 3.8238 0.558609 3.8238 0.67V1.4554H8.334V0.6754C8.334 0.564009 8.37825 0.45718 8.45702 0.378415C8.53578 0.29965 8.64261 0.2554 8.754 0.2554C8.86539 0.2554 8.97222 0.29965 9.05099 0.378415C9.12975 0.45718 9.174 0.564009 9.174 0.6754V1.4554H10.8C11.1182 1.4554 11.4233 1.58175 11.6483 1.80666C11.8733 2.03157 11.9998 2.33664 12 2.6548V11.0506C11.9998 11.3688 11.8733 11.6738 11.6483 11.8987C11.4233 12.1237 11.1182 12.25 10.8 12.25H1.2C0.881844 12.25 0.57671 12.1237 0.351684 11.8987C0.126658 11.6738 0.000159078 11.3688 0 11.0506L0 2.6548C0.000159078 2.33664 0.126658 2.03157 0.351684 1.80666C0.57671 1.58175 0.881844 1.4554 1.2 1.4554H2.9838V0.6694C2.98396 0.558113 3.02828 0.451439 3.10703 0.372803C3.18578 0.294167 3.29251 0.25 3.4038 0.25ZM0.84 4.8952V11.0506C0.84 11.0979 0.849312 11.1447 0.867403 11.1884C0.885495 11.232 0.912013 11.2717 0.945442 11.3052C0.978871 11.3386 1.01856 11.3651 1.06223 11.3832C1.10591 11.4013 1.15272 11.4106 1.2 11.4106H10.8C10.8473 11.4106 10.8941 11.4013 10.9378 11.3832C10.9814 11.3651 11.0211 11.3386 11.0546 11.3052C11.088 11.2717 11.1145 11.232 11.1326 11.1884C11.1507 11.1447 11.16 11.0979 11.16 11.0506V4.9036L0.84 4.8952ZM4.0002 9.0214V10.021H3V9.0214H4.0002ZM6.4998 9.0214V10.021H5.5002V9.0214H6.4998ZM9 9.0214V10.021H7.9998V9.0214H9ZM4.0002 6.6352V7.6348H3V6.6352H4.0002ZM6.4998 6.6352V7.6348H5.5002V6.6352H6.4998ZM9 6.6352V7.6348H7.9998V6.6352H9ZM2.9838 2.2948H1.2C1.15272 2.2948 1.10591 2.30411 1.06223 2.3222C1.01856 2.3403 0.978871 2.36681 0.945442 2.40024C0.912013 2.43367 0.885495 2.47336 0.867403 2.51703C0.849312 2.56071 0.84 2.60752 0.84 2.6548V4.0558L11.16 4.0642V2.6548C11.16 2.60752 11.1507 2.56071 11.1326 2.51703C11.1145 2.47336 11.088 2.43367 11.0546 2.40024C11.0211 2.36681 10.9814 2.3403 10.9378 2.3222C10.8941 2.30411 10.8473 2.2948 10.8 2.2948H9.174V2.8522C9.174 2.96359 9.12975 3.07042 9.05099 3.14919C8.97222 3.22795 8.86539 3.2722 8.754 3.2722C8.64261 3.2722 8.53578 3.22795 8.45702 3.14919C8.37825 3.07042 8.334 2.96359 8.334 2.8522V2.2948H3.8238V2.8468C3.8238 2.95819 3.77955 3.06502 3.70079 3.14378C3.62202 3.22255 3.51519 3.2668 3.4038 3.2668C3.29241 3.2668 3.18558 3.22255 3.10682 3.14378C3.02805 3.06502 2.9838 2.95819 2.9838 2.8468V2.2948Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_104_920">
                      <rect
                        width="12"
                        height="12"
                        fill="white"
                        transform="translate(0 0.25)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <h3 className=" text-[16px] font-[700] text-black">
                20 April, 2024
              </h3>
            </div>
            <div className=" my-1  flex items-start gap-2">
              <p>
                Lorem ipsum dolor sit amet <br /> consectetur:
              </p>
              <span className=" font-[700]">(03)</span> {person}
            </div>
            <div className="  my-1 flex items-start gap-2">
              <p>
                Lorem ipsum dolor sit amet <br /> consectetur:
              </p>
              <p>
                <span className=" font-[700]">(07)</span> {bottle}
              </p>
            </div>
            <div className="  my-1 flex items-start gap-2">
              <p>
                Lorem ipsum dolor sit amet <br /> consectetur:
              </p>
              <span className=" font-[700]">(03)</span> {person}
            </div>
          </div>
          <div className=" flex flex-col  items-center  md:items-start ">
            <div className="  flex items-center gap-5">
              <span className=" inline-flex size-6  items-center justify-center rounded-full bg-[#8F8A8E]">
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_104_920)">
                    <path
                      d="M3.4038 0.25C3.51519 0.25 3.62202 0.29425 3.70079 0.373015C3.77955 0.45178 3.8238 0.558609 3.8238 0.67V1.4554H8.334V0.6754C8.334 0.564009 8.37825 0.45718 8.45702 0.378415C8.53578 0.29965 8.64261 0.2554 8.754 0.2554C8.86539 0.2554 8.97222 0.29965 9.05099 0.378415C9.12975 0.45718 9.174 0.564009 9.174 0.6754V1.4554H10.8C11.1182 1.4554 11.4233 1.58175 11.6483 1.80666C11.8733 2.03157 11.9998 2.33664 12 2.6548V11.0506C11.9998 11.3688 11.8733 11.6738 11.6483 11.8987C11.4233 12.1237 11.1182 12.25 10.8 12.25H1.2C0.881844 12.25 0.57671 12.1237 0.351684 11.8987C0.126658 11.6738 0.000159078 11.3688 0 11.0506L0 2.6548C0.000159078 2.33664 0.126658 2.03157 0.351684 1.80666C0.57671 1.58175 0.881844 1.4554 1.2 1.4554H2.9838V0.6694C2.98396 0.558113 3.02828 0.451439 3.10703 0.372803C3.18578 0.294167 3.29251 0.25 3.4038 0.25ZM0.84 4.8952V11.0506C0.84 11.0979 0.849312 11.1447 0.867403 11.1884C0.885495 11.232 0.912013 11.2717 0.945442 11.3052C0.978871 11.3386 1.01856 11.3651 1.06223 11.3832C1.10591 11.4013 1.15272 11.4106 1.2 11.4106H10.8C10.8473 11.4106 10.8941 11.4013 10.9378 11.3832C10.9814 11.3651 11.0211 11.3386 11.0546 11.3052C11.088 11.2717 11.1145 11.232 11.1326 11.1884C11.1507 11.1447 11.16 11.0979 11.16 11.0506V4.9036L0.84 4.8952ZM4.0002 9.0214V10.021H3V9.0214H4.0002ZM6.4998 9.0214V10.021H5.5002V9.0214H6.4998ZM9 9.0214V10.021H7.9998V9.0214H9ZM4.0002 6.6352V7.6348H3V6.6352H4.0002ZM6.4998 6.6352V7.6348H5.5002V6.6352H6.4998ZM9 6.6352V7.6348H7.9998V6.6352H9ZM2.9838 2.2948H1.2C1.15272 2.2948 1.10591 2.30411 1.06223 2.3222C1.01856 2.3403 0.978871 2.36681 0.945442 2.40024C0.912013 2.43367 0.885495 2.47336 0.867403 2.51703C0.849312 2.56071 0.84 2.60752 0.84 2.6548V4.0558L11.16 4.0642V2.6548C11.16 2.60752 11.1507 2.56071 11.1326 2.51703C11.1145 2.47336 11.088 2.43367 11.0546 2.40024C11.0211 2.36681 10.9814 2.3403 10.9378 2.3222C10.8941 2.30411 10.8473 2.2948 10.8 2.2948H9.174V2.8522C9.174 2.96359 9.12975 3.07042 9.05099 3.14919C8.97222 3.22795 8.86539 3.2722 8.754 3.2722C8.64261 3.2722 8.53578 3.22795 8.45702 3.14919C8.37825 3.07042 8.334 2.96359 8.334 2.8522V2.2948H3.8238V2.8468C3.8238 2.95819 3.77955 3.06502 3.70079 3.14378C3.62202 3.22255 3.51519 3.2668 3.4038 3.2668C3.29241 3.2668 3.18558 3.22255 3.10682 3.14378C3.02805 3.06502 2.9838 2.95819 2.9838 2.8468V2.2948Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_104_920">
                      <rect
                        width="12"
                        height="12"
                        fill="white"
                        transform="translate(0 0.25)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <h3 className=" text-[16px] font-[700] text-black">
                20 April, 2024
              </h3>
            </div>
            <div className=" my-1  flex items-start gap-2">
              <p>
                Lorem ipsum dolor sit amet <br /> consectetur:
              </p>
              <span className=" font-[700]">(03)</span> {person}
            </div>
            <div className="  my-1 flex items-start gap-2">
              <p>
                Lorem ipsum dolor sit amet <br /> consectetur:
              </p>
              <p>
                <span className=" font-[700]">(07)</span> {bottle}
              </p>
            </div>
            <div className="  my-1 flex items-start gap-2">
              <p>
                Lorem ipsum dolor sit amet <br /> consectetur:
              </p>
              <span className=" font-[700]">(03)</span> {person}
            </div>
          </div>
          <div className=" flex flex-col  items-center  md:items-start ">
            <div className="  flex items-center gap-5">
              <span className=" inline-flex size-6  items-center justify-center rounded-full bg-[#8F8A8E]">
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_104_920)">
                    <path
                      d="M3.4038 0.25C3.51519 0.25 3.62202 0.29425 3.70079 0.373015C3.77955 0.45178 3.8238 0.558609 3.8238 0.67V1.4554H8.334V0.6754C8.334 0.564009 8.37825 0.45718 8.45702 0.378415C8.53578 0.29965 8.64261 0.2554 8.754 0.2554C8.86539 0.2554 8.97222 0.29965 9.05099 0.378415C9.12975 0.45718 9.174 0.564009 9.174 0.6754V1.4554H10.8C11.1182 1.4554 11.4233 1.58175 11.6483 1.80666C11.8733 2.03157 11.9998 2.33664 12 2.6548V11.0506C11.9998 11.3688 11.8733 11.6738 11.6483 11.8987C11.4233 12.1237 11.1182 12.25 10.8 12.25H1.2C0.881844 12.25 0.57671 12.1237 0.351684 11.8987C0.126658 11.6738 0.000159078 11.3688 0 11.0506L0 2.6548C0.000159078 2.33664 0.126658 2.03157 0.351684 1.80666C0.57671 1.58175 0.881844 1.4554 1.2 1.4554H2.9838V0.6694C2.98396 0.558113 3.02828 0.451439 3.10703 0.372803C3.18578 0.294167 3.29251 0.25 3.4038 0.25ZM0.84 4.8952V11.0506C0.84 11.0979 0.849312 11.1447 0.867403 11.1884C0.885495 11.232 0.912013 11.2717 0.945442 11.3052C0.978871 11.3386 1.01856 11.3651 1.06223 11.3832C1.10591 11.4013 1.15272 11.4106 1.2 11.4106H10.8C10.8473 11.4106 10.8941 11.4013 10.9378 11.3832C10.9814 11.3651 11.0211 11.3386 11.0546 11.3052C11.088 11.2717 11.1145 11.232 11.1326 11.1884C11.1507 11.1447 11.16 11.0979 11.16 11.0506V4.9036L0.84 4.8952ZM4.0002 9.0214V10.021H3V9.0214H4.0002ZM6.4998 9.0214V10.021H5.5002V9.0214H6.4998ZM9 9.0214V10.021H7.9998V9.0214H9ZM4.0002 6.6352V7.6348H3V6.6352H4.0002ZM6.4998 6.6352V7.6348H5.5002V6.6352H6.4998ZM9 6.6352V7.6348H7.9998V6.6352H9ZM2.9838 2.2948H1.2C1.15272 2.2948 1.10591 2.30411 1.06223 2.3222C1.01856 2.3403 0.978871 2.36681 0.945442 2.40024C0.912013 2.43367 0.885495 2.47336 0.867403 2.51703C0.849312 2.56071 0.84 2.60752 0.84 2.6548V4.0558L11.16 4.0642V2.6548C11.16 2.60752 11.1507 2.56071 11.1326 2.51703C11.1145 2.47336 11.088 2.43367 11.0546 2.40024C11.0211 2.36681 10.9814 2.3403 10.9378 2.3222C10.8941 2.30411 10.8473 2.2948 10.8 2.2948H9.174V2.8522C9.174 2.96359 9.12975 3.07042 9.05099 3.14919C8.97222 3.22795 8.86539 3.2722 8.754 3.2722C8.64261 3.2722 8.53578 3.22795 8.45702 3.14919C8.37825 3.07042 8.334 2.96359 8.334 2.8522V2.2948H3.8238V2.8468C3.8238 2.95819 3.77955 3.06502 3.70079 3.14378C3.62202 3.22255 3.51519 3.2668 3.4038 3.2668C3.29241 3.2668 3.18558 3.22255 3.10682 3.14378C3.02805 3.06502 2.9838 2.95819 2.9838 2.8468V2.2948Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_104_920">
                      <rect
                        width="12"
                        height="12"
                        fill="white"
                        transform="translate(0 0.25)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <h3 className=" text-[16px] font-[700] text-black">
                20 April, 2024
              </h3>
            </div>
            <div className=" my-1  flex items-start gap-2">
              <p>
                Lorem ipsum dolor sit amet <br /> consectetur:
              </p>
              <span className=" font-[700]">(03)</span> {person}
            </div>
            <div className="  my-1 flex items-start gap-2">
              <p>
                Lorem ipsum dolor sit amet <br /> consectetur:
              </p>
              <p>
                <span className=" font-[700]">(07)</span> {bottle}
              </p>
            </div>
            <div className="  my-1 flex items-start gap-2">
              <p>
                Lorem ipsum dolor sit amet <br /> consectetur:
              </p>
              <span className=" font-[700]">(03)</span> {person}
            </div>
          </div>
        </div>
        <div className=" text-center md:text-start space-x-2">
          <span>{extra}:</span> <span className=" font-bold">{extraAnswer}</span>
        </div>
        <div className=" my-6 text-center md:text-start">
          <h2 className=" my-1 font-[500] ">{Disclaimers}:</h2>
          <ul className=" font-[500]">
            <li>
              {l1}
            </li>
            <li>{l2}</li>
          </ul>
        </div>
      </div>
    );
}

export default FifthStep
