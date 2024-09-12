import Image from "next/image";
import NavLink from "@/components/NavLink/NavLink";
import CustomInput from "@/components/custom-input/custom-input";
import settingsIcon from "@/images/settings-icon.svg";
import infoIcon from "@/images/info-icon.svg";
import searchIcon from "@/images/search-icon.svg";
import bellIcon from "@/images/bell-icon.svg";
import profilePhoto from "@/images/profile-photo.png";

export default function Header() {

    return (
        <header className="flex flex-row items-center justify-between h-[5.6%] bg-white px-[24px]">
            <h1 className="font-inter text-xl font-semibold text-black">HarmonyHR</h1>
            <nav className="flex flex-row items-center self-end">
                <NavLink type="header" text="Home" path="/" />
                <NavLink type="header" text="My info" path="/my-info" />
                <NavLink type="header" text="People" path="/people" />
                <NavLink type="header" text="Hiring" path="/hiring" />
                <NavLink type="header" text="Reports" path="/reports" />
                <NavLink type="header" text="Files" path="/files" />
            </nav>
            <CustomInput />
            <nav className="flex flex-row items-center gap-[24px]">
                <button>
                    <Image src={settingsIcon} alt="settings-icon" />
                </button>
                <button>
                    <Image src={infoIcon} alt="info-icon"/>
                </button>
                <button>
                    <Image src={bellIcon} alt="bell-icon"/>
                </button>
                <button>
                    <Image
                        src={profilePhoto}
                        alt="profile-photo"
                        sizes="100vw"
                        width={38}
                        height={38}
                    />
                </button>
            </nav>
        </header>
    )
}