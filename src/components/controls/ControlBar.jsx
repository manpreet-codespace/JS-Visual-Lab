"use client";

export default function ControlBar({onNext,onRun,onReset,isRunning = false, isNextDisabled = false}){
    return(
        <>
        <div className="flex items-center gap-3">
            <button
            onClick={onRun}
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white">
                ▶ Run
            </button>
            <button
            onClick={onNext}
            disabled={isNextDisabled}
            className="rounded-md border border-gray-700 px-4 py-2 text-sm font-medium text-white">
                ⏭ Next Step
            </button>
            <button
            onClick={onReset}
            className="rounded-md border border-gray-700 px-4 py-2 text-sm font-medium text-gray-300">
                ↻ Reset
            </button>
        </div>
        </>
    )
}