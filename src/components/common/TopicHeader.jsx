export default function TopicHeader({ topic, description, difficulty }) {
    return (
        <div className="w-full pt-1">
            <div className="glass-card rounded-[26px] px-5 py-5 md:px-7 md:py-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-3">
                        <span className="inline-flex items-center rounded-full border border-violet-400/40 bg-violet-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-200">
                            JavaScript concept
                        </span>
                    </div>

                    <span
                        className={`topic-badge ${
                            difficulty === "Intermediate"
                                ? "border border-amber-400/40 bg-amber-500/10 text-amber-300"
                                : difficulty === "Beginner"
                                    ? "border border-emerald-400/40 bg-emerald-500/10 text-emerald-300"
                                    : "border border-rose-400/40 bg-rose-500/10 text-rose-300"
                        }`}
                    >
                        {difficulty.toLowerCase()}
                    </span>
                </div>

                <div className="mt-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                    <h1 className="text-3xl font-bold tracking-tight text-white md:text-[2.4rem]">
                        {topic}
                        <span className="ml-2 text-lg font-medium text-slate-300">in JavaScript</span>
                    </h1>
                </div>

                <p className="mt-3 max-w-4xl text-base leading-7 text-slate-300">{description}</p>
            </div>
        </div>
    );
}