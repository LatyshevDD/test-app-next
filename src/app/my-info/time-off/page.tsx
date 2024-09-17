import TimeOffIcon from "@/images/time-off-icon.svg";
import Image from "next/image";

export default function TimeOff() {
    return (
        <div className="flex xl:justify-end h-[81vh] xl:pl-[22vw] xl:pr-[5vw]">
            <div className="flex flex-col w-full bg-white px-4 pt-10">
              <div  className="flex justify-end sm:justify-between pb-[16px] border-b-2 border-b-[#7C96B1]">
                <div className="hidden sm:flex gap-[12px]">
                  <Image src={TimeOffIcon} alt="time-off-icon" width={16} height={16} />
                  <p className="font-inter font-medium text-[20px] text-[#204973]">Time Off</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-[30px] items-end sm:items-center">
                  <p className="flex gap-1 font-inter font-medium text-[14px] text-black">
                    Accrual Level Start Date
                    <span className="text-[#3758AB]">03/09-2020</span>
                  </p>
                  <button className="rounded-lg border border-black p-2">
                    <p className="font-inter font-medium text-sm text-black">
                      Add Time Off Policy
                    </p>
                  </button>
                </div>
              </div>
            </div>
        </div>
    )
}