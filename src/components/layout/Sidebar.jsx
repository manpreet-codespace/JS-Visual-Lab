"use client";

import { topics } from "@/data/topics";
import { useRouter } from "next/navigation";

export default function Sidebar() {
    const router = useRouter();

    return (
        <>
            <aside className="bg-[var(--bg)] relative z-50 mt-20">
                <div className="">
                    {
                        topics.map((topic) => (
                            <div key={topic.id} onClick={()=>router.push(`/lab/${topic.slug}`)}  className="py-2 px-4 mt-5  w-8/10 mx-auto border border-white/10 bg-[var(--bg)] gradient  rounded-full hover:border-[var(--primary)] hover:shadow-[1px_1px_5px_var(--primary)]">
                                <div className="flex justify-between">
                                    <h1 className="text-md font-semibold ">{topic.topic}</h1>
                                    <span className={`py-1 px-2 h-6 text-[10px] rounded-full  ${topic.difficulty === "Intermediate"
                                        ? "border border-[var(--warning)] text-[var(--warning)] bg-[var(--warning)]/20"
                                        : topic.difficulty === "Beginner"
                                            ? "border border-[var(--success)] text-[var(--success)] bg-[var(--success)]/20"
                                            : "border border-[var(--error)] text-[var(--error)] bg-[var(--error)]/20"}`}>{topic.difficulty.toLowerCase()}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </aside>

        </>
    )
}