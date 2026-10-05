"use client";

import ControlBar from "@/components/controls/ControlBar";
import CodeEditor from "@/components/editor/CodeEditor";
import VisualizationPanel from "@/components/visualization/VisualizationPanel";
import MemoryCreationPhase from "./MemoryCreationPhase";
import ExecutionPhase from "./ExecutionPhase";
import { useEffect, useRef, useState } from "react";
import ConsolePanel from "@/components/visualization/ConsolePanel";

export default function ExecutionContext({ topicData }) {
    const [currentStep, setCurrentStep] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [code, setCode] = useState(topicData.code ?? "");

    const timerRef = useRef(null);
    const step = topicData.steps[currentStep];
    const isLastStep = currentStep >= topicData.steps.length - 1;

    const consoleOutputs = topicData.steps
        .slice(0, currentStep + 1)
        .filter((step) => step.type === "console")
        .map((step) => {
            const variable = topicData.variables.find(
                (variable) => variable.id === step.variableId
            );

            return variable;
        })
        .filter(Boolean);

        useEffect(()=>{
            if(!isRunning) return;

            if(currentStep >= topicData.steps.length-1)
            {
                setIsRunning(false);
                return;

            }

            timerRef.current = setTimeout(()=>{
                setCurrentStep((prev)=>
                    Math.min(prev+1,topicData.steps.length-1)

                )
            },2000)


            return ()=> clearTimeout(timerRef.current);

        },[isRunning,currentStep,topicData.steps.length]);




    const handleNext = () => {
        setCurrentStep((prev) => {
            if (prev >= topicData.steps.length - 1) {
                return prev;

            }
            console.log(prev + 1);
            return prev + 1;


        })


    }

    const handleReset = () => {
        clearTimeout(timerRef.current);
        setIsRunning(false);

        setCurrentStep(0);

    }

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
            {topicData.conceptData && (
                <div className="rounded-[24px] border border-violet-400/20 bg-slate-950/60 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                    <div className="mb-4 flex items-center justify-between gap-3">
                        <h2 className="text-xl font-semibold text-white">{topicData.conceptData.title}</h2>
                        <span className="rounded-full border border-sky-400/30 bg-sky-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-200">
                            Concept map
                        </span>
                    </div>

                    <p className="max-w-4xl text-sm leading-7 text-slate-300">
                        {topicData.conceptData.summary}
                    </p>

                    <div className="mt-5 grid gap-4 md:grid-cols-3">
                        {topicData.conceptData.cards.map((card) => (
                            <div
                                key={card.title}
                                className="rounded-2xl border border-white/10 bg-[#0b1220] p-4"
                            >
                                <h3 className="text-base font-semibold text-violet-200">{card.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-slate-300">{card.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                        {topicData.conceptData.takeaways.map((item) => (
                            <span
                                key={item}
                                className="rounded-full border border-violet-400/25 bg-violet-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-violet-100"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            <ControlBar actions={actions} />

            <div className="flex flex-col flex-wrap gap-6">
                <CodeEditor activeLine={step?.line ?? null} code={code} onCodeChange={setCode} />

                <VisualizationPanel title="Execution Context">
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
                </VisualizationPanel>
            </div>
        </div>
    );
}

