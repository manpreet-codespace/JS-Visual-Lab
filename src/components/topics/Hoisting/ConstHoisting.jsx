export default function ConstHoisting() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">const</h3>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-200">
                    block scope
                </span>
            </div>

            <p className="text-sm leading-7 text-slate-300">
                const behaves like let during hoisting: it is created in memory, but it remains in the Temporal Dead Zone until initialization happens.
            </p>

            <div className="rounded-2xl border border-white/10 bg-[#0b1220] p-4 font-mono text-sm leading-6 text-sky-200">
                <pre>{`console.log(status); // ReferenceError
const status = "ready";
console.log(status) //ready`}</pre>
            </div>

            <ul className="space-y-2 text-sm text-slate-300">
                <li>• It is block-scoped.</li>
                <li>• It must be initialized at declaration time.</li>
                <li>• It also follows the TDZ rule.</li>
            </ul>
        </div>
    );
}
