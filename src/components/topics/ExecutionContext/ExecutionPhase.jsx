export default function ExecutionPhase({ variables,currentVariableId }) {
    return (
        <>
            <div>

                <div>
                    <h3 className="text-lg font-semibold text-white">
                        Execution Phase
                    </h3>

                    <p className="mt-1 text-sm text-gray-400">
                        JavaScript executes the code and assigns values to variables.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                    {variables.map((variable) => {

                        const isCurrent =
                            variable.id === currentVariableId;

                        return (
                            <div
                                key={variable.id}
                                className={`rounded-lg border p-4 ${isCurrent
                                        ? "border-blue-500 bg-gray-800"
                                        : "border-gray-700 bg-gray-800"
                                    }`}
                            >

                                <p className="text-sm text-gray-400">
                                    Variable
                                </p>

                                <p className="mt-1 font-mono text-white">
                                    {variable.name}
                                </p>

                                <div className="my-3 h-px bg-gray-700" />

                                <p className="text-sm text-gray-400">
                                    Value
                                </p>

                                <p className="mt-1 font-mono text-green-400">
                                    {variable.executionValue}
                                </p>

                                {isCurrent && (
                                    <p className="mt-3 text-xs text-blue-400">
                                        Currently executing
                                    </p>
                                )}

                            </div>
                        );
                    })}

                </div>

            </div>
        </>
    )
}