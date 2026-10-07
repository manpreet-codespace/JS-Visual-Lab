"use client";

import { useEffect, useRef, useState } from "react";
import ControlBar from "@/components/controls/ControlBar";
import CodeEditor from "@/components/editor/CodeEditor";
import VisualizationPanel from "@/components/visualization/VisualizationPanel";

function ArrayMethodVisualization({ subtopic, currentStep, step }) {
    const result = Array.isArray(step?.result) ? JSON.stringify(step.result) : step?.result;
    const trace = subtopic.steps.slice(0, currentStep + 1).filter((item) => item.type !== "console");

    return (
        <div className="space-y-5">
            <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200">
                    {step?.stage ?? subtopic.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{step?.description}</p>
            </div>

            <section className="rounded-lg border border-sky-400/20 bg-sky-500/5 p-4">
                <p className="text-xs text-slate-400">Input array</p>
                <p className="mt-2 font-mono text-sm text-sky-100">{subtopic.input}</p>
            </section>

            <div className="grid gap-3 sm:grid-cols-3">
                <section className="rounded-lg border border-white/10 bg-slate-950/50 p-3">
                    <p className="text-xs text-slate-400">Current element</p>
                    <p className="mt-2 font-mono text-lg text-white">{step?.current ?? "-"}</p>
                </section>
                <section className="rounded-lg border border-amber-400/20 bg-amber-500/5 p-3 sm:col-span-2">
                    <p className="text-xs text-slate-400">Callback / accumulator</p>
                    <p className="mt-2 break-words font-mono text-sm text-amber-100">{step?.action}</p>
                </section>
            </div>

            <section className="rounded-lg border border-emerald-400/25 bg-emerald-500/5 p-4">
                <p className="text-xs text-slate-400">{subtopic.id === "reduce" ? "Accumulator" : "Result array so far"}</p>
                <p className="mt-2 break-words font-mono text-lg text-emerald-100">{result}</p>
            </section>

            <section className="rounded-lg border border-white/10 bg-black/50">
                <div className="border-b border-white/10 px-4 py-2.5">
                    <h3 className="text-xs font-semibold text-slate-200">Progress</h3>
                </div>
                <div className="min-h-16 space-y-2 p-4 font-mono text-sm">
                    {trace.map((item) => (
                        <p key={item.id} className="text-emerald-300">&gt; {item.stage}: {item.action}</p>
                    ))}
                    {step?.type === "console" && <p className="break-words text-emerald-200">&gt; {step.output}</p>}
                </div>
            </section>
        </div>
    );
}

export default function ArrayMethodsTopic({ topicData }) {
    const subtopics = topicData.subtopics ?? [];
    const [activeMethod, setActiveMethod] = useState(subtopics[0]?.id ?? "map");
    const [currentStep, setCurrentStep] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [code, setCode] = useState(topicData.code ?? "");
    const timerRef = useRef(null);
    const activeData = subtopics.find((item) => item.id === activeMethod) ?? subtopics[0];
    const steps = activeData?.steps ?? [];
    const step = steps[currentStep];
    const isLastStep = currentStep >= steps.length - 1;
    const conceptData = topicData.conceptData;

    useEffect(() => {
        if (!isRunning || isLastStep) return;

        timerRef.current = setTimeout(() => {
            const nextStep = Math.min(currentStep + 1, steps.length - 1);
            setCurrentStep(nextStep);
            if (nextStep >= steps.length - 1) setIsRunning(false);
        }, 1000);

        return () => clearTimeout(timerRef.current);
    }, [currentStep, isLastStep, isRunning, steps.length]);

    const handleMethodChange = (method) => {
        clearTimeout(timerRef.current);
        setIsRunning(false);
        setCurrentStep(0);
        setActiveMethod(method.id);
    };
    const handleNext = () => setCurrentStep((previousStep) => Math.min(previousStep + 1, steps.length - 1));
    const handleReset = () => {
        clearTimeout(timerRef.current);
        setIsRunning(false);
        setCurrentStep(0);
    };
    const handleRun = () => {
        clearTimeout(timerRef.current);
        setCurrentStep(0);
        setIsRunning(steps.length > 1);
    };
    const actions = [
        { label: "▶ Run", onClick: handleRun, variant: "primary" },
        { label: "⏭ Next Step", onClick: handleNext, variant: "secondary", disabled: isLastStep || isRunning },
        { label: "↻ Reset", onClick: handleReset, variant: "ghost" }
    ];

    return (
        <div className="mt-8 flex flex-col gap-6">
            <ControlBar actions={actions} />
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Core array methods">
                {subtopics.map((method) => (
                    <button
                        key={method.id}
                        type="button"
                        role="tab"
                        aria-selected={activeMethod === method.id}
                        onClick={() => handleMethodChange(method)}
                        className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                            activeMethod === method.id
                                ? "border-cyan-400/40 bg-cyan-500/10 text-cyan-100"
                                : "border-white/10 bg-slate-900/70 text-slate-300 hover:border-white/20"
                        }`}
                    >
                        {method.title}
                    </button>
                ))}
            </div>

            <div className="flex flex-wrap gap-6">
                <CodeEditor activeLine={step?.line ?? null} code={code} onCodeChange={setCode} />
                <VisualizationPanel title={topicData.visualization?.title ?? "Array methods"}>
                    {activeData && <ArrayMethodVisualization subtopic={activeData} currentStep={currentStep} step={step} />}
                </VisualizationPanel>
            </div>

            <section className="w-full space-y-5 border-t border-white/10 pt-6">
                <div className="max-w-4xl">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200">Core methods</p>
                    <h2 className="mt-2 text-xl font-semibold text-white">{conceptData.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{conceptData.summary}</p>
                </div>
                <div className="grid gap-3 md:grid-cols-3">
                    {conceptData.cards.map((card) => (
                        <article key={card.title} className="rounded-lg border border-white/10 bg-slate-950/50 p-4">
                            <h3 className="text-sm font-semibold text-white">{card.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-300">{card.description}</p>
                            <pre className="mt-3 overflow-x-auto rounded-md border border-white/10 bg-black/40 p-3 text-xs leading-5 text-sky-100">
                                <code>{card.snippet}</code>
                            </pre>
                        </article>
                    ))}
                </div>
                <div className="space-y-3 border-t border-white/10 pt-5">
                    <h3 className="text-sm font-semibold text-slate-100">More methods</h3>
                    <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                        {topicData.otherMethods.map((method) => (
                            <div key={method.name} className="min-w-0 border-l-2 border-cyan-400/40 pl-3">
                                <h4 className="text-xs font-semibold text-white">{method.name}</h4>
                                <p className="mt-1 text-xs leading-5 text-slate-300">{method.description}</p>
                                <pre className="mt-2 overflow-x-auto rounded-md border border-white/10 bg-black/40 p-3 text-xs leading-5 text-sky-100">
                                    <code>{method.snippet}</code>
                                </pre>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}