import Sidebar from "./Sidebar";

export default function LabLayout({children}){
    return (
        <>
        <div className="flex">
            <Sidebar/>
            <main className="flex-1 p-4 space-y-4">
                {children}
            </main>
        </div>
        </>
    )
}