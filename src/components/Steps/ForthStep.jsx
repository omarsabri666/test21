import { Checkbox } from "flowbite-react";
import { useTranslation } from "react-i18next";

function ForthStep({ register, errors }) {
  const { t } = useTranslation();
  const {confirm,agree,1:l1,2:l2,3:l3,4:l4,5:l5,6:l6} = t("step4");
    return (
      <div className=" mx-5 my-10 flex w-screen flex-col rounded-md  bg-white p-10 md:my-0  md:mb-32 ">
        <div className=" text-center md:text-start">

        <h1 className=" font-[700]">{confirm}</h1>
        </div>
        <ol className="  my-4 flex list-decimal flex-col gap-2 px-4 font-[500]">
          <li className="  ">
           {l1}
          </li>
          <li>
            {l2}
          </li>
          <li>
            {l3}
          </li>
          <li>
           {l4}
          </li>
          <li>
         {l5}
          </li>
          <li>
           {l6}
          </li>
        </ol>
        <div className=" my-5 flex items-center justify-end gap-2 ">
          {errors.terms && (
            <p className="font-[600] text-red-500">{errors.terms.message}</p>
          )}
          <Checkbox
            className=" checked:text-black checked:outline-black focus:border  focus:border-black focus:ring-2   focus:ring-black"
            id="terms"
            {...register("terms", {
              required: "you need to accept the terms",
            })}
          />
          <label className=" font-[700]" htmlFor="terms">{agree}</label>
        </div>
      </div>
    );
}

export default ForthStep
