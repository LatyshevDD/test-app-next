import Image from "next/image";
import seachIcon from "@/images/search-icon.svg"

export default function CustomInput({placeholder = "Search"}: {placeholder?: string}) {


    return (
        <div className="relative flex items-center">
            <input
                type='text'
                name='search'
                placeholder={placeholder}
                className="border rounded-xl border-black pl-[56px] py-2 font-inter font-normal text-black"
            />
            <Image src={seachIcon} alt="search-icon" className="absolute left-[16px]"/>
        </div>
    )
}