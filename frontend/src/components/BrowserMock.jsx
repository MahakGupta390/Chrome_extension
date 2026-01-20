export default function BrowserMock({ children }) {
  return (
    <div className="relative z-20 mx-auto mt-8 w-[94%] max-w-6xl rounded-xl overflow-hidden shadow-2xl backdrop-blur-xl bg-white/10 border border-white/20">

      {/* ===== Chrome Top Area ===== */}
      <div className="bg-[#1f1f1f]">

        {/* Tabs + Window controls */}
        <div className="flex items-center h-10 px-4 gap-4">
          
          {/* Window controls */}
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          {/* Tabs */}
          <div className="flex gap-2 ml-4">
            <div className="px-4 py-1 rounded-t-md bg-white text-sm text-#2b2b2b">
              New Tab
            </div>
            <div className="px-3 py-1 rounded-t-md bg-[#1a1a1a] text-sm text-white/40 cursor-pointer">
              +
            </div>
          </div>
        </div>

        {/* Address bar */}
        <div className="px-4 py-2 bg-[#2b2b2b] flex items-center justify-center">
          <div className="w-[70%] max-w-xl flex items-center gap-3 px-4 py-2 rounded-full bg-[#3a3a3a] text-sm text-white/70">
            🔒
            <span>https://www.google.com</span>
          </div>
        </div>
      </div>

      {/* ===== Browser Content ===== */}
      <div className="relative flex-1 flex items-center justify-center min-h-[50vh]">
        {children}
      </div>
    </div>
  );
}
