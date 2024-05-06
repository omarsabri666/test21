import { useState } from "react";



import DatePicker from "react-datepicker";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { getServices } from "../../api/api";
import Quant from "./subStep/Quant";
import Days from "./subStep/Days";

function SecStep({ register, errors, getValues }) {

  console.log(getValues("dates"));
  
  const [counts, setCounts] = useState({});
   const updateCount = (day, itemId, newCount) => {
     setCounts((prevCounts) => ({
       ...prevCounts,
       [day]: {
         ...prevCounts[day],
         [itemId]: newCount,
       },
     }));
   };

 
  
 

 


 
  return (
    <div className="  mx-auto  mb-20 rounded-md bg-white  p-1  ">
      {getValues("dates")?.map((day) => (
        <Days
          key={day}
          day={day}
          updateCount={updateCount}
          counts={counts[day] || {}}
        />
      ))}
    </div>
  );
}

export default SecStep;
