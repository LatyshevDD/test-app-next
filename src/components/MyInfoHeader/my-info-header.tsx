import profilePhoto from "@/images/profile-photo.png";
import Image from "next/image";
import SettingsCheckbox from "@/components/settings-checkbox/settings-checkbox";
import NavLink from "@/components/NavLink/NavLink";

export default function MyInfoHeader() {
    return (
        <div className="flex items-end h-[12vh] bg-[#DAE6F2] pl-[7.6vw] pr-[5vw]">
            <div className="flex flex-row w-full justify-between">
                <Image
                    src={profilePhoto}
                    alt="profile-photo"
                    sizes="100vw"
                    width={150}
                    height={150}
                    className="z-10"
                />
                <div className="flex flex-col w-[72vw] self-end">
                    <div className="flex flex-row justify-between">
                        <h2 className="font-inter font-semibold text-[28px] text-black">Alexandra Kuibyshevskaya</h2>
                        <div className="flex flex-row justify-between w-[16vw]">
                            <SettingsCheckbox type="text" />
                            <SettingsCheckbox type="icon" />
                        </div>
                    </div>
                    <nav className="flex flex-row items-center overflow-scroll">
                        <NavLink type="my-info" text="Personal" path="/my-info/personal" />
                        <NavLink type="my-info" text="Job" path="/my-info/job" />
                        <NavLink type="my-info" text="Time Off" path="/my-info/time-off" />
                        <NavLink type="my-info" text="Emergency" path="/my-info/emergency" />
                        <NavLink type="my-info" text="Documents" path="/my-info/documents" />
                        <NavLink type="my-info" text="Notes" path="/my-info/notes" />
                        <NavLink type="my-info" text="Benefits" path="/my-info/benefits" />
                        <NavLink type="my-info" text="Training" path="/my-info/training" />
                        <NavLink type="my-info" text="Assets" path="/my-info/assets" />
                        <NavLink type="my-info" text="More" path="/my-info/more" icon="arrow-bottom" />
                    </nav>
                </div>
            </div>
        </div>
    )
}