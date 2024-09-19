import Image from "next/image";
import TimeOffIcon from "@/images/time-off-icon.svg";
import WatchIcon from "@/images/watch-icon.svg";
import SickIcon from "@/images/sick-icon.svg";
import DotIcon from "@/images/dot-icon 8.svg";
import PigBankIcon from "@/images/pig-bank.svg";
import CrosIcon from "@/images/cros-icon.svg";
import ArrowBottomIcon from "@/images/arrow-bottom.svg"
import TimeOffSticker from "@/components/TimeOffSticker/TimeOffSticker";
import styles from "@/app/extra-stylex.module.css";
import HistoryTable from "@/components/HistoryTable/history-table";
import {fakeApiHistory} from "@/constants";

export default function TimeOff() {
    return (
        <div className="flex xl:justify-end h-[81vh] xl:pl-[22vw] xl:pr-[5vw]">
          <div className="flex flex-col w-full bg-white px-4 pt-10">
            <div className="flex justify-end sm:justify-between pb-[16px] border-b-2 border-b-[#7C96B1]">
              <div className="hidden sm:flex gap-[12px]">
                <Image src={TimeOffIcon} alt="time-off-icon" width={16} height={16}/>
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
            <div className="flex flex-col gap-6 pt-6 pb-[16px] border-b-2 border-b-[#7C96B1] overflow-hidden">
              <div
                  className={`flex xl:justify-center w-full overflow-scroll ${styles.container_snap} ${styles.scrollbar_none}`}>
                <div className={`grid gap-4 xl:gap-12 grid-cols-[repeat(3,264px)] grid-rows-[163px]`}>
                  <TimeOffSticker type={"sick"} value={3} warning/>
                  <TimeOffSticker type={"holiday"} value={10.3}/>
                  <TimeOffSticker type={"comp"} value={0}/>
                </div>
              </div>
              <div className={'flex gap-2'}>
                <Image src={WatchIcon} alt={'watch-icon'} width={16} height={16}/>
                <p className={'font-inter font-medium text-sm text-[#204973]'}>Upcoming Time Off</p>
              </div>
            </div>
            <div className={'py-6 border-b-2 border-b-[#7C96B1]'}>
              <div className={'flex gap-1'}>
                <Image src={SickIcon} alt={'sick-icon'} width={30} height={30}/>
                <div className={'flex flex-col gap-1'}>
                  <p className={'font-inter font-medium text-black text-sm'}>Jan 27</p>
                  <div className={'flex gap-1'}>
                    <Image src={DotIcon} alt={'dot-icon'} width={8} height={8}/>
                    <p className={'font-inter font-medium text-black text-sm'}>
                      1 dey of Sick
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={'py-6 border-b-2 border-b-[#7C96B1]'}>
              <div className={'flex gap-1'}>
                <Image src={PigBankIcon} alt={'pigbank-icon'} width={30} height={30}/>
                <div className={'flex flex-col gap-1'}>
                  <p className={'font-inter font-medium text-black text-sm'}>Jul 4</p>
                  <p className={'font-inter font-medium text-black text-sm'}>
                    Independence Day
                  </p>
                </div>
              </div>
            </div>
            <div className={'pt-6'}>
              <div className={'flex gap-2'}>
                <Image src={PigBankIcon} alt={'pig-icon'} width={16} height={16} />
                <p className={'font-inter font-medium text-[#204973] text-sm'}>
                  History
                </p>
              </div>
              <div className={'grid grid-cols-3 grid-rows-2 md:grid-rows-1  md:grid-cols-[minmax(0,_256px)_minmax(0,_256px)_1fr] gap-6 md:gap-4 pt-4'}>
                <div className={'w-[256px] flex justify-between rounded-lg border border-[#204973] col-span-3 md:col-span-1'}>
                  <p className={'whitespace-nowrap font-inter text-[16px] text-black p-2'}>Sick</p>
                  <div className={'flex gap-2'}>
                    <button className={'hover:opacity-70 active:opacity-45'}>
                      <Image src={CrosIcon} alt={'cros-icon'} width={16} height={16}/>
                    </button>
                    <div className={'flex justify-center items-center bg-[#DAE6F2] px-1 py-2 rounded-r-lg'}>
                      <button className={'hover:opacity-70 active:opacity-45'}>
                        <Image src={ArrowBottomIcon} alt={'arrow-bottom-icon'} width={16} height={16}/>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={'w-[96px] flex justify-between rounded-lg border border-[#204973]'}>
                  <p className={'whitespace-nowrap font-inter text-[16px] text-black p-2'}>All</p>
                  <div className={'flex gap-2'}>
                    <button className={'hover:opacity-70 active:opacity-45'}>
                      <Image src={CrosIcon} alt={'cros-icon'} width={16} height={16}/>
                    </button>
                    <div className={'flex justify-center items-center bg-[#DAE6F2] px-1 py-2 rounded-r-lg'}>
                      <button className={'hover:opacity-70 active:opacity-45'}>
                        <Image src={ArrowBottomIcon} alt={'arrow-bottom-icon'} width={16} height={16}/>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={'w-[176px] flex justify-between rounded-lg border border-[#204973] col-span-2 md:col-span-1 justify-self-start md:justify-self-end'}>
                  <p className={'whitespace-nowrap font-inter text-[16px] text-black p-2'}>Balance History</p>
                  <div className={'flex gap-2'}>
                    <button className={'hover:opacity-70 active:opacity-45'}>
                      <Image src={CrosIcon} alt={'cros-icon'} width={16} height={16}/>
                    </button>
                    <div className={'flex justify-center items-center bg-[#DAE6F2] px-1 py-2 rounded-r-lg'}>
                      <button className={'hover:opacity-70 active:opacity-45'}>
                        <Image src={ArrowBottomIcon} alt={'arrow-bottom-icon'} width={16} height={16}/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={'pt-4'}>
                <HistoryTable data={fakeApiHistory}/>
              </div>
            </div>
          </div>
        </div>
    )
}