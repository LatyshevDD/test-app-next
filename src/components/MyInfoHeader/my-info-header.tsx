import Image from "next/image";
import SettingsCheckbox from "@/components/settings-checkbox/settings-checkbox";
import NavLink from "@/components/NavLink/NavLink";
import InfoSideBar from "@/components/InfoSideBar/info-side-bar";
import profilePhoto from "@/images/profile-photo.png";
import dotedIcon from "@/images/doted-icon.svg";
import styles from "@/app/extra-stylex.module.css"
import ExitProfile from "@/components/ExitProfile/exit-profile";
import ProfileName from "@/components/ProfileName/profile-name";

export default function MyInfoHeader() {
  return (
      <div className="flex items-end bg-[#DAE6F2] xl:pl-[7.6vw] xl:pr-[5vw] relative">
        <div className="flex flex-row pt-[60px] w-full justify-between items-end">
          <div className="w-[12%] z-10 hidden xl:block">
            <Image
                src={profilePhoto}
                alt="profile-photo"
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
            />
          </div>
          <div className="flex flex-col mx-auto gap-[2vh] w-[72vw] self-end">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-[22px]">
                <div className="block xl:hidden w-[60px] h-[60px]">
                  <Image
                      src={profilePhoto}
                      alt="profile-photo"
                      sizes="100vw"
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                  />
                </div>
                <ProfileName />
              </div>
              <button className="block xl:hidden">
                <Image
                    src={dotedIcon}
                    alt="doted-icon"
                    sizes="100vw"
                    width={16}
                    height={16}
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                />
              </button>
              <div className="hidden xl:flex flex-row justify-between w-[16vw]">
                <SettingsCheckbox type="text"/>
                <SettingsCheckbox type="icon"/>
              </div>
            </div>
            <nav
                className={`flex flex-row flex-nowrap items-end overflow-scroll ${styles.scrollbar_none} ${styles.container_snap}`}>
              <NavLink type="my-info" text="Personal" path="/my-info/personal"/>
              <NavLink type="my-info" text="Job" path="/my-info/job"/>
              <NavLink type="my-info" text="Time Off" path="/my-info/time-off"/>
              <NavLink type="my-info" text="Emergency" path="/my-info/emergency"/>
              <NavLink type="my-info" text="Documents" path="/my-info/documents"/>
              <NavLink type="my-info" text="Notes" path="/my-info/notes"/>
              <NavLink type="my-info" text="Benefits" path="/my-info/benefits"/>
              <NavLink type="my-info" text="Training" path="/my-info/training"/>
              <NavLink type="my-info" text="Assets" path="/my-info/assets"/>
              <NavLink type="my-info" text="More" path="/my-info/more" icon="arrow-bottom"/>
              <ExitProfile/>
            </nav>
          </div>
        </div>
        <InfoSideBar/>
      </div>
  )
}