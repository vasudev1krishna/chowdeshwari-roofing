import Link from 'next/link';

export default function ServicesPage() {
  const factoryProducts = [
    {
      title: "JSW Colour Coated Sheets",
      details: ["Various RAL Colours", "Anti-Corrosive Coating", "High Tensile Strength"],
      image: "https://unsplash.com",
      description: "Authorized provider of premium JSW roofing sheets. Available in a wide range of colors to match your building's aesthetics."
    },
    {
      title: "MS Square & Rectangular Tubes",
      details: ["Structural Grade Steel", "Various Wall Thickness", "Precision Cut Lengths"],
      image: "https://unsplash.com", 
      description: "High-quality Mild Steel (MS) square tubes for robust roof framing, sheds, and industrial structural support."
    },
    {
      title: "Custom Factory Fabrication",
      details: ["On-site Measurements", "Color Matching Accessories", "Fast Delivery"],
      image: "https://unsplash.com",
      description: "Direct factory solutions including ridges, gutters, and flashings to complete your JSW roofing system."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <div className="container mx-auto px-6">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Authorized <span className="text-blue-600">JSW Roofing</span> Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Supplying premium JSW color sheets and high-strength MS Square Tubes directly from our factory to your project site.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-10">
          {factoryProducts.map((product, index) => (
            <div key={index} className="bg-white group rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="h-56 overflow-hidden relative">
                <img 
                   src={product.image} 
                   alt={product.title} 
                   className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Factory Direct
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-3">{product.title}</h2>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{product.description}</p>
                <div className="space-y-2 mb-8">
                  {product.details.map((item, i) => (
                    <div key={i} className="flex items-center text-slate-700 text-sm">
                      <span className="w-5 h-5 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mr-3 text-[10px]">✔</span>
                      {item}
                    </div>
                  ))}
                </div>
                <Link href="/quote" className="block w-full text-center py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg">
                  Get Current Price
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
