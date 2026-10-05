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

    const timerRef = useRef(null);
    const subtopics = topicData.subtopics ?? [];
    const [activeSubtopic, setActiveSubtopic] = useState(subtopics[0]?.id ?? "var");
    const activeSubtopicData = subtopics.find((item) => item.id === activeSubtopic) ?? subtopics[0] ?? null;
    const [code, setCode] = useState(activeSubtopicData?.code ?? topicData.code ?? "");
    const activeSteps = activeSubtopicData?.steps ?? topicData.steps ?? [];
    const activeVariables = activeSubtopicData?.variables ?? topicData.variables ?? [];
    const step = activeSteps[currentStep];
    const isLastStep = currentStep >= activeSteps.length - 1;
    const ActiveSubtopicComponent = subtopicComponents[activeSubtopic] ?? null;

    const consoleOutputs = activeSteps
        .slice(0, currentStep + 1)
        .filter((stepItem) => stepItem.type === "console")
        .map((stepItem) => {
            const variable = activeVariables.find((item) => item.id === stepItem.variableId);
            return variable
                ? { ...variable, id: stepItem.id, consoleValue: stepItem.output ?? variable.consoleValue }
                : null;
        })
        .filter(Boolean);

    useEffect(() => {
        if (!isRunning || currentStep >= activeSteps.length - 1) return;

        timerRef.current = setTimeout(() => {
            const nextStep = Math.min(currentStep + 1, activeSteps.length - 1);
            setCurrentStep(nextStep);

            if (nextStep >= activeSteps.length - 1) {
                setIsRunning(false);
            }
        }, 2000);

        return () => clearTimeout(timerRef.current);
    }, [isRunning, currentStep, activeSteps.length]);

    const handleNext = () => {
        setCurrentStep((prev) => {
            if (prev >= activeSteps.length - 1) {
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
        setIsRunning(activeSteps.length > 1);
    };

    const handleSubtopicChange = (item) => {
        clearTimeout(timerRef.current);
        setIsRunning(false);
        setCurrentStep(0);
        setCode(item.code ?? topicData.code ?? "");
        setActiveSubtopic(item.id);
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
                            onClick={() => handleSubtopicChange(item)}
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
                    code={code}
                    onCodeChange={setCode}
                />

                <VisualizationPanel title={activeSubtopicData?.visualization?.title ?? "Hoisting Timeline"}>
                    <div className="space-y-6">
                        {step?.type === "memory" && (
                            <MemoryCreationPhase variables={activeVariables} />
                        )}

                        {step?.type === "execution" && (
                            <ExecutionPhase variables={activeVariables} currentVariableId={step.variableId} />
                        )}

                        {step?.type === "console" && (
                            <ConsolePanel variables={consoleOutputs} />
                        )}

                        {ActiveSubtopicComponent && <ActiveSubtopicComponent />}
                    </div>
                </VisualizationPanel>
            </div>
        </div>
    );
}