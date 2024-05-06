import { useTranslation } from "react-i18next";

function ThirdStep({register,errors}) {
   const {t} = useTranslation()
   const {extra,extraPlaceholder}=t("step3")
    return (
      <div className="  mx-5 my-10 flex w-screen flex-col  rounded-md bg-white p-10 md:h-[250px] ">
        <label className="font-[700] text-black" htmlFor="additional">
          {extra}
        </label>
        <textarea
          className={`mt-6  w-full rounded-md border  px-4 py-2   ${errors.additional ? " border border-red-500 focus:border focus:border-red-500 focus:outline-none focus:ring-transparent" : "border-[rgba(0,0,0,0.1)]"} `}
          name=""
          placeholder={extraPlaceholder}
          id="additional"
          cols="30"
          rows="8"
          {...register("additional", {
            required: "Additional is required",
          })}
        ></textarea>
        {errors.additional && (
          <p className="text-red-500">{errors.additional.message}</p>
        )}
      </div>
    );
}

export default ThirdStep
