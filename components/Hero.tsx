import Link from 'next/link';

export default function Hero() {
  return (
    // Inside components/Hero.tsx
<section className="relative bg-white py-20 px-6 overflow-hidden">
  <div className="absolute inset-0 z-0"> <img src="/bgroof.avif" alt="Chowdeshwari Roofing Devanahalli" className="w-full h-full object-cover" />
  <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
    <div className="relative z-10 text-left">
      <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-tight">
        Trusted <span className="text-blue-600">Roofing</span> Solutions
      </h1>
      <p className="text-lg text-slate-600 mb-10 max-w-lg">
        Authorized JSW Colour Coated Sheets & MS Square Tubes. Quality materials directly from Devanahalli's premier factory.
      </p>
      <div className="flex gap-4">
        <Link href="/quote" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition">
          Get Free Estimate
        </Link>
      </div>
    </div>
    <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
      <img src="/bgroof.avif" alt="Roofing" className="w-full h-full object-cover" />
    </div>
  </div>
</section>

  );
}
