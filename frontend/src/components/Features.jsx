export default function FeaturesSection() {
  return (
    <>
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
      
      {/* Feature 1 */}
      <div id="feature-section"className="flex flex-col md:flex-row items-center gap-8">
  <div className="relative w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
    <img 
      src="/sunrise.avif" 
      alt="Sunrise" 
      className="w-full h-64 md:h-80 object-cover" 
    />
    <div className="absolute bottom-4 left-4 bg-white/80 text-black text-sm px-3 py-1 rounded shadow">
      Interactive images
    </div>
  </div>
  <div className="w-full md:w-1/2">
    <h3 className="text-green-600 font-semibold uppercase mb-2">Dynamic Workspace Hub</h3>
    <p className="text-gray-800 dark:text-gray-200 text-lg">
      Transform your dashboard into a living, interactive hub where every widget responds to your actions instead of static links and lists.
    </p>
  </div>
</div>

<div className="flex flex-col md:flex-row items-center gap-8 mt-8">
  <div className="relative w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
    <img 
      src="/Todo.png" 
      alt="Pomodoro Timer" 
      className="w-full h-64 md:h-80 object-contain" 
    />
    <div className="absolute bottom-4 left-4 bg-white/80 text-black text-sm px-3 py-1 rounded shadow">
      Interactive images
    </div>
  </div>
  <div className="w-full md:w-1/2">
    <h3 className="text-green-600 font-semibold uppercase mb-2">Smart Task Organizer</h3>
    <p className="text-gray-800 dark:text-gray-200 text-lg">
      Keep your day on track with an intuitive, interactive to-do list. Add, edit, and check off tasks effortlessly while staying focused. 
    </p>
  </div>
  </div>
  </div>
  </>
     
  );
}
