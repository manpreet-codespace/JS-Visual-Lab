"use client";

import { useEffect, useRef, useState } from "react";
import ControlBar from "@/components/controls/ControlBar";
import CodeEditor from "@/components/editor/CodeEditor";
import VisualizationPanel from "@/components/visualization/VisualizationPanel";

function ClosureVisualization({ variables, steps, currentStep, step }) {
    const getValue = (name) => {
        const variable = variables.find((item) => item.name === name);
        return variable?.valueByStep[currentStep] ?? "not initialized";
    };
    const consoleOutputs = steps
        .slice(0, currentStep + 1)
        .filter((item) => item.type === "console");

    return (
        <div className="space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200">
                        {step?.stage ?? "Closure lifecycle"}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{step?.description}</p>
                </div>
                <span className={`rounded-full border px-3 py-1 text-xs font-medium ${
                    step?.closureRetained
                        ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-200"
                        : "border-slate-400/20 bg-slate-500/10 text-slate-300"
                }`}>
                    {step?.closureRetained
                        ? "Environment retained"
                        : step?.type === "memory"
                            ? "No active frame"
                            : "Function frame active"}
                </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-stretch">
                <section className="rounded-lg border border-sky-400/20 bg-sky-500/5 p-4">
                    <h3 className="text-sm font-semibold text-sky-100">Global scope</h3>
                    <dl className="mt-4 space-y-3 text-sm">
                        <div>
                            <dt className="text-slate-400">counter</dt>
                            <dd className="mt-1 break-words font-mono text-slate-100">{getValue("counter")}</dd>
                        </div>
                        <div className="border-t border-white/10 pt-3">
                            <dt className="text-slate-400">next</dt>
                            <dd className="mt-1 break-words font-mono text-slate-100">{getValue("next")}</dd>
                        </div>
                    </dl>
                </section>

                <div className="flex items-center justify-center px-2 text-xs font-medium text-cyan-200">
                    next() reads and updates
                </div>

                <section className={`rounded-lg border p-4 ${
                    step?.closureRetained
                        ? "border-emerald-400/30 bg-emerald-500/5"
                        : "border-white/10 bg-slate-950/50"
                }`}>
                    <h3 className="text-sm font-semibold text-white">Captured lexical environment</h3>
                    <p className="mt-1 text-xs text-slate-400">Created inside counter()</p>
                    <div className="mt-4 rounded-md border border-white/10 bg-black/20 p-3">
                        <p className="text-xs text-slate-400">let count</p>
                        <p className="mt-1 font-mono text-xl text-emerald-200">{getValue("count")}</p>
                    </div>
                    <p className="mt-3 text-xs leading-5 text-slate-300">
                        {step?.closureRetained
                            ? "The outer call has returned, but next still keeps this binding alive."
                            : "This environment is available while counter() is running."}
                    </p>
                </section>
            </div>

            <section className="rounded-lg border border-white/10 bg-black/50">
                <div className="border-b border-white/10 px-4 py-2.5">
                    <h3 className="text-xs font-semibold text-slate-200">Console</h3>
                </div>
                <div className="min-h-16 space-y-2 p-4 font-mono text-sm">
                    {consoleOutputs.length === 0 ? (
                        <p className="text-slate-500">No closure calls yet.</p>
                    ) : (
                        consoleOutputs.map((output) => (
                            <p key={output.id} className="text-emerald-300">&gt; {output.output}</p>
                        ))
                    )}
                </div>
            </section>
        </div>
    );
}

export default function Closure({ topicData }) {
    const steps = topicData.steps ?? [];
    const variables = topicData.variables ?? [];
    const conceptData = topicData.conceptData;
    const [currentStep, setCurrentStep] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [code, setCode] = useState(topicData.code ?? "");
    const timerRef = useRef(null);
    const step = steps[currentStep];
    const isLastStep = currentStep >= steps.length - 1;

    useEffect(() => {
        if (!isRunning || isLastStep) return;

        timerRef.current = setTimeout(() => {
            const nextStep = Math.min(currentStep + 1, steps.length - 1);
            setCurrentStep(nextStep);

            if (nextStep >= steps.length - 1) {
                setIsRunning(false);
            }
        }, 1200);

        return () => clearTimeout(timerRef.current);
    }, [currentStep, isLastStep, isRunning, steps.length]);

    const handleNext = () => {
        setCurrentStep((previousStep) => Math.min(previousStep + 1, steps.length - 1));
    };

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
            <div className="flex flex-wrap gap-6">
                <CodeEditor activeLine={step?.line ?? null} code={code} onCodeChange={setCode} />
                <VisualizationPanel title={topicData.visualization?.title ?? "Closure lifecycle"}>
                    <ClosureVisualization
                        variables={variables}
                        steps={steps}
                        currentStep={currentStep}
                        step={step}
                    />
                </VisualizationPanel>
            </div>

            {conceptData && (
                <section className="w-full space-y-5 border-t border-white/10 pt-6 relative z-70">
                    <div className="max-w-4xl">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200">Theory</p>
                        <h2 className="mt-2 text-xl font-semibold text-white">{conceptData.title}</h2>
                        <p className="mt-2 text-sm leading-7 text-slate-300">{conceptData.summary}</p>
                    </div>

                    {(conceptData.cards ?? []).length > 0 && (
                        <div className="grid gap-3 md:grid-cols-3">
                            {conceptData.cards.map((card) => (
                                <article key={card.title} className="rounded-lg border border-white/10 bg-slate-950/50 p-4">
                                    <h3 className="text-sm font-semibold text-white">{card.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-slate-300">{card.description}</p>
                                </article>
                            ))}
                        </div>
                    )}

                    {(conceptData.takeaways ?? []).length > 0 && (
                        <div className="border-t border-white/10 pt-4">
                            <h3 className="text-sm font-semibold text-slate-100">Key ideas</h3>
                            <ul className="mt-3 grid gap-2 text-sm text-slate-300 sm:grid-cols-3">
                                {conceptData.takeaways.map((takeaway) => (
                                    <li key={takeaway} className="border-l-2 border-cyan-400/50 pl-3 leading-6">
                                        {takeaway}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </section>
            )}
        </div>
    );
}