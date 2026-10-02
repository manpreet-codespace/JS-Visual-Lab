export default function FunctionExpressionHoisting() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">Function Expression</h3>
                <span className="rounded-full border border-pink-400/30 bg-pink-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-pink-200">
                    variable hoist
                </span>
            </div>

            <p className="text-sm leading-7 text-slate-300">
                Function expressions are stored in a variable. The variable itself is hoisted, but the function value is not available until the assignment is executed.
            </p>

            <div className="rounded-2xl border border-white/10 bg-[#0b1220] p-4 font-mono text-sm leading-6 text-sky-200">
                <pre>{`const sayHello = function () {
  return "Hi";
};
console.log(sayHello());`}</pre>
            </div>

            <ul className="space-y-2 text-sm text-slate-300">
                <li>• The variable is hoisted.</li>
                <li>• The function value is assigned later.</li>
                <li>• Calling it too early can fail.</li>
            </ul>
        </div>
    );
}
