"use client";

import ControlBar from "@/components/controls/ControlBar";
import CodeEditor from "@/components/editor/CodeEditor";
import VisualizationPanel from "@/components/visualization/VisualizationPanel";
import MemoryCreationPhase from "./MemoryCreationPhase";
import ExecutionPhase from "./ExecutionPhase";
import { useState } from "react";
import ConsolePanel from "@/components/visualization/ConsolePanel";

export default function ExecutionContext({topicData}) {

    const [currentStep,setCurrentStep] = useState(0);
    const step = topicData.steps[currentStep];
    console.log(step);

    const isLastStep =
  currentStep >= topicData.steps.length - 1;

    const currentVariable = step?.variableId 
     ?topicData.variables.find(
        (variable) => variable.id === step.variableId
    ) 
    :null;

    console.log(currentVariable);


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

  console.log(consoleOutputs);


    const handleNext = () => {
        setCurrentStep((prev)=>{
            if(prev >= topicData.steps.length-1)
            {
                return prev;

            }
            console.log(prev+1);

            return prev+1;


        })
        

    }

    const handleReset = () => {
        setCurrentStep(0);

    }

    const handleRun = () => {
        setCurrentStep(0);

    }
    return (
        <>

        <div className="mt-20 flex flex-col space-y-4">

            <ControlBar
                onRun={handleRun}
                onNext={handleNext}
                onReset={handleReset} 
                isNextDisabled={isLastStep} 
                />
            <div className="flex flex-wrap gap-6">
                <CodeEditor />
                <VisualizationPanel title="Execution Context">
                    <div className="flex items-center justify-center">
                        {
                            step.type === "memory" && (
                                <MemoryCreationPhase variables={topicData.variables} />                
                            )
                        }
                    </div>

                    <div className="flex items-center  justify-center">
                        {
                            step.type === "execution" &&(
                                <ExecutionPhase variables = {topicData.variables} currentVariableId = {step.variableId}/>
                            )
                        }
                    </div>

                    <div className="flex items-center  justify-center">
                        {
                            step.type === "console" &&(
                               <ConsolePanel variables={consoleOutputs} />
                            )
                        }
                    </div>
                </VisualizationPanel>



            </div>

            
        </div>

        </>
    )
}

