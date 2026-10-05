import Sidebar from "./Sidebar";

export default function LabLayout({ children }) {
    return (
        <div className="relative z-10 mt-20 flex min-h-screen w-full overflow-hidden">
            <Sidebar />
            <main className="flex-1 px-3 py-4 md:px-5 lg:px-6  ">
                <div className="mx-auto max-w-[1500px] space-y-6">{children}</div>
            </main>
        </div>
    );
}