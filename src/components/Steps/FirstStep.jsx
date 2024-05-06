import {   Radio } from "flowbite-react";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'; // Import React Date Picker styles
import { useTranslation } from "react-i18next";
import { getCities } from "../../api/api";
import { useQuery } from "@tanstack/react-query";
import i18n from "../../../i18n";


function FirstStep({ register, errors, step, getValues, setValue }) {
  const [startDate, setStartDate] = useState(new Date());
    const [selectedDates, setSelectedDates] = useState([new Date()]);
    const [selectedRadio, setSelectedRadio] = useState("multiple");
    const [selectedType, setSelectedType] = useState("company");
    const today = new Date();
    const { t } = useTranslation();
    const { title,
      eventType,
      dateInput1,
      dateInput2,
      eventDate,

    } = t("firstStep");
    const { name, email, phone, namePlaceholder, emailPlaceholder, phonePlaceholder,title:title2 } = t("secondStep");
    
    const {
      country,
      city,
      GoogleLink,
      location,
      title: title3,
      selectCity,
      locationPlaceholder,
    } = t("thirdStep");
    const {
      title: title4,
      company,
      individual,
      companyName,
      companyNamePlaceholder,
      companyCommercialName,
      companyCommercialNamePlaceholder,
      companyCr,
      companyCrPlaceholder,
      vat,
      vatPlaceholder,
    } = t("forthStep");

  

  const onChange = (dates) => {
    setSelectedDates(dates);
  };
useEffect(() => {

  setValue("eventType", selectedRadio)
  setValue("customerType", selectedType)
  if(selectedRadio === "single"){
      setValue("dates", startDate);


  }
  setValue("dates", selectedDates)
},[selectedRadio,selectedType,selectedDates,startDate])


const { data, isLoading, error } = useQuery({
  queryKey: ["cities"],
  queryFn: getCities,
});

  return (
    <div className=" mb-20 w-screen">
      <div className=" ">
        <div className="  mx-5  rounded-md bg-white p-10">
          <div className=" mb-7  flex items-center justify-center gap-2 text-black  md:justify-normal">
            <span className=" inline-flex size-6 items-center justify-center rounded-full  bg-[#8F8A8E] text-white">
              1
            </span>
            <span className=" text-[14px] font-[700] text-black">{title}</span>{" "}
          </div>

          <div className="my-2">
            <div className="  flex flex-col items-center gap-8 md:flex-row">
              <div className=" flex flex-col gap-4">
                <div className=" text-center md:text-start">
                  <h4 className=" mt-[-5px]  font-semibold" htmlFor="">
                    {eventType} <span className=" text-[#FF0000]">*</span>
                  </h4>
                </div>
                <div className="flex items-center gap-4">
                  <div className=" flex items-center gap-4">
                    <Radio
                      onChange={(e) => setSelectedRadio(e.target.value)}
                      value={"multiple"}
                      type="radio"
                      name="type"
                      defaultChecked
                      className="checked:text-black checked:outline-black"
                    />
                    <label htmlFor="">{dateInput1}</label>
                  </div>
                  <div className=" flex items-center gap-4">
                    <Radio
                      color="black"
                      onChange={(e) => setSelectedRadio(e.target.value)}
                      value={"single"}
                      type="radio"
                      name="type"
                      className="   checked:text-black checked:outline-black "
                    />
                    <label htmlFor="">{dateInput2}</label>
                  </div>
                </div>
              </div>

              <div className=" flex flex-col justify-center gap-2 md:justify-normal">
                <h3 className=" font-semibold ">
                  {eventDate} <span className=" text-[#FF0000]">*</span>
                </h3>
                {selectedRadio === "single" ? (
                  <DatePicker
                    className=" rounded-md border border-[#00000010] shadow-sm md:w-[400px]"
                    minDate={today}
                    showIcon
                    icon={
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.2" clip-path="url(#clip0_15_1340)">
                          <path
                            d="M5.673 0.0650024C5.85865 0.0650024 6.0367 0.138752 6.16797 0.270028C6.29925 0.401303 6.373 0.579351 6.373 0.765002V2.074H13.89V0.774002C13.89 0.588351 13.9637 0.410303 14.095 0.279028C14.2263 0.147752 14.4043 0.0740024 14.59 0.0740024C14.7757 0.0740024 14.9537 0.147752 15.085 0.279028C15.2162 0.410303 15.29 0.588351 15.29 0.774002V2.074H18C18.5303 2.074 19.0388 2.28458 19.4139 2.65944C19.7889 3.03429 19.9997 3.54274 20 4.073V18.066C19.9997 18.5963 19.7889 19.1047 19.4139 19.4796C19.0388 19.8544 18.5303 20.065 18 20.065H2C1.46974 20.065 0.961184 19.8544 0.58614 19.4796C0.211096 19.1047 0.00026513 18.5963 0 18.066L0 4.073C0.00026513 3.54274 0.211096 3.03429 0.58614 2.65944C0.961184 2.28458 1.46974 2.074 2 2.074H4.973V0.764002C4.97327 0.578524 5.04713 0.400733 5.17838 0.269674C5.30963 0.138615 5.48752 0.0650023 5.673 0.0650024ZM1.4 7.807V18.066C1.4 18.1448 1.41552 18.2228 1.44567 18.2956C1.47583 18.3684 1.52002 18.4346 1.57574 18.4903C1.63145 18.546 1.69759 18.5902 1.77039 18.6203C1.84319 18.6505 1.92121 18.666 2 18.666H18C18.0788 18.666 18.1568 18.6505 18.2296 18.6203C18.3024 18.5902 18.3685 18.546 18.4243 18.4903C18.48 18.4346 18.5242 18.3684 18.5543 18.2956C18.5845 18.2228 18.6 18.1448 18.6 18.066V7.821L1.4 7.807ZM6.667 14.684V16.35H5V14.684H6.667ZM10.833 14.684V16.35H9.167V14.684H10.833ZM15 14.684V16.35H13.333V14.684H15ZM6.667 10.707V12.373H5V10.707H6.667ZM10.833 10.707V12.373H9.167V10.707H10.833ZM15 10.707V12.373H13.333V10.707H15ZM4.973 3.473H2C1.92121 3.473 1.84319 3.48852 1.77039 3.51867C1.69759 3.54883 1.63145 3.59302 1.57574 3.64874C1.52002 3.70445 1.47583 3.7706 1.44567 3.84339C1.41552 3.91619 1.4 3.99421 1.4 4.073V6.408L18.6 6.422V4.073C18.6 3.99421 18.5845 3.91619 18.5543 3.84339C18.5242 3.7706 18.48 3.70445 18.4243 3.64874C18.3685 3.59302 18.3024 3.54883 18.2296 3.51867C18.1568 3.48852 18.0788 3.473 18 3.473H15.29V4.402C15.29 4.58765 15.2162 4.7657 15.085 4.89698C14.9537 5.02825 14.7757 5.102 14.59 5.102C14.4043 5.102 14.2263 5.02825 14.095 4.89698C13.9637 4.7657 13.89 4.58765 13.89 4.402V3.473H6.373V4.393C6.373 4.57865 6.29925 4.7567 6.16797 4.88798C6.0367 5.01925 5.85865 5.093 5.673 5.093C5.48735 5.093 5.3093 5.01925 5.17803 4.88798C5.04675 4.7567 4.973 4.57865 4.973 4.393V3.473Z"
                            fill="#030304"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_15_1340">
                            <rect
                              width="20"
                              height="20"
                              fill="white"
                              transform="translate(0 0.0650024)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    }
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    shouldCloseOnSelect={false}
                    disabledKeyboardNavigation
                    required
                  />
                ) : (
                  <DatePicker
                    className=" rounded-md border border-[#00000010] shadow-sm md:w-[400px]"
                    minDate={today}
                    showIcon
                    icon={
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.2" clip-path="url(#clip0_15_1340)">
                          <path
                            d="M5.673 0.0650024C5.85865 0.0650024 6.0367 0.138752 6.16797 0.270028C6.29925 0.401303 6.373 0.579351 6.373 0.765002V2.074H13.89V0.774002C13.89 0.588351 13.9637 0.410303 14.095 0.279028C14.2263 0.147752 14.4043 0.0740024 14.59 0.0740024C14.7757 0.0740024 14.9537 0.147752 15.085 0.279028C15.2162 0.410303 15.29 0.588351 15.29 0.774002V2.074H18C18.5303 2.074 19.0388 2.28458 19.4139 2.65944C19.7889 3.03429 19.9997 3.54274 20 4.073V18.066C19.9997 18.5963 19.7889 19.1047 19.4139 19.4796C19.0388 19.8544 18.5303 20.065 18 20.065H2C1.46974 20.065 0.961184 19.8544 0.58614 19.4796C0.211096 19.1047 0.00026513 18.5963 0 18.066L0 4.073C0.00026513 3.54274 0.211096 3.03429 0.58614 2.65944C0.961184 2.28458 1.46974 2.074 2 2.074H4.973V0.764002C4.97327 0.578524 5.04713 0.400733 5.17838 0.269674C5.30963 0.138615 5.48752 0.0650023 5.673 0.0650024ZM1.4 7.807V18.066C1.4 18.1448 1.41552 18.2228 1.44567 18.2956C1.47583 18.3684 1.52002 18.4346 1.57574 18.4903C1.63145 18.546 1.69759 18.5902 1.77039 18.6203C1.84319 18.6505 1.92121 18.666 2 18.666H18C18.0788 18.666 18.1568 18.6505 18.2296 18.6203C18.3024 18.5902 18.3685 18.546 18.4243 18.4903C18.48 18.4346 18.5242 18.3684 18.5543 18.2956C18.5845 18.2228 18.6 18.1448 18.6 18.066V7.821L1.4 7.807ZM6.667 14.684V16.35H5V14.684H6.667ZM10.833 14.684V16.35H9.167V14.684H10.833ZM15 14.684V16.35H13.333V14.684H15ZM6.667 10.707V12.373H5V10.707H6.667ZM10.833 10.707V12.373H9.167V10.707H10.833ZM15 10.707V12.373H13.333V10.707H15ZM4.973 3.473H2C1.92121 3.473 1.84319 3.48852 1.77039 3.51867C1.69759 3.54883 1.63145 3.59302 1.57574 3.64874C1.52002 3.70445 1.47583 3.7706 1.44567 3.84339C1.41552 3.91619 1.4 3.99421 1.4 4.073V6.408L18.6 6.422V4.073C18.6 3.99421 18.5845 3.91619 18.5543 3.84339C18.5242 3.7706 18.48 3.70445 18.4243 3.64874C18.3685 3.59302 18.3024 3.54883 18.2296 3.51867C18.1568 3.48852 18.0788 3.473 18 3.473H15.29V4.402C15.29 4.58765 15.2162 4.7657 15.085 4.89698C14.9537 5.02825 14.7757 5.102 14.59 5.102C14.4043 5.102 14.2263 5.02825 14.095 4.89698C13.9637 4.7657 13.89 4.58765 13.89 4.402V3.473H6.373V4.393C6.373 4.57865 6.29925 4.7567 6.16797 4.88798C6.0367 5.01925 5.85865 5.093 5.673 5.093C5.48735 5.093 5.3093 5.01925 5.17803 4.88798C5.04675 4.7567 4.973 4.57865 4.973 4.393V3.473Z"
                            fill="#030304"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_15_1340">
                            <rect
                              width="20"
                              height="20"
                              fill="white"
                              transform="translate(0 0.0650024)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    }
                    selectedDates={selectedDates}
                    selectsMultiple
                    onChange={onChange}
                    shouldCloseOnSelect={false}
                    disabledKeyboardNavigation
                    required
                  />
                )}
                {(errors.date || errors.dates) && (
                  <p className="text-red-500">
                    {errors.date?.message || errors.dates?.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 ">
          <div className=" mx-5 rounded-md bg-white p-10">
            <div className=" mb-7   flex items-center justify-center gap-2 text-black  md:justify-normal">
              <span className=" inline-flex size-6 items-center justify-center rounded-full  bg-[#8F8A8E] text-white">
                2
              </span>
              <span className=" text-[14px] font-[700] text-black">
                {title2}
              </span>{" "}
            </div>{" "}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div>
                <div className="mb-1 block">
                  <label
                    className=" flex items-center gap-2 text-[14px] font-[500]"
                    htmlFor="name"
                  >
                    {name} <span className="text-[#FF0000]">*</span>
                  </label>
                </div>
                <input
                  id="name"
                  type="text"
                  className={` w-full rounded-md border  px-4  py-2  ${errors.name ? "  border border-red-500 focus:border focus:border-red-500 focus:outline-none focus:ring-transparent" : "border-[rgba(0,0,0,0.1)]"} `}
                  placeholder={namePlaceholder}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div>
                <div className="mb-1 block">
                  <label
                    className=" flex items-center gap-1 text-[14px] font-[500]"
                    htmlFor="email"
                  >
                    {email} <span className="text-[#FF0000]">*</span>
                  </label>
                </div>
                <input
                  id="email"
                  type="email"
                  className={` w-full rounded-md border   px-4 py-2 ${errors.email ? " border border-red-500 focus:border focus:border-red-500 focus:outline-none focus:ring-transparent" : "border-[rgba(0,0,0,0.1)]"} `}
                  placeholder={emailPlaceholder}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Invalid email format",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div>
                <div className="mb-1 block">
                  <label
                    className=" flex items-center gap-1 text-[14px] font-[500]"
                    htmlFor="phone"
                  >
                    {phone} <span className="text-[#FF0000]">*</span>
                  </label>
                </div>
                <input
                  id="phone"
                  type="number"
                  className={`w-full rounded-md border  px-4 py-2  ${errors.phone ? " border border-red-500 focus:border focus:border-red-500 focus:outline-none focus:ring-transparent" : "border-[rgba(0,0,0,0.1)]"} `}
                  placeholder={phonePlaceholder}
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Input must contain only numbers",
                    },
                    minLength: {
                      value: 10,
                      message: "phone number must be at least 10 digits",
                    },
                  })}
                />
                {errors.phone && (
                  <p className="text-red-500">{errors.phone.message}</p>
                )}
              </div>
            </div>
          </div>

          <div className=" my-5">
            <div className=" mx-5 rounded-md bg-white p-10">
              <div className=" mb-7  flex items-center justify-center gap-2 text-black  md:justify-normal">
                <span className=" inline-flex size-6 items-center justify-center rounded-full  bg-[#8F8A8E] text-white">
                  3
                </span>
                <span className=" text-[14px] font-[700] text-black">
                  {title3}
                </span>{" "}
              </div>
              <div className=" grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className=" flex flex-col">
                  <div className="mb-1 block">
                    <label
                      className=" flex  items-center gap-1 text-[14px]  font-[500]"
                      htmlFor="country"
                    >
                      {country} <span className="text-[#FF0000]">*</span>
                    </label>
                  </div>
                  <select
                    disabled
                    className={`w-full  border   ${errors.country ? " border border-red-500 focus:border focus:border-red-500 focus:outline-none focus:ring-transparent" : "border-[rgba(0,0,0,0.1)]"} rounded-md px-4 py-2 text-[rgba(0,0,0,0.41)] disabled:cursor-not-allowed`}
                    name="country"
                    id="country"
                    {...register("country", {
                      required: "Country is required",
                    })}
                    defaultValue="saudi arabia" // Use defaultValue instead of selected
                  >
                    <option value="saudi arabia">Saudi Arabia</option>
                  </select>
                  <p>
                    {errors.country && (
                      <span className="text-red-500">
                        {errors.country.message}
                      </span>
                    )}
                  </p>
                </div>
                <div>
                  <div className="mb-1 block">
                    <label
                      className=" flex items-center gap-1  text-[14px] font-[500]"
                      htmlFor="city"
                    >
                      {city} <span className="text-[#FF0000]">*</span>
                    </label>
                  </div>
                  <select
                    className={`w-full border   ${errors.city ? " border border-red-500 focus:border focus:border-red-500 focus:outline-none focus:ring-transparent" : "border-[rgba(0,0,0,0.1)]"} rounded-md px-4 py-2 text-[rgba(0,0,0,0.41)] disabled:cursor-not-allowed`}
                    name="city"
                    id="city"
                    {...register("city", {
                      required: {
                        value: true,
                        message: "City is required",
                      },
                    })}
                    defaultValue="" // Use defaultValue instead of selected
                  >
                    <option value="" disabled>
                      {selectCity}
                    </option>
                    {data?.cities?.map((city) => (
                      <option key={city.id} value={city.id}>
                        {i18n.language === "en" ? city.name : city.nameAr}
                      </option>
                    ))}
                    
                  </select>
                  <p>
                    {errors.city && (
                      <span className="text-red-500">
                        {errors.city.message}
                      </span>
                    )}
                  </p>
                </div>
                <div>
                  <div className="mb-1  block">
                    <label
                      className=" flex items-center gap-1  text-[14px] font-[500]"
                      htmlFor="link"
                    >
                      {GoogleLink}
                    </label>
                  </div>
                  <input
                    className={`w-full rounded-md border    px-4 py-2  ${errors.link ? " border border-red-500 focus:border focus:border-red-500 focus:outline-none focus:ring-transparent" : "border-[rgba(0,0,0,0.1)]"} `}
                    id="link"
                    type="text"
                    placeholder="Https://"
                    {...register("link", {
                      pattern: {
                        value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
                        message: "Invalid URL format",
                      },
                    })}
                  />
                  {errors.link && (
                    <p className="text-red-500">{errors.link.message}</p>
                  )}
                </div>
                <div className=" md:col-span-3">
                  <label
                    className=" my-2  flex items-center  gap-1 text-[14px]  font-[500] "
                    htmlFor="location"
                  >
                    {" "}
                    {location} <span className="text-[#FF0000]">*</span>
                  </label>
                  <textarea
                    placeholder={locationPlaceholder}
                    className={`w-full  rounded-md border  px-4 py-2   ${errors.location ? " border border-red-500 focus:border focus:border-red-500 focus:outline-none focus:ring-transparent" : "border-[rgba(0,0,0,0.1)]"} `}
                    name="location"
                    {...register("location", {
                      required: "Location is required",
                    })}
                    id="location"
                    cols="10"
                    rows="3"
                  ></textarea>
                  {errors.location && (
                    <p className="text-red-500">{errors.location.message}</p>
                  )}
                </div>
              </div>
            </div>

            <div className=" my-5">
              <div className=" mx-5 rounded-md bg-white  p-10">
                <div className=" mb-7  flex items-center justify-center gap-2 text-black  md:justify-normal">
                  <span className=" inline-flex size-6 items-center justify-center rounded-full  bg-[#8F8A8E] text-white">
                    4
                  </span>
                  <span className=" text-[14px] font-[700] text-black">
                    {title4}
                  </span>{" "}
                </div>
                <div className=" my-4 flex items-center gap-4">
                  <div className=" flex items-center gap-4">
                    <Radio
                      onChange={(e) => setSelectedType(e.target.value)}
                      value={"company"}
                      defaultChecked
                      className="   checked:text-black checked:outline-black "
                      type="radio"
                      name="com"
                    />
                    <label htmlFor="">{company}</label>
                  </div>
                  <div className=" flex items-center gap-4">
                    <Radio
                      className="   checked:text-black checked:outline-black "
                      onChange={(e) => setSelectedType(e.target.value)}
                      value={"Individual"}
                      type="radio"
                      name="com"
                    />
                    <label htmlFor="">{individual}</label>
                  </div>
                </div>
                <div className=" grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className=" flex flex-col gap-2 text-[14px] font-[500]">
                    <label htmlFor="companyName">
                      {companyName}
                      <span className="text-[#FF0000]">*</span>
                    </label>

                    <input
                      disabled={selectedType !== "company"}
                      className={`rounded-md border  ${errors.companyName ? " border border-red-500 focus:border focus:border-red-500 focus:outline-none focus:ring-transparent" : "border-[rgba(0,0,0,0.1)]"}     px-4  py-2  disabled:cursor-not-allowed  disabled:opacity-50`}
                      placeholder={companyNamePlaceholder}
                      id="companyName"
                      type="text"
                      {...register("companyName", {
                        required: {
                          value: selectedType === "company",
                          message: "Company Name is required",
                        },
                      })}
                    />
                    <p>
                      {errors.companyName && (
                        <span className="text-red-500">
                          {errors.companyName.message}
                        </span>
                      )}
                    </p>
                  </div>
                  <div className=" flex flex-col gap-2 text-[14px] font-[500]">
                    <label htmlFor="companyNameCommercial">
                      {companyCommercialName}
                      <span className="text-[#FF0000]">*</span>
                    </label>

                    <input
                      className={` rounded-md border  ${errors.companyNameCommercial ? " border border-red-500 focus:border focus:border-red-500 focus:outline-none focus:ring-transparent" : "border-[rgba(0,0,0,0.1)]"}    px-4  py-2   disabled:cursor-not-allowed disabled:opacity-50`}
                      disabled={selectedType !== "company"}
                      placeholder={companyCommercialNamePlaceholder}
                      id="companyNameCommercial"
                      type="text"
                      {...register("companyNameCommercial", {
                        required: {
                          value: selectedType === "company",
                          message: "Company  Name is required",
                        },
                      })}
                    />
                    <p>
                      {errors.companyNameCommercial && (
                        <span className="text-red-500">
                          {errors.companyNameCommercial.message}
                        </span>
                      )}
                    </p>
                  </div>
                  <div className=" flex flex-col gap-1 text-[14px] font-[500]">
                    <label htmlFor="CR">
                      {companyCr}
                      <span className="text-[#FF0000]">*</span>
                    </label>

                    <input
                      className={`w-full rounded-md border    px-4 py-2   disabled:cursor-not-allowed disabled:opacity-50  ${errors.companyCRNumber ? " border border-red-500 focus:border focus:border-red-500 focus:outline-none focus:ring-transparent" : "border-[rgba(0,0,0,0.1)]"} `}
                      disabled={selectedType !== "company"}
                      placeholder={companyCrPlaceholder}
                      id="CR"
                      type="number"
                      {...register("companyCRNumber", {
                        required: {
                          value: selectedType === "company",
                          message: "Company CR Number is required",
                        },
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Input must contain only numbers",
                        },
                      })}
                    />
                    {errors.companyCRNumber && (
                      <p className="text-red-500">
                        {errors.companyCRNumber.message}
                      </p>
                    )}
                  </div>
                  <div className=" flex flex-col gap-1 text-[14px] font-[500]">
                    <label htmlFor="vat">
                      {vat} <span className="text-[#FF0000]">*</span>{" "}
                    </label>

                    <input
                      disabled={selectedType !== "company"}
                      className={`w-full rounded-md border    px-4 py-2   disabled:cursor-not-allowed disabled:opacity-50  ${errors.vat ? "  border border-red-500 focus:border focus:border-red-500 focus:outline-none focus:ring-transparent" : "border-[rgba(0,0,0,0.1)]"} `}
                      {...register("vat", {
                        required: {
                          value: selectedType === "company",
                          message: "VAT Number is required",
                        },
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Input must contain only numbers",
                        },
                      })}
                      placeholder={vatPlaceholder}
                      id="vat"
                      type="number"
                    />
                    {errors.vat && (
                      <p className="text-red-500">{errors.vat.message}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col gap-1">
        <label className="font-bold" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          className={`shadow-sm focus:outline-none focus:ring ${
            errors.name ? "focus:ring-red-300" : "focus:ring-blue-300"
          } rounded-2xl px-4 py-2 `}
          {...register("name", { required: "Name is required" })}
          placeholder="John Doe"
          type="text"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-bold" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          className={`shadow-sm focus:outline-none focus:ring ${
            errors.name ? "focus:ring-red-300" : "focus:ring-blue-300"
          } rounded-2xl px-4 py-2 `}
          {...register("name", { required: "Name is required" })}
          placeholder="John Doe"
          type="text"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-bold" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          className={`shadow-sm focus:outline-none focus:ring ${
            errors.email ? "focus:ring-red-400" : "focus:ring-blue-300"
          } rounded-2xl px-4 py-2 `}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
          placeholder="JohnDoe@gmail.com"
          type="email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div> */}
    </div>
  );
}

export default FirstStep;
