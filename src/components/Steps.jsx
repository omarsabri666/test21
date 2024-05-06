import { useForm, Controller } from "react-hook-form";

import {  useState } from "react";
import FirstStep from "./Steps/FirstStep";
import SecStep from "./Steps/SecStep";
import ThirdStep from "./Steps/ThirdStep";
import HeaderSteps from "./HeaderSteps";
import { Oval } from "react-loader-spinner";
import ForthStep from "./Steps/ForthStep";
import FifthStep from "./Steps/FifthStep";
import LastStep from "./Steps/LastStep";
import { useTranslation } from "react-i18next";




export default function Steps() {
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(0);
  const steps = 4
    // const stepName = ["General Information", "Email", "Message"];
    const { t, i18n } = useTranslation();
    const {back,next,submit} = t("mainBtn");

  const {
    register,
  
    handleSubmit,
    getValues,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      country: "saudi arabia",
      city: "",
      link: "",
      location: "",
      companyName: "",
      companyNameCommercial: "",
      companyCRNumber: "",
      vat: "",
      message: "",
      eventType: "multiple",
      eventDayServices: [],
      customerType: "company",
      additional: "",
    },
  });
  function onSubmit(data){
     setIsLoading(true);
     setTimeout(() => {
       setStep((s) => s + 1);
       setIsLoading(false);
       console.log(data)
     }, 1000);
  }

function GetRightPage() {
  return step === 0 ? (
    <FirstStep
      control={control}
      Controller={Controller}
      register={register}
      getValues={getValues}
      step={step}
      errors={errors}
      setValue={setValue}
    />
  ) : step === 1 ? (
    <SecStep
      getValues={getValues}
      register={register}
      step={step}
      errors={errors}
    />
  ) : step === 2 ? (
    <ThirdStep
      getValues={getValues}
      register={register}
      step={step}
      errors={errors}
    />
  ) : step === 3 ? (
    <ForthStep
      getValues={getValues}
      register={register}
      step={step}
      errors={errors}
    />
  ) : step === 4 ? (
    <FifthStep
      getValues={getValues}
      register={register}
      step={step}
      errors={errors}
    />
  ) : (
    <LastStep />
  );
}



  return (
    <div className="  flex     flex-col overflow-x-hidden">
      <HeaderSteps step={step} />

      <div className=" flex flex-col  justify-start">
        <div className=" flex h-auto items-center  md:my-10   md:px-32 ">
          {GetRightPage()}
        </div>

        {step !== 5 && (
          <div className=" bottom-0  mt-0     w-full bg-white py-4    md:fixed  md:mt-20  md:px-20 ">
            <div className={` flex items-center   ${i18n.language === "en" ? "justify-center md:justify-end":"justify-center md:justify-start"}  gap-6   `}>
              {step !== 5 && (
                <button
                  type="button"
                  disabled={step === 0}
                  onClick={() => setStep((s) => s - 1)}
                  className={` rounded-md  bg-[#999491] px-6 py-2 text-lg font-semibold text-white transition-all   disabled:cursor-not-allowed  md:w-[200px] `}
                >
                  {back}
                </button>
              )}
              {step < steps && (
                <button
                  type="button"
                  disabled={step === steps}
                  onClick={handleSubmit(onSubmit)}
                  className=" btn cursor-pointer rounded-md   bg-[#41393D]  px-6 py-2 text-lg font-semibold text-white transition-all   md:w-[200px]  "
                >
                  {isLoading ? (
                    <div className=" flex items-center  justify-center">
                      <Oval
                        visible={true}
                        height="30"
                        width="35"
                        color="#ffffff"
                        secondaryColor="#EFE6E3"
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                      />
                    </div>
                  ) : (
                    next
                  )}
                </button>
              )}
              {step === steps && (
                <button
                  type="submit"
                  className=" cursor-pointer rounded-md   bg-[#41393D]  px-6 py-2 text-lg font-semibold text-white transition-all   md:w-[200px] "
                  onClick={() => setStep(5)}
                >
                  {submit}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
