import Image from "next/image";
import PhoneIcon from "@/images/phone-icon.svg";
import LetterIcon from "@/images/letter-icon.svg";
import InIcon from "@/images/in-icon.svg";
import FacebookIcon from "@/images/facebook-icon.svg";
import TweeterIcon from "@/images/tweeter-icon.svg";
import GridIcon from "@/images/grid-icon.svg";
import WatchIcon from "@/images/watch-icon.svg";
import GroupIcon from "@/images/group-icon.svg";
import GlobusIcon from "@/images/globus-icon.svg";
import MarkIcon from "@/images/mark-icon.svg";
import AvatarIcon from "@/images/avatar-icon.svg";

export default function InfoSideBar() {
  return (
      <aside className="hidden xl:flex flex-col gap-[16px] justify-between w-[16vw] absolute left-[5vw] top-[13vmax]">
        <div className="flex flex-col gap-[16px] py-[24px] px-[24px] bg-white rounded-2xl">
          <div className="flex flex-row gap-[8px]">
            <Image src={PhoneIcon} alt="phone-icon" width={16} height={16}/>
            <p className="font-inter font-medium text-black text-[14px]">07911 654321</p>
          </div>
          <div className="flex flex-row gap-[8px]">
            <Image src={LetterIcon} alt="letter-icon" width={16} height={16}/>
            <p className="font-inter font-medium text-black text-[14px]">avd.yana@videorollnet</p>
          </div>
          <div className="flex flex-row gap-[8px]">
            <Image src={InIcon} alt="in-icon" width={16} height={16}/>
            <Image src={FacebookIcon} alt="facebook-icon" width={16} height={16}/>
            <Image src={TweeterIcon} alt="tweeter-icon" width={16} height={16}/>
          </div>
        </div>
        <div className="flex flex-col gap-[16px] py-[24px] px-[24px] bg-white rounded-2xl">
          <p className="font-inter font-medium text-black text-[14px]">Hire Date</p>
          <div className="flex flex-col gap-[8px]">
            <p className="font-inter font-medium text-black text-[14px]">Sep. 3,2020</p>
            <p className="font-inter font-medium text-black text-[14px]">3y - 9m - 20d</p>
          </div>
        </div>
        <div className="flex flex-col gap-[16px] py-[24px] px-[24px] bg-white rounded-2xl">
          <div className="flex flex-row gap-[8px]">
            <Image src={GridIcon} alt="grid-icon" width={16} height={16}/>
            <p className="font-inter font-medium text-black text-[14px]">5</p>
          </div>
          <div className="flex flex-row gap-[8px]">
            <Image src={WatchIcon} alt="grid-icon" width={16} height={16}/>
            <p className="font-inter font-medium text-black text-[14px]">Full-Time</p>
          </div>
          <div className="flex flex-row gap-[8px]">
            <Image src={GroupIcon} alt="grid-icon" width={16} height={16}/>
            <p className="font-inter font-medium text-black text-[14px]">Operations</p>
          </div>
          <div className="flex flex-row gap-[8px]">
            <Image src={GlobusIcon} alt="grid-icon" width={16} height={16}/>
            <p className="font-inter font-medium text-black text-[14px]">Europe</p>
          </div>
          <div className="flex flex-row gap-[8px]">
            <Image src={MarkIcon} alt="grid-icon" width={16} height={16}/>
            <p className="font-inter font-medium text-black text-[14px]">London, UK</p>
          </div>
        </div>
        <div className="flex flex-col gap-[16px] py-[24px] px-[24px] bg-white rounded-2xl">
          <p className="font-inter font-medium text-black text-[14px]">Direct Reports</p>
          <div className="flex flex-row gap-[8px]">
            <Image src={AvatarIcon} alt="grid-icon" width={16} height={16}/>
            <p className="font-inter font-medium text-black text-[14px]">Shane</p>
          </div>
          <div className="flex flex-row gap-[8px]">
            <Image src={AvatarIcon} alt="grid-icon" width={16} height={16}/>
            <p className="font-inter font-medium text-black text-[14px]">Nathan</p>
          </div>
          <div className="flex flex-row gap-[8px]">
            <Image src={AvatarIcon} alt="grid-icon" width={16} height={16}/>
            <p className="font-inter font-medium text-black text-[14px]">Mitchell</p>
          </div>
          <div className="flex flex-row gap-[8px]">
            <Image src={AvatarIcon} alt="grid-icon" width={16} height={16}/>
            <p className="font-inter font-medium text-black text-[14px]">Philip</p>
          </div>
          <div className="flex flex-row gap-[8px]">
            <Image src={GroupIcon} alt="grid-icon" width={16} height={16}/>
            <p className="font-inter font-medium text-black text-[14px]">4 More...</p>
          </div>
        </div>
      </aside>
  )
}