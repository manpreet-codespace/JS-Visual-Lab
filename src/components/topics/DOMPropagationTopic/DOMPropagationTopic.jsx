"use client";

import { useEffect, useRef, useState } from "react";
import ControlBar from "@/components/controls/ControlBar";
import CodeEditor from "@/components/editor/CodeEditor";
import VisualizationPanel from "@/components/visualization/VisualizationPanel";

const nodes = [
    { id: "root", title: "Root container" },
    { id: "parent", title: "Parent element" },
    { id: "button", title: "Clicked button" }
];

function PropagationVisualization({ subtopic, currentStep, step }) {
    const trace = subtopic.steps.slice(0, currentStep + 1);

    return (
        <div className="space-y-5">
            <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200">
                    {step?.phase ?? subtopic.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{step?.description}</p>
            </div>

            <div className="grid gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
                {nodes.map((node, index) => {
                    const isVisited = step?.visitedNodes.includes(node.id);
                    const isCurrent = step?.node === node.id;

                    return (
                        <div key={node.id} className="contents">
                            <section className={`min-w-0 rounded-lg border p-3 text-center ${
                                isCurrent
                                    ? "border-cyan-300/50 bg-cyan-500/10"
                                    : isVisited
                                        ? "border-emerald-400/30 bg-emerald-500/5"
                                        : "border-white/10 bg-slate-950/50"
                            }`}>
                                <h3 className="text-xs font-semibold text-white">{node.title}</h3>
                                <p className="mt-2 font-mono text-xs text-slate-300">#{node.id}</p>
                                <p className="mt-2 text-[10px] text-slate-400">
                                    {isCurrent ? "current listener" : isVisited ? "visited" : "waiting"}
                                </p>
                            </section>
                            {index < nodes.length - 1 && (
                                <span className="hidden text-xs font-medium text-cyan-200 sm:block">
                                    {step?.phase === "Bubble" ? "<-" : "->"}
                                </span>
                            )}
                        </div>
                    );
                })}
            </div>

            <section className="rounded-lg border border-white/10 bg-black/50">
                <div className="border-b border-white/10 px-4 py-2.5">
                    <h3 className="text-xs font-semibold text-slate-200">Event trace</h3>
                </div>
                <div className="min-h-16 space-y-2 p-4 font-mono text-sm">
                    {trace.map((item) => (
                        <p key={item.id} className="text-emerald-300">&gt; {item.output}</p>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default function DOMPropagationTopic({ topicData }) {
    const subtopics = topicData.subtopics ?? [];
    const [activeSubtopic, setActiveSubtopic] = useState(subtopics[0]?.id);
    const [currentStep, setCurrentStep] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [code, setCode] = useState(topicData.code ?? "");
    const timerRef = useRef(null);
    const activeData = subtopics.find((item) => item.id === activeSubtopic) ?? subtopics[0];
    const steps = activeData?.steps ?? [];
    const step = steps[currentStep];
    const isLastStep = currentStep >= steps.length - 1;

    useEffect(() => {
        if (!isRunning || isLastStep) return;

        timerRef.current = setTimeout(() => {
            const nextStep = Math.min(currentStep + 1, steps.length - 1);
            setCurrentStep(nextStep);
            if (nextStep >= steps.length - 1) setIsRunning(false);
        }, 1200);

        return () => clearTimeout(timerRef.current);
    }, [currentStep, isLastStep, isRunning, steps.length]);

    const handleSubtopicChange = (subtopic) => {
        clearTimeout(timerRef.current);
        setIsRunning(false);
        setCurrentStep(0);
        setActiveSubtopic(subtopic.id);
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
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Event propagation topics">
                {subtopics.map((subtopic) => (
                    <button
                        key={subtopic.id}
                        type="button"
                        role="tab"
                        aria-selected={activeSubtopic === subtopic.id}
                        onClick={() => handleSubtopicChange(subtopic)}
                        className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                            activeSubtopic === subtopic.id
                                ? "border-cyan-400/40 bg-cyan-500/10 text-cyan-100"
                                : "border-white/10 bg-slate-900/70 text-slate-300 hover:border-white/20"
                        }`}
                    >
                        {subtopic.title}
                    </button>
                ))}
            </div>

            <div className="flex flex-wrap gap-6">
                <CodeEditor activeLine={step?.line ?? null} code={code} onCodeChange={setCode} />
                <VisualizationPanel title={topicData.visualization?.title ?? "DOM event path"}>
                    {activeData && <PropagationVisualization subtopic={activeData} currentStep={currentStep} step={step} />}
                </VisualizationPanel>
            </div>

            <section className="w-full space-y-5 border-t border-white/10 pt-6">
                <div className="max-w-4xl">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200">Theory</p>
                    <h2 className="mt-2 text-xl font-semibold text-white">{topicData.conceptData.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{topicData.conceptData.summary}</p>
                </div>
                <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                    {subtopics.map((subtopic) => (
                        <article key={subtopic.id} className="rounded-lg border border-white/10 bg-slate-950/50 p-4">
                            <h3 className="text-sm font-semibold text-white">{subtopic.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-300">{subtopic.description}</p>
                            <pre className="mt-3 overflow-x-auto rounded-md border border-white/10 bg-black/40 p-3 text-xs leading-5 text-sky-100">
                                <code>{subtopic.snippet}</code>
                            </pre>
                        </article>
                    ))}
                </div>
                <ul className="grid gap-2 border-t border-white/10 pt-4 text-sm text-slate-300 sm:grid-cols-3">
                    {topicData.conceptData.takeaways.map((takeaway) => (
                        <li key={takeaway} className="border-l-2 border-cyan-400/50 pl-3 leading-6">{takeaway}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
}