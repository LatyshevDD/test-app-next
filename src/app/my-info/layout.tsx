import MyInfoHeader from "@/components/MyInfoHeader/my-info-header";
import InfoSideBar from "@/components/InfoSideBar/info-side-bar";

export default function MyInfoLayout({
    children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="bg-[#F0F3F8] h-[93vh] relative">
            <MyInfoHeader />
            <InfoSideBar />
            {children}
        </section>
    );
}
