"use client"

import Image from "next/image";
import seachIcon from "@/images/search-icon.svg"
import {useEffect, useState} from "react";

export default function SearchField({placeholder = "Search"}: {placeholder?: string}) {

  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = (event: UIEvent) => {
      const w = event.target as Window
      setWidth(w.innerWidth)
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

    return (
        <div className="relative flex items-center">
            <input
                type='text'
                name='search'
                placeholder={width > 1280 ? placeholder : ""}
                className="border rounded-xl border-black pl-[56px] py-2 font-inter font-normal text-black w-[32px] xl:w-[10vw] 2xl:w-[25vw]"
            />
            <Image src={seachIcon} alt="search-icon" className="absolute left-[16px]"/>
        </div>
    )
}