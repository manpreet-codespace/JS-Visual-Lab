"use client";

import { useState } from "react";

export default function CodeEditor(){
    let [code,setCode] = useState(`
        let name = manpreet;
        let age = 34;
        console.log(name);
        console.log(age);
        `)
    return(
        <>
            <div className="w-full rounded-lg border border-gray-700 bg-[var(--bg)] relative z-40">
                <div className="flex items-center justify-between border-b border-gray-700 px-4 py-3">
                    <h2 className="text-sm font-semibold text-white">
                        JavaScript Code
                    </h2>
                    <span className="text-xs text-gray-400">
                        JavaScript
                    </span>
                </div>

                <textarea 
                value={code}
                onChange={(e)=>setCode(e.target.value)}
                spellCheck={false}
                 className="min-h-[250px] w-full resize-none bg-transparent p-4 font-mono text-sm text-white outline-none"/>

            </div>
        </>
    )
}