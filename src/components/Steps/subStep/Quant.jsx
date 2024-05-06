import { Checkbox } from "flowbite-react";
import i18n from "../../../../i18n";

function Quant({item,updateCount,count}) {
    // const [count, setCount] = useState(item.minimum_quantity||0);
    function increment() {
        updateCount(item.id, count + 1);
    }

    function decrement() {
        if (count > 35) {
            updateCount(item.id, count - 1);
        } else {
            updateCount(item.id, item.minimum_quantity || 0);
        }
    }
        
    
    return (
      <div className=" flex flex-col">
        <div className=" flex items-center gap-2 ">
          <Checkbox
            className="checked:text-black checked:outline-black focus:border  focus:border-black focus:ring-2   focus:ring-black"
            id="accept"
          />
          <label className=" text-sm" htmlFor="accept">
            {i18n.language === "en" ? item.name : item.name_ar}
          </label>
        </div>

        <div className=" my-2 flex items-center gap-2">
          <button
            onClick={decrement}
            className="rounded-l px-4 py-2 text-black"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.19993 10.8L9.26856 10.8H9.99993H10.3999L10.7999 10.8L16.3999 10.8C16.6121 10.8 16.8156 10.7157 16.9656 10.5657C17.1156 10.4157 17.1999 10.2122 17.1999 10C17.1999 9.78785 17.1156 9.58437 16.9656 9.43434C16.8156 9.28431 16.6121 9.20002 16.3999 9.20002H10.7999L10.5656 9.20003L9.99993 9.20002L9.43424 9.20002L9.19993 9.20003L3.59993 9.20002C3.38775 9.20002 3.18427 9.28431 3.03424 9.43434C2.88421 9.58437 2.79993 9.78785 2.79993 10C2.79993 10.2122 2.88421 10.4157 3.03424 10.5657C3.18427 10.7157 3.38775 10.8 3.59993 10.8L9.19993 10.8Z"
                fill="#3B3539"
              />
            </svg>
          </button>
          <div className="px-4  font-bold">{count}</div>
          <button
            onClick={increment}
            className="rounded-r  px-4 py-2 text-black"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.20005 16.4C9.20005 16.6122 9.28433 16.8157 9.43436 16.9657C9.58439 17.1157 9.78788 17.2 10 17.2C10.2122 17.2 10.4157 17.1157 10.5657 16.9657C10.7158 16.8157 10.8 16.6122 10.8 16.4V10.8H16.4C16.6122 10.8 16.8157 10.7157 16.9657 10.5657C17.1158 10.4157 17.2 10.2122 17.2 10C17.2 9.78784 17.1158 9.58436 16.9657 9.43433C16.8157 9.2843 16.6122 9.20002 16.4 9.20002H10.8V3.60002C10.8 3.38785 10.7158 3.18436 10.5657 3.03433C10.4157 2.8843 10.2122 2.80002 10 2.80002C9.78788 2.80002 9.58439 2.8843 9.43436 3.03433C9.28433 3.18436 9.20005 3.38785 9.20005 3.60002V9.20002H3.60005C3.38788 9.20002 3.18439 9.2843 3.03436 9.43433C2.88433 9.58436 2.80005 9.78784 2.80005 10C2.80005 10.2122 2.88433 10.4157 3.03436 10.5657C3.18439 10.7157 3.38788 10.8 3.60005 10.8H9.20005V16.4Z"
                fill="#3B3539"
              />
            </svg>
          </button>
          <h3 className="mx-1 text-sm font-[500]">
            {i18n.language === "en" ? item.unit.name : item.unit.name_ar}
          </h3>
        </div>
        <p className=" text-sm text-[#0000006a]">
          {i18n.language === "en" ? item.description : item.description_ar}
        </p>
      </div>
    );
}


export default Quant
