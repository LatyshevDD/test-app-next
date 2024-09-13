import profilePhoto from "@/images/profile-photo.png";
import Image from "next/image";
import SettingsCheckbox from "@/components/settings-checkbox/settings-checkbox";

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
                />
                <div className="flex flex-col w-[72vw]">
                    <div className="flex flex-row justify-between">
                        <h2 className="font-inter font-semibold text-[28px] text-black">Alexandra Kuibyshevskaya</h2>
                        <div className="flex flex-row justify-between w-[16vw]">
                            <SettingsCheckbox type="text" />
                            <SettingsCheckbox type="icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}