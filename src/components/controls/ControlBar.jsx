"use client";

const variantMap = {
    primary: "bg-blue-600 text-white hover:bg-blue-500 disabled:bg-blue-500/60",
    secondary: "border border-gray-700 bg-transparent text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60",
    ghost: "border border-gray-700 bg-transparent text-gray-300 hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60",
};

export default function ControlBar({ actions = [], className = "" }) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {actions.map(({ label, onClick, disabled = false, variant = "secondary", type = "button" }) => (
                <button
                    key={label}
                    type={type}
                    onClick={onClick}
                    disabled={disabled}
                    className={`rounded-md px-4 py-2 text-sm font-medium transition ${variantMap[variant] ?? variantMap.secondary}`}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}