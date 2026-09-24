"use client"


import EventloopVisualizer from "@/components/EventloopVisualizer";
import { topics } from "@/data/topics";
import { ArrowRight, Flame } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
 const router = useRouter();

  return (
    <>
      <main className="relative z-60 mt-30 flex justify-around w-screen">
        <div className="space-y-6 flex-1 p-6">
          <span className="border border-[var(--primary)] rounded-full px-4 py-1  bg-[var(--primary)]/20 text-sm text-[var(--primary)] ">Interactive Javascript Learning Lab  </span>
          <h1 className="text-7xl font-bold mt-6 ">Understand <br />JavaScript by <br /><span className="text-gradient">seeing it happen</span></h1>
          <p className="text-lg text-white/60">Stop guessing what happens under the hood. Watch<br /> execution contexts, queues, closures, and promises unfold <br />in real time.</p>
          <div className="flex gap-8">
            <button className="px-4 py-3 bg-[var(--button)] text-sm font-semibold flex gap-1 rounded-lg shadow-[0_1px_10px_var(--button)] transition-shadow items-center">Explore JavaScript <ArrowRight size={16} /></button>
            <button className="px-4 py-3 border border-white/30 bg-[var(--bg)]/70 hover:border-[var(--secondary)] duration-200 transition-all hover:bg-[var(--secondary)]/10 text-sm font-semibold flex gap-1 rounded-lg items-center"><Flame color="#f59f0a" /> Start Challenge</button>
          </div>
        </div>
        <div className=" flex-1 flex flex-col items-center p-4">
          <EventloopVisualizer />
        </div>

      </main>
      <hr className="w-11/12 mx-auto border-[var(--secondary)]/40" />


      <section className="relative z-60">
        <div 
        >
          <h1 className="text-4xl font-bold text-center mt-15"><span className="text-gradient1">Javascript</span> Concepts</h1>
          <p className="text-md font-semibold text-center text-white/60">Master JavaScript concepts through interactive visuals, animations, and hands-on challenges.</p>
        </div>

        <div className="flex flex-wrap gap-6 justify-center mt-10  ">
          {
            topics.map((topic)=>(
              <div key={topic.id} onClick={()=>router.push(`/lab/${topic.slug}`)} className="p-3 border border-white/10 w-3/12 bg-[var(--bg)] gradient  rounded-lg hover:border-[var(--primary)] hover:shadow-[1px_1px_5px_var(--primary)] space-y-2">
                <div className="flex justify-between">
                  <h1 className="text-lg font-semibold ">{topic.topic}</h1>
                  <span className={`px-2 py-1 h-5 text-[9px] rounded-sm  ${topic.difficulty  === "Intermediate" 
                    ?  "border border-[var(--warning)] text-[var(--warning)] bg-[var(--warning)]/20"
                    : topic.difficulty ==="Beginner" 
                    ? "border border-[var(--success)] text-[var(--success)] bg-[var(--success)]/20" 
                    : "border border-[var(--error)] text-[var(--error)] bg-[var(--error)]/20" }`}>{topic.difficulty.toUpperCase()}</span>
                </div>
                <div>
                  <p className="text-white/60 text-sm ">
                    {topic.description}
                  </p>
                  </div>
              </div>
            ))
          }
        </div>
      </section>

    </>
  ); 
}
