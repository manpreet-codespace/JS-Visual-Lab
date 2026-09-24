export default function VisualizationPanel({title, children}){
    return(
    <>
    <div className="w-5/12 rounded-lg border border-gray-700 bg-[var(--bg)] relative z-40">
      
      {/* Header */}
      <div className="border-b border-gray-700 px-4 py-3">
        <h2 className="text-sm font-semibold text-white">
          {title}
        </h2>
      </div>

      {/* Visualization Area */}
      <div className="min-h-[300px] p-6">
        {children}
      </div>

    </div>
    </>
)
}