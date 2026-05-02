import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">
      {/* LOCAL BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/bgroof.avif" 
          alt="Chowdeshwari Roofing Devanahalli" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-slate-900/60"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight uppercase tracking-tight">
          Chowdeshwari <br />
          <span className="text-blue-500">Roofing Solutions</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto font-medium">
          Authorized JSW Colour Coated Sheets & MS Square Tubes. 
          Quality materials delivered directly from our Devanahalli facility.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link href="/quote" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-xl font-bold text-lg transition shadow-2xl transform hover:scale-105">
            Request a Free Quote
          </Link>
          <Link href="/services" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-xl font-bold text-lg transition">
            Our Products
          </Link>
        </div>
      </div>
    </section>
  );
}
