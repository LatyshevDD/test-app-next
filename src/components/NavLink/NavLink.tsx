"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";

export default function NavLink({type, text, path}: {type: "header" | "my-info"; text: string, path: string}) {
    const textSize = type === "header" ? "18px" : "14px";
    const pathname = usePathname();
    const active = path === pathname ? true : false;

    return (
        <Link href={path} className={`w-[96px] rounded-t-lg ${active ? "bg-[#DAE6F2]" : ""}`}>
            <p className={`font-inter font-normal text-[${textSize}] text-black m-[16px]`}>{text}</p>
        </Link>
    )
}