import { BookOpen, Braces, Brain, Code2 } from "lucide-react";
import Link from "next/link";

export default function Navbar(){
    return(
        <>
            <nav className=" flex w-screen justify-between h-20 border-b border-white/20 bg-[var(--bg)] fixed inset-0 z-40">
                <div className="w-[90%] mx-auto flex justify-between items-center">

                <div className="text-white/60 text-sm flex gap-10">
                    <Link href="/" className="text-white font-bold text-lg">JS Visual <span className="text-[var(--secondary)]">Lab</span></Link>
                    <Link href="/topics" className="flex items-center gap-1 hover:text-[var(--text)]"><BookOpen size={16}/>Topics</Link>
                    <Link href="/playground" className="flex items-center gap-1 hover:text-[var(--text)]"><Code2 size={16}/> Playground</Link>
                    <Link href="/interview" className="flex items-center gap-1 hover:text-[var(--text)]"><Brain size={16}/> Interview</Link>
                </div>
                <div>
                    <input type="search" placeholder="search topics" className=" border border-white/30 p-2 rounded-xl hover:border-[var(--secondary)] focus:outline-none"/>
                </div>
                </div>
            </nav>
        </>
    )
}