import { topics } from "@/data/topics";

export default function TopicHeader({topic,description,difficulty}){
    return(
        <>
            <div className="mt-20">
        
                <div className="mt-20 flex flex-col space-y-2">
                    <h1 className="text-3xl font-bold">{topic} <span className="text-[var(--text)]/60 text-sm font-normal">in Javascript</span> <span className={`py-1 px-2 h-6 text-[10px] rounded-full  ${difficulty === "Intermediate"
                                        ? "border border-[var(--warning)] text-[var(--warning)] bg-[var(--warning)]/20"
                                        : difficulty === "Beginner"
                                        ? "border border-[var(--success)] text-[var(--success)] bg-[var(--success)]/20"
                                        : "border border-[var(--error)] text-[var(--error)] bg-[var(--error)]/20"}`}>{difficulty.toLowerCase()}</span></h1>
                    <p className="text-md text-white/60 ">{description}</p>
                </div>
               
            </div>
        </>
    )
}