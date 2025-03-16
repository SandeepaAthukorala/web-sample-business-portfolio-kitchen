export default function Stats() {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left md:max-w-md">
            <div className="flex items-baseline gap-2 justify-center md:justify-start">
              <span className="text-4xl font-bold text-amber-500">25</span>
              <span className="text-lg text-gray-400">Years</span>
            </div>
            <h2 className="text-2xl font-bold mt-4 mb-2">Creative solutions by professional designers</h2>
            <p className="text-gray-400">
              Our kitchens are an expression of who you are, combining form and function to match your lifestyle perfectly.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: "🛠️", title: "Full Service", desc: "End-to-end kitchen design and installation" },
              { icon: "⭐", title: "Detail Work", desc: "Attention to every design element" },
              { icon: "💎", title: "Premium", desc: "High-quality materials and finishes" },
              { icon: "🎯", title: "Integrity", desc: "Transparent pricing and process" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
