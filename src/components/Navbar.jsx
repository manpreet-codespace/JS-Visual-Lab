import { BookOpen, Brain, Code2 } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050d1a]/90 backdrop-blur-xl">
            <div className="mx-auto flex h-20 w-[96%] max-w-[1700px] items-center justify-between gap-6 px-2 md:px-4">
                <div className="flex items-center gap-8 text-sm text-slate-300">
                    <Link href="/" className="text-lg font-black tracking-tight text-white">
                        JS Visual <span className="text-sky-400">Lab</span>
                    </Link>
                    <Link href="/topics" className="hidden items-center gap-1.5 transition-colors hover:text-white md:flex">
                        <BookOpen size={16} />
                        Topics
                    </Link>
                    <Link href="/playground" className="hidden items-center gap-1.5 transition-colors hover:text-white md:flex">
                        <Code2 size={16} />
                        Playground
                    </Link>
                    <Link href="/interview" className="hidden items-center gap-1.5 transition-colors hover:text-white md:flex">
                        <Brain size={16} />
                        Interview
                    </Link>
                </div>

                <div className="flex items-center justify-end">
                    <input
                        type="search"
                        placeholder="search topics"
                        className="w-full max-w-[220px] rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-violet-400/70 focus:bg-white/10"
                    />
                </div>
            </div>
        </nav>
    );
}