import MyInfoHeader from "@/components/MyInfoHeader/my-info-header";

export default function MyInfoLayout({
    children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="h-[93vh]">
            <MyInfoHeader />
            {children}
        </section>
    );
}
