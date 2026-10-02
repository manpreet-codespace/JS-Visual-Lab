"use client";

import ControlBar from "@/components/controls/ControlBar";
import CodeEditor from "@/components/editor/CodeEditor";
import VisualizationPanel from "@/components/visualization/VisualizationPanel";
import MemoryCreationPhase from "@/components/topics/ExecutionContext/MemoryCreationPhase";
import ExecutionPhase from "@/components/topics/ExecutionContext/ExecutionPhase";
import ConsolePanel from "@/components/visualization/ConsolePanel";
import VarHoisting from "@/components/topics/Hoisting/VarHoisting";
import LetHoisting from "@/components/topics/Hoisting/LetHoisting";
import ConstHoisting from "@/components/topics/Hoisting/ConstHoisting";
import FunctionDeclarationHoisting from "@/components/topics/Hoisting/FunctionDeclarationHoisting";
import FunctionExpressionHoisting from "@/components/topics/Hoisting/FunctionExpressionHoisting";
import { useEffect, useRef, useState } from "react";

const subtopicStyles = {
    var: "border-amber-400/40 bg-amber-500/10 text-amber-200",
    let: "border-cyan-400/40 bg-cyan-500/10 text-cyan-200",
    const: "border-emerald-400/40 bg-emerald-500/10 text-emerald-200",
    "function-declaration": "border-violet-400/40 bg-violet-500/10 text-violet-200",
    "function-expression": "border-pink-400/40 bg-pink-500/10 text-pink-200"
};

const subtopicComponents = {
    var: VarHoisting,
    let: LetHoisting,
    const: ConstHoisting,
    "function-declaration": FunctionDeclarationHoisting,
    "function-expression": FunctionExpressionHoisting
};

export default function Hoisting({ topicData }) {
    const [currentStep, setCurrentStep] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [code, setCode] = useState(topicData.code ?? "");

    const timerRef = useRef(null);
    const step = topicData.steps[currentStep];
    const isLastStep = currentStep >= topicData.steps.length - 1;
    const subtopics = topicData.subtopics ?? [];
    const [activeSubtopic, setActiveSubtopic] = useState(subtopics[0]?.id ?? "var");
    const activeSubtopicData = subtopics.find((item) => item.id === activeSubtopic) ?? subtopics[0] ?? null;
    const ActiveSubtopicComponent = subtopicComponents[activeSubtopic] ?? null;

    const consoleOutputs = topicData.steps
        .slice(0, currentStep + 1)
        .filter((stepItem) => stepItem.type === "console")
        .map((stepItem) => {
            const variable = topicData.variables.find((item) => item.id === stepItem.variableId);
            return variable;
        })
        .filter(Boolean);

    useEffect(() => {
        if (!isRunning) return;

        if (currentStep >= topicData.steps.length - 1) {
            setIsRunning(false);
            return;
        }

        timerRef.current = setTimeout(() => {
            setCurrentStep((prev) => Math.min(prev + 1, topicData.steps.length - 1));
        }, 2000);

        return () => clearTimeout(timerRef.current);
    }, [isRunning, currentStep, topicData.steps.length]);

    const handleNext = () => {
        setCurrentStep((prev) => {
            if (prev >= topicData.steps.length - 1) {
                return prev;
            }

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

    const actions = [
        { label: "▶ Run", onClick: handleRun, variant: "primary" },
        { label: "⏭ Next Step", onClick: handleNext, variant: "secondary", disabled: isLastStep || isRunning },
        { label: "↻ Reset", onClick: handleReset, variant: "ghost" },
    ];

    return (
        <div className="mt-20 flex flex-col space-y-4">
            <ControlBar actions={actions} />

            {subtopics.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {subtopics.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => setActiveSubtopic(item.id)}
                            className={`rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                                activeSubtopic === item.id
                                    ? subtopicStyles[item.id] ?? "border-violet-400/40 bg-violet-500/10 text-violet-200"
                                    : "border-white/10 bg-slate-900/70 text-slate-300 hover:border-white/20"
                            }`}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
            )}

            <div className="flex flex-wrap gap-6">
                <CodeEditor
                    activeLine={step?.line ?? null}
                    code={activeSubtopicData?.code ?? code}
                    onCodeChange={setCode}
                />

                <VisualizationPanel title={activeSubtopicData?.visualization?.title ?? "Hoisting Timeline"}>
                    {ActiveSubtopicComponent ? (
                        <ActiveSubtopicComponent />
                    ) : (
                        <>
                            <div className="flex items-center justify-center">
                                {step?.type === "memory" && (
                                    <MemoryCreationPhase variables={topicData.variables} />
                                )}
                            </div>

                            <div className="flex items-center justify-center">
                                {step?.type === "execution" && (
                                    <ExecutionPhase variables={topicData.variables} currentVariableId={step.variableId} />
                                )}
                            </div>

                            <div className="flex items-center justify-center">
                                {step?.type === "console" && (
                                    <ConsolePanel variables={consoleOutputs} />
                                )}
                            </div>
                        </>
                    )}
                </VisualizationPanel>
            </div>
        </div>
    );
}