import arrowBottomIcon from "@/images/arrow-bottom.svg";
import Image from "next/image";
import settingsIcon from "@/images/settings-icon.svg";

export default function SettingsCheckbox({type}: {type: "text" | "icon"}) {
    if (type === "text") {
        return (
            <div className="flex flex-row gap-2 border rounded-lg border-[#7C96B1] p-[8px]">
                <p className="font-inter text-black text-[14px]">
                    Request a Change
                </p>
                <button>
                    <Image src={arrowBottomIcon} alt="arrow-bottom icon" width={16} height={16}/>
                </button>
            </div>
        )
    }
    if (type === "icon") {
        return (
            <div className="flex flex-row gap-2 border rounded-lg border-[#7C96B1] p-[8px]">
                <Image src={settingsIcon} alt="settings icon" width={16} height={16}/>
                <button>
                    <Image src={arrowBottomIcon} alt="arrow-bottom icon" width={16} height={16}/>
                </button>
            </div>
        )
    }

}