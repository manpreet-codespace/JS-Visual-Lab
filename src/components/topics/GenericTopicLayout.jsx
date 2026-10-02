"use client";

import { useEffect, useRef, useState } from "react";
import ControlBar from "@/components/controls/ControlBar";
import CodeEditor from "@/components/editor/CodeEditor";
import VisualizationPanel from "@/components/visualization/VisualizationPanel";

export default function GenericTopicLayout({ topicData }) {
    const steps = topicData?.steps ?? [];
    const [currentStep, setCurrentStep] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [code, setCode] = useState(topicData?.code ?? "");
    const timerRef = useRef(null);
    const step = steps[currentStep];
    const isLastStep = currentStep >= steps.length - 1;
    const preview = topicData?.preview;
    const conceptData = topicData?.conceptData;
    const insightPoints = preview?.keyPoints ?? conceptData?.takeaways ?? [];

    useEffect(() => {
        if (!isRunning || steps.length === 0) return;

        if (currentStep >= steps.length - 1) {
            setIsRunning(false);
            return;
        }

        timerRef.current = setTimeout(() => {
            setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
        }, 1200);

        return () => clearTimeout(timerRef.current);
    }, [currentStep, isRunning, steps.length]);

    const handleNext = () => {
        setCurrentStep((prev) => {
            if (prev >= steps.length - 1) return prev;
            return prev + 1;
        });
    };

    const handleReset = () => {
        clearTimeout(timerRef.current);
        setIsRunning(false);
        setCurrentStep(0);
    };

    const handleRun = () => {
        clearTimeout(timerRef.current);
        setCurrentStep(0);
        setIsRunning(true);
    };

    const actions = steps.length
        ? [
              { label: "▶ Run", onClick: handleRun, variant: "primary" },
              { label: "⏭ Next Step", onClick: handleNext, variant: "secondary", disabled: isLastStep || isRunning },
              { label: "↻ Reset", onClick: handleReset, variant: "ghost" },
          ]
        : [];

    return (
        <div className="mt-8 flex flex-col gap-6">
            {actions.length > 0 && <ControlBar actions={actions} />}

            <div className="flex flex-wrap gap-6">
                <CodeEditor
                    activeLine={step?.line ?? null}
                    code={code}
                    onCodeChange={setCode}
                />

                <VisualizationPanel title={preview?.title ?? conceptData?.title ?? "Concept overview"}>
                    <div className="space-y-5">
                        <div className="rounded-2xl border border-violet-400/20 bg-violet-500/5 p-4">
                            <p className="text-sm leading-7 text-slate-200">
                                {preview?.summary ?? conceptData?.summary ?? "Explore the concept using the code example and the key ideas below."}
                            </p>

                            {insightPoints.length > 0 && (
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {insightPoints.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-white/10 bg-slate-900/80 px-2.5 py-1 text-[11px] font-medium text-slate-200"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        {(conceptData?.cards ?? []).length > 0 && (
                            <div className="grid gap-3 sm:grid-cols-2">
                                {conceptData.cards.map((card) => (
                                    <div
                                        key={card.title}
                                        className="rounded-2xl border border-white/10 bg-slate-950/70 p-3"
                                    >
                                        <p className="text-sm font-semibold text-white">{card.title}</p>
                                        <p className="mt-2 text-sm leading-6 text-slate-300">{card.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {steps.length > 0 && step && (
                            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-4">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200">
                                    Current step
                                </p>
                                <p className="mt-2 text-sm leading-6 text-slate-200">
                                    {step.description ?? `Step ${currentStep + 1}`} 
                                </p>
                            </div>
                        )}
                    </div>
                </VisualizationPanel>
            </div>
        </div>
    );
}
