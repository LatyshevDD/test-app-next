import Link from 'next/link';
import NavLink from "@/components/NavLink/NavLink";

export default function Header() {

    return (
        <header className="flex flex-row items-center h-[5.6%] bg-white px-[24px] gap-[60px]">
            <h1 className="font-inter text-xl font-semibold text-black">HarmonyHR</h1>
            <nav className="flex flex-row items-center self-end">
                <NavLink type="header" text="Page" path="/" ></NavLink>
                <NavLink type="header" text="My info" path="/my-info" ></NavLink>
                <NavLink type="header" text="People" path="/people" ></NavLink>
                <NavLink type="header" text="Hiring" path="/hiring" ></NavLink>
                <NavLink type="header" text="Reports" path="/reports" ></NavLink>
                <NavLink type="header" text="Files" path="/files" ></NavLink>
            </nav>
        </header>
    )
}