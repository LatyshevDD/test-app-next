import Image from "next/image";
import SickIcon from "@/images/sick-icon.svg";
import HolidayIcon from "@/images/holiday-icon.svg";
import CompIcon from "@/images/comp-icon.svg";

export default function TimeOffSticker({type, value, warning}: {type: "sick" | "holiday" | "comp", value: number, warning?: boolean}) {
  const title = (type === "sick" && "Sick") || (type === "holiday" && "Annual Leave") || (type === "comp" && "Comp/in Lieu Time");
  const description = (type === "sick" && "Days Available") || (type === "holiday" && "Days Available") || (type === "comp" && "Human Used(YTD)");
  const footer = (type === "sick" && "Sick Full-Time") || (type === "holiday" && "Holiday Full-Time") || (type === "comp" && "Comp/in Lieu Time Flexible Policy");
  const icon = (type === "sick" && SickIcon) || (type === "holiday" && HolidayIcon) || (type === "comp" && CompIcon);
  return (
      <div className="flex flex-col justify-between">
        <div className="flex flex-col justify-center items-center gap-1 bg-[#F0F3F8] rounded-lg basis-[138px]">
          <p className="font-inter font-semibold text-black text-xl">
            {title}
          </p>
          <div className="flex gap-[10px]">
            <Image
                src={icon}
                alt={`${type}-icon`}
                sizes="100vw"
                width={30}
                height={30}
            />
            <p className="font-inter font-semibold text-black text-[30px]">
              {value}
            </p>
          </div>
          <p className="font-inter font-semibold text-black text-sm">{description}</p>
          {
              warning && <p className="font-inter font-semibold text-sm text-[#7C96B1]">1 dey scheduled</p>
          }
        </div>
        <p className="font-inter font-medium text-sm text-[#7C96B1] self-center">
          {footer}
        </p>
      </div>

  )
}