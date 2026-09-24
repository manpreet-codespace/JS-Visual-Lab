export default function ConsolePanel({ variables,currentVariableId }) {
  return (
    <div className="w-full rounded-lg border border-gray-700 bg-black">

      {/* Console Header */}
      <div className="flex items-center justify-between border-b border-gray-700 px-4 py-3">
        <h3 className="text-sm font-semibold text-white">
          Console
        </h3>

        <span className="text-xs text-gray-500">
          JavaScript
        </span>
      </div>

      {/* Console Output */}
      <div className="min-h-[200px] p-4 font-mono text-sm">

        {variables.length === 0 ? (
          <p className="text-gray-500">
            Console output will appear here...
          </p>
        ) : (
          <div className="space-y-2">
            {variables.map((output) =>(

                 
              <div
                key={output.id}
                className="text-green-400"
              >
                <span className="mr-2 text-gray-500">
                  &gt;
                </span>

                <p>{output.consoleValue}</p>
              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  );
}