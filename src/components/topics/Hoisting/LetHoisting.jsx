export default function LetHoisting() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">let</h3>
                <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-200">
                    TDZ
                </span>
            </div>

            <p className="text-sm leading-7 text-slate-300">
                let is hoisted, but it is placed in the Temporal Dead Zone until the declaration line executes. Access before that causes a ReferenceError.
            </p>

            <div className="rounded-2xl border border-white/10 bg-[#0b1220] p-4 font-mono text-sm leading-6 text-sky-200">
                <pre>{`console.log(age); // ReferenceError
let age = 24;
console.log(age) //24`}</pre>
            </div>

            <ul className="space-y-2 text-sm text-slate-300">
                <li>• It is block-scoped.</li>
                <li>• It is hoisted but not initialized early.</li>
                <li>• Access before declaration throws an error.</li>
            </ul>
        </div>
    );
}
