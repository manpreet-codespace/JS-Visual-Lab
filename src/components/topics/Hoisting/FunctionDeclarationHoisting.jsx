export default function FunctionDeclarationHoisting() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">Function Declaration</h3>
                <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-violet-200">
                    fully hoisted
                </span>
            </div>

            <p className="text-sm leading-7 text-slate-300">
                Function declarations are hoisted as complete functions, which means they can be called before they are written in the source code.
            </p>

            <div className="rounded-2xl border border-white/10 bg-[#0b1220] p-4 font-mono text-sm leading-6 text-sky-200">
                <pre>{`console.log(greet());
function greet() {
  return "Hi";
}`}</pre>
            </div>

            <ul className="space-y-2 text-sm text-slate-300">
                <li>• Entire function body is ready before execution.</li>
                <li>• Safe to call before declaration.</li>
                <li>• Works differently from function expressions.</li>
            </ul>
        </div>
    );
}
