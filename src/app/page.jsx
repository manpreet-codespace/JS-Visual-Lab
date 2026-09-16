import EventloopVisualizer from "@/components/EventloopVisualizer";
import { ArrowRight,Flame } from "lucide-react";

export default function Home() {
  return (
   <>
      <main className="relative z-60 mt-30 flex justify-around w-screen gap-6">
          <div className="space-y-6 flex-1 p-6">
              <span className="border border-[var(--primary)] rounded-full px-4 py-1  bg-[var(--primary)]/20 text-sm text-[var(--primary)] ">Interactive Javascript Learning Lab  </span>
              <h1 className="text-7xl font-bold mt-6 ">Understand <br/>JavaScript by <br/><span className="text-gradient">seeing it happen</span></h1>
              <p className="text-lg text-white/60">Stop guessing what happens under the hood. Watch<br/> execution contexts, queues, closures, and promises unfold <br/>in real time.</p>
              <div className="flex gap-8">
                <button className="px-4 py-3 bg-[var(--button)] text-sm font-semibold flex gap-1 rounded-lg shadow-[0_1px_10px_var(--button)] transition-shadow items-center">Explore JavaScript <ArrowRight size={16}/></button>
                <button className="px-4 py-3 border border-white/30 bg-[var(--bg)]/70 hover:border-[var(--secondary)] duration-200 transition-all hover:bg-[var(--secondary)]/10 text-sm font-semibold flex gap-1 rounded-lg items-center"><Flame color="#f59f0a"/> Start Challenge</button>
              </div>
          </div>
          <div className=" flex-1 flex flex-col items-center p-6">
    <EventloopVisualizer/>
          </div>

      </main>

   </>
  );
}
