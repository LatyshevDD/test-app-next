"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";
import Image from "next/image";
import ArrowBottomIcon from "@/images/arrow-bottom.svg"

export default function NavLink({type, text, path, icon}: {type: "header" | "my-info"; text: string, path: string, icon?: "arrow-bottom"}) {
    const textSize = type === "header" ? "18px" : "14px";
    const splitedPathname = usePathname().split("/");
    const activeHeader = path === "/" + splitedPathname[1] ? true : false;
    const activeMyinfo = path === "/my-info/" + splitedPathname[2] ? true : false;

    if(type === "header") {
        return (
            <Link href={path} className={`flex justify-center items-center w-[96px] rounded-t-lg ${activeHeader ? "bg-[#DAE6F2]" : ""}`}>
                <p className={`font-inter font-normal text-black text-[${textSize}] m-[16px]`}>{text}</p>
                {icon === "arrow-bottom" ? <Image src={ArrowBottomIcon} alt="arrow-bottom icon" width={16} height={16} /> : null}
            </Link>
        )
    }

    if (type === "my-info") {
        return (
            <Link href={path} className={`flex justify-center items-center flex-1 rounded-t-lg ${activeMyinfo ? "bg-white" : "bg-[#DAE6F2]"}`}>
                <p className={`font-inter font-normal text-black text-[${textSize}] m-[16px]`}>{text}</p>
                {
                    icon === "arrow-bottom" ?
                    (<button><Image src={ArrowBottomIcon} alt="arrow-bottom icon" width={16} height={16} /></button>)
                    : null
                }
            </Link>
        )
    }
}