"use client";

import { useRef } from "react";

export default function CodeEditor({ activeLine, code, onCodeChange }) {
    const textareaRef = useRef(null);
    const lineCount = Math.max((code ?? "").split("\n").length, 1);

    return (
        <div className="relative z-40 w-full overflow-hidden rounded-[24px] border border-white/10 bg-[#0b1220]/90 shadow-[0_20px_50px_rgba(15,23,42,0.45)] backdrop-blur-sm md:w-[55%]">
            <div className="flex items-center justify-between border-b border-white/10 bg-slate-950/70 px-4 py-3">
                <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                    <h2 className="text-sm font-semibold text-white">JavaScript Code</h2>
                </div>
                <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-200">
                    JS
                </span>
            </div>

            <div className="flex h-[340px] overflow-hidden bg-[#0b1220]">
                <div className="w-12 shrink-0 border-r border-white/10 bg-slate-950/70 px-2 py-4 text-right text-[11px] font-medium text-slate-500">
                    {Array.from({ length: lineCount }).map((_, index) => {
                        const lineNumber = index + 1;
                        const isActive = activeLine === lineNumber;

                        return (
                            <div
                                key={lineNumber}
                                className={`leading-6 ${isActive ? "text-violet-300" : "text-slate-500"}`}
                            >
                                {lineNumber}
                            </div>
                        );
                    })}
                </div>

                <textarea
                    ref={textareaRef}
                    value={code ?? ""}
                    onChange={(e) => onCodeChange?.(e.target.value)}
                    spellCheck={false}
                    wrap="off"
                    aria-label="Javascript Code Editor"
                    className="h-full w-full resize-none bg-transparent px-4 py-4 font-mono text-sm leading-6 text-slate-100 caret-violet-300 outline-none selection:bg-violet-500/30"
                    style={{
                        tabSize: 2,
                        color: "rgba(226, 232, 240, 0.98)",
                        backgroundImage:
                            activeLine != null
                                ? `linear-gradient(to bottom, rgba(168,85,247,0.12) 0, rgba(168,85,247,0.12) 24px, transparent 24px)`
                                : "none",
                        backgroundSize: "100% 24px",
                        backgroundPosition: "0 0",
                        backgroundRepeat: "repeat-y",
                    }}
                />
            </div>
        </div>
    );
}