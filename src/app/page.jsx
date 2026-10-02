"use client";

import { topics } from "@/data/topics";
import { ArrowRight, BookOpenText, Code2, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [showPreview, setShowPreview] = useState(false);

  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic);
    setShowPreview(false);
  };

  return (
    <main className="relative z-10 mx-auto flex w-full max-w-[1800px] gap-6 px-4 pb-4 pt-24 md:px-6">
      <aside className="flex h-full w-full max-w-[360px] shrink-0 flex-col overflow-hidden rounded-[26px] border border-white/10 bg-[#0b1220]/80 backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
          <div className="flex items-center gap-2 text-white">
            <BookOpenText className="h-4 w-4 text-sky-300" />
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Topics</span>
          </div>
          <span className="rounded-full border border-violet-400/40 bg-violet-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-200">
            {topics.length}
          </span>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4">
          <div className="flex flex-col gap-3">
            {topics.map((topic) => {
              const isSelected = selectedTopic.slug === topic.slug;

              return (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => handleSelectTopic(topic)}
                  className={`w-full rounded-full border px-4 py-3 text-left transition-all duration-200 ${
                    isSelected
                      ? "border-violet-400/80 bg-violet-500/12 shadow-[0_0_0_1px_rgba(167,139,250,0.35)]"
                      : "border-white/10 bg-white/4 hover:border-violet-400/50 hover:bg-violet-500/8"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-base font-medium text-slate-100">{topic.topic}</span>
                    <span
                      className={`inline-flex rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.15em] ${
                        topic.difficulty === "Intermediate"
                          ? "border-amber-400/40 bg-amber-500/10 text-amber-300"
                          : topic.difficulty === "Beginner"
                            ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-300"
                            : "border-rose-400/40 bg-rose-500/10 text-rose-300"
                      }`}
                    >
                      {topic.difficulty}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </aside>

      <section className="relative flex h-full flex-1 overflow-hidden rounded-[28px] border border-white/10 bg-[#0a1220]/85 shadow-[0_30px_90px_rgba(15,23,42,0.6)] backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.12),_transparent_24%)]" />

        <div className="relative flex h-full flex-1 flex-col overflow-y-auto p-5 md:p-7">
          <div className="rounded-[24px] border border-violet-400/20 bg-[linear-gradient(135deg,_rgba(10,16,27,0.96),_rgba(17,24,39,0.82))] p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/40 bg-violet-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-200">
                <Sparkles className="h-3.5 w-3.5" />
                JavaScript concept
              </div>

              <span
                className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                  selectedTopic.difficulty === "Intermediate"
                    ? "border-amber-400/40 bg-amber-500/10 text-amber-300"
                    : selectedTopic.difficulty === "Beginner"
                      ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-300"
                      : "border-rose-400/40 bg-rose-500/10 text-rose-300"
                }`}
              >
                {selectedTopic.difficulty}
              </span>
            </div>

            <h1 className="mt-5 text-3xl font-black tracking-tight text-white md:text-5xl">
              {selectedTopic.topic}
              <span className="ml-2 text-lg font-medium text-slate-300 md:text-2xl">in JavaScript</span>
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
              {selectedTopic.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => router.push(`/lab/${selectedTopic.slug}`)}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_30px_rgba(139,92,246,0.35)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Open lab
                <ArrowRight size={16} />
              </button>

              <button
                type="button"
                onClick={() => setShowPreview((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-sky-400/50 hover:bg-sky-500/10"
              >
                <Code2 size={16} />
                {showPreview ? "Hide preview" : "Preview concept"}
              </button>
            </div>
          </div>

          {showPreview && selectedTopic.preview && (
            <div className="mt-6 rounded-[24px] border border-violet-400/20 bg-[#0d1728]/80 p-5">
              <div className="mb-4 flex items-center justify-between gap-4">
                <h2 className="text-xl font-bold text-white">{selectedTopic.preview.title}</h2>
                <span className="rounded-full border border-sky-400/40 bg-sky-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-200">
                  Quick look
                </span>
              </div>

              <p className="text-sm leading-7 text-slate-300">{selectedTopic.preview.summary}</p>

              <div className="mt-4 rounded-2xl border border-white/10 bg-[#080f1d] p-4 font-mono text-sm leading-6 text-sky-200">
                <pre className="whitespace-pre-wrap">{selectedTopic.preview.snippet}</pre>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {selectedTopic.preview.keyPoints.map((point) => (
                  <span
                    key={point}
                    className="rounded-full border border-violet-400/30 bg-violet-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-violet-200"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { label: "Concept", value: selectedTopic.topic },
              { label: "Difficulty", value: selectedTopic.difficulty },
              { label: "Status", value: "Interactive" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/4 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
                <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
