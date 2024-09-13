import MyInfoHeader from "@/components/MyInfoHeader/my-info-header";

export default function MyInfoLayout({
    children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section>
            <MyInfoHeader />
            {children}
        </section>
    );
}
