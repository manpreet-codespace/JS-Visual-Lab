"use client";

import { useEffect, useRef, useState } from "react";
import ControlBar from "@/components/controls/ControlBar";
import CodeEditor from "@/components/editor/CodeEditor";
import VisualizationPanel from "@/components/visualization/VisualizationPanel";

const scopes = [
    { id: "global", title: "Global scope" },
    { id: "outer", title: "outer()" },
    { id: "inner", title: "inner()" }
];

function ScopeLookupVisualization({ steps, currentStep, step }) {
    const trace = steps.slice(0, currentStep + 1);

    return (
        <div className="space-y-5">
            <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200">
                    {step?.stage ?? "Lexical lookup"}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{step?.description}</p>
            </div>

            <section className="rounded-lg border border-cyan-400/20 bg-cyan-500/5 p-4">
                <p className="text-xs text-slate-400">Identifier being resolved</p>
                <p className="mt-1 font-mono text-lg text-cyan-100">{step?.target}</p>
            </section>

            <div className="grid gap-3 md:grid-cols-3">
                {scopes.map((scope) => {
                    const isChecked = step?.checkedScopes.includes(scope.id);
                    const isMatch = step?.resolvedIn === scope.id;

                    return (
                        <section
                            key={scope.id}
                            className={`min-w-0 rounded-lg border p-4 ${
                                isMatch
                                    ? "border-emerald-400/40 bg-emerald-500/10"
                                    : isChecked
                                        ? "border-amber-400/30 bg-amber-500/5"
                                        : "border-white/10 bg-slate-950/50"
                            }`}
                        >
                            <h3 className="text-sm font-semibold text-white">{scope.title}</h3>
                            <p className="mt-2 text-xs text-slate-400">
                                {isMatch ? "binding found" : isChecked ? "name not found here" : "not checked"}
                            </p>
                            {isMatch && (
                                <p className="mt-3 break-words font-mono text-sm text-emerald-100">
                                    {step.target} = {step.value}
                                </p>
                            )}
                        </section>
                    );
                })}
            </div>

            <section className="rounded-lg border border-white/10 bg-black/50">
                <div className="border-b border-white/10 px-4 py-2.5">
                    <h3 className="text-xs font-semibold text-slate-200">Console trace</h3>
                </div>
                <div className="min-h-16 space-y-2 p-4 font-mono text-sm">
                    {trace.map((item) => (
                        <p key={item.id} className="text-emerald-300">&gt; {item.output}</p>
                    ))}
                </div>
            </section>
            <p className="text-right text-[10px] text-slate-500">Step {currentStep + 1} of {steps.length}</p>
        </div>
    );
}

export default function ScopeChainTopic({ topicData }) {
    const steps = topicData.steps ?? [];
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
            if (nextStep >= steps.length - 1) setIsRunning(false);
        }, 1400);

        return () => clearTimeout(timerRef.current);
    }, [currentStep, isLastStep, isRunning, steps.length]);

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
            <div className="flex flex-wrap gap-6">
                <CodeEditor activeLine={step?.line ?? null} code={code} onCodeChange={setCode} />
                <VisualizationPanel title={topicData.visualization?.title ?? "Lexical scope lookup"}>
                    <ScopeLookupVisualization steps={steps} currentStep={currentStep} step={step} />
                </VisualizationPanel>
            </div>

            {conceptData && (
                <section className="w-full space-y-5 border-t border-white/10 pt-6">
                    <div className="max-w-4xl">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200">Theory</p>
                        <h2 className="mt-2 text-xl font-semibold text-white">{conceptData.title}</h2>
                        <p className="mt-2 text-sm leading-7 text-slate-300">{conceptData.summary}</p>
                    </div>
                    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
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
                    <ul className="grid gap-2 border-t border-white/10 pt-4 text-sm text-slate-300 sm:grid-cols-2">
                        {conceptData.takeaways.map((takeaway) => (
                            <li key={takeaway} className="border-l-2 border-cyan-400/50 pl-3 leading-6">{takeaway}</li>
                        ))}
                    </ul>
                </section>
            )}
        </div>
    );
}