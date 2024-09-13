"use client"

import Image from "next/image";
import seachIcon from "@/images/search-icon.svg"
import {useResize} from "@/utils/hooks";

export default function SearchField({placeholder = "Search"}: {placeholder?: string}) {

    const screenWidth = useResize();

    return (
        <div className="relative flex items-center">
            <input
                type='text'
                name='search'
                placeholder={screenWidth > 1280 ? placeholder : ""}
                className="border rounded-xl border-black pl-[56px] py-2 font-inter font-normal text-black w-[32px] xl:w-[10vw] 2xl:w-[25vw]"
            />
            <Image src={seachIcon} alt="search-icon" className="absolute left-[16px]"/>
        </div>
    )
}