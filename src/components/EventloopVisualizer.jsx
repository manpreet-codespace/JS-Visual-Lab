import { Check, Dot } from "lucide-react";

export default function EventloopVisualizer(){
    return(
        <>
        <div className="border border-[var(--secondary)]/20 w-10/12 rounded-lg bg-[var(--bg)] ">
            <div className="flex justify-between items-center border-b border-[var(--secondary)]/20 p-4">
                <p className="text-sm font-semibold">Event loop/live preview</p>
                <p className="flex items-center text-[#229f19] text-[10px] "><Dot color="#229f19"/> LIVE</p>
            </div>
            <div>
                <div className="flex items-center justify-between p-4 ">
                    <div>
                        <p className="text-xs text-white/30">Visualizing Concept</p>
                        <h2 className="text-md font-semibold ">Microtasks vs. tasks</h2>
                    </div>
                    <div><span className="text-[var(--warning)] text-[10px] border border-[var(--warning)] p-1 rounded-sm bg-[var(--warning)]/20">INTERMIDIATE</span></div>
                </div> 
                <div className="flex gap-3 p-4">
                    <div className="dot border border-white h-25 space-y-2 flex-1 flex flex-col items-center justify-center rounded-lg">
                        <p className="text-xs text-white/40 ">Call stack</p>
                        <p className="text-xs text-white/40">console.log</p>
                    </div>
                     <div className="dot border border-white h-25 space-y-2 flex-1 flex flex-col items-center justify-center rounded-lg">
                        <p className="text-xs text-white/40 ">Call stack</p>
                        <p className="text-xs text-white/40">console.log</p>
                    </div>
                     <div className="dot border border-white h-25 space-y-2 flex-1 flex flex-col items-center justify-center rounded-lg">
                        <p className="text-xs text-white/40 ">Call stack</p>
                        <p className="text-xs text-white/40">console.log</p>
                    </div>

                </div>
                <div>

                </div>
                <div className="w-11/12 mx-auto mb-2">

                <div className="flex justify-between p-2 bg-white/10 rounded-md">

                    <div className="flex items-center gap-2">
                        <Check color="#229f19" className="border border-[#229f19] rounded-sm bg-[#229f19]/20"/><p>Output A → D → C → B</p>
                    </div>
                    <div>
                        <button>Replay</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
