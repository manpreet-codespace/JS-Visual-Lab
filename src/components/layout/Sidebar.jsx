"use client";

import { topics } from "@/data/topics";
import { useRouter } from "next/navigation";

export default function Sidebar() {
    const router = useRouter();

    return (
        <aside className="relative z-50 w-full max-w-[330px] shrink-0 border-r border-white/10 bg-[#0a1020]/80 px-3 py-4 backdrop-blur-xl">
            <div className="flex flex-col gap-3">
                {topics.map((topic) => (
                    <button
                        key={topic.id}
                        type="button"
                        onClick={() => router.push(`/lab/${topic.slug}`)}
                        className="group w-full rounded-full border border-white/10 bg-white/4 px-4 py-3 text-left transition-all duration-200 hover:border-violet-400/60 hover:bg-violet-500/10 hover:shadow-[0_10px_24px_rgba(139,92,246,0.12)]"
                    >
                        <div className="flex items-center justify-between gap-3">
                            <h3 className="text-base font-medium text-slate-100 transition-colors group-hover:text-white">
                                {topic.topic}
                            </h3>
                            <span
                                className={`topic-badge ${
                                    topic.difficulty === "Intermediate"
                                        ? "border border-amber-400/40 bg-amber-500/10 text-amber-300"
                                        : topic.difficulty === "Beginner"
                                            ? "border border-emerald-400/40 bg-emerald-500/10 text-emerald-300"
                                            : "border border-rose-400/40 bg-rose-500/10 text-rose-300"
                                }`}
                            >
                                {topic.difficulty.toLowerCase()}
                            </span>
                        </div>
                    </button>
                ))}
            </div>
        </aside>
    );
}