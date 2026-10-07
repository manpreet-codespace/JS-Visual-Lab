'use client'

import { topics } from "@/data/topics";
import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function Navbar() {
    const [search, setSearch] = useState("");

    const filteredTopics = useMemo(() => {
        const query = search.trim().toLowerCase();

        if (!query) return [];

        return topics
            .filter((topic) => {
                const searchableText = `${topic.topic} ${topic.description} ${topic.slug}`.toLowerCase();
                return searchableText.includes(query);
            })
            .slice(0, 6);
    }, [search]);

    return (
        <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050d1a]/90 backdrop-blur-xl">
            <div className="mx-auto flex h-20 w-[96%] max-w-[1700px] items-center justify-between gap-6 px-2 md:px-4">
                <div className="flex items-center gap-8 text-sm text-slate-300">
                    <Link href="/" className="text-lg font-black tracking-tight text-white">
                        JS Visual <span className="text-sky-400">Lab</span>
                    </Link>
                </div>

                <div className="relative flex flex-col items-center justify-end">
                    <div className="relative w-full max-w-[260px]">
                        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input
                            type="search"
                            placeholder="search topics"
                            className="w-full rounded-xl border border-white/15 bg-white/5 py-2.5 pl-9 pr-3 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-violet-400/70 focus:bg-white/10"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    {search.trim() && (
                        <div className="absolute top-[calc(100%+0.75rem)] w-[min(26rem,90vw)] overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 shadow-2xl shadow-slate-950/40 backdrop-blur-md">
                            {filteredTopics.length > 0 ? (
                                filteredTopics.map((topic) => (
                                    <Link
                                        key={topic.id}
                                        href={`/lab/${topic.slug}`}
                                        className="group flex items-center justify-between gap-3 border-b border-white/5 px-4 py-3 text-left transition hover:bg-white/5 last:border-b-0"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/10 text-xs font-bold text-sky-300">
                                                {topic.topic.slice(0, 2).toUpperCase()}
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-white">{topic.topic}</p>
                                                <span className="text-[11px] text-slate-400">{topic.difficulty}</span>
                                            </div>
                                        </div>

                                        <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:text-sky-300" />
                                    </Link>
                                ))
                            ) : (
                                <div className="px-4 py-3 text-sm text-slate-300">No topics match your search.</div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
