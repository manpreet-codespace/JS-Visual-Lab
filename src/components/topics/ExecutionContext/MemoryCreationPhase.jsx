
export default function MemoryCreationPhase({variables}){
    return (
        <>
        <div className="space-y-4">

            <div>
                <h3 className="text-lg font-semibold text-white">
                    Memory Creation Phase
                </h3>
                <p className="mt-1 text-gray-400 text-sm">
                    JavaScript allocates memory for variables before execution.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
               {
                variables.map((variable)=>(
                    <div key={variable.id} className="rounded-lg border border-gray-700 bg-gray-800 p-4">
                        <p className="text-sm text-gray-400">
                            Variable
                        </p>
                        <p className="mt-1 text-base text-white">{variable.name}</p>

                    <div className="my-3 h-px bg-gray-700" />

                    <p className="text-sm text-gray-400">
                    Value
                    </p>

                    <p className="mt-1 text-yellow-400">
                        {variable.memoryValue}
                    </p>


                    </div>
                ))
               }
            </div>
        </div>
        
        </>
    )
}