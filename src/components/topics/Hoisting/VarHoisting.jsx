export default function VarHoisting() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">var</h3>
                <span className="rounded-full border border-amber-400/30 bg-amber-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-amber-200">
                    hoisted
                </span>
            </div>

            <p className="text-sm leading-7 text-slate-300">
                var is hoisted to the top of its scope and initialized with undefined. That means it exists before the assignment line runs.
            </p>

            <div className="rounded-2xl border border-white/10 bg-[#0b1220] p-4 font-mono text-sm leading-6 text-sky-200">
                <pre>{`console.log(name); // undefined
var name = "Aman";`}</pre>
            </div>

            <ul className="space-y-2 text-sm text-slate-300">
                <li>• It is function-scoped.</li>
                <li>• It is available before assignment.</li>
                <li>• Its initial value is undefined.</li>
            </ul>
        </div>
    );
}
