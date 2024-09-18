import Image from "next/image";
import TimeOffIcon from "@/images/time-off-icon.svg";
import WatchIcon from "@/images/watch-icon.svg"
import TimeOffSticker from "@/components/TimeOffSticker/TimeOffSticker";
import styles from "@/app/extra-stylex.module.css";

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
              <div className="flex flex-col gap-6 pt-6 pb-[16px] border-b-2 border-b-[#7C96B1] overflow-hidden" >
                <div className={`flex xl:justify-center w-full overflow-scroll ${styles.container_snap} ${styles.scrollbar_none}`}>
                  <div className={`grid gap-4 xl:gap-12 grid-cols-[repeat(3,264px)] grid-rows-[163px]`}>
                    <TimeOffSticker type={"sick"} value={3} warning/>
                    <TimeOffSticker type={"holiday"} value={10.3}/>
                    <TimeOffSticker type={"comp"} value={0}/>
                  </div>
                </div>
                <div className={'flex gap-2'}>
                  <Image src={WatchIcon} alt={'watch-icon'} width={16} height={16} />
                  <p className={'font-inter font-medium text-sm text-[#204973]'}>Upcoming Time Off</p>
                </div>
              </div>
            </div>
        </div>
    )
}