import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Replace 'RoofMaster Factory' with your actual name */}
        <Link href="/" className="text-2xl font-black tracking-tight text-blue-400">
          CHOWDESHWARI ROOFING SOLUTIONS<span className="text-white text-lg font-light"> FACTORY</span>
        </Link>
        
        <div className="hidden md:flex space-x-8 font-medium">
          <Link href="/" className="hover:text-blue-400 transition">Home</Link>
          <Link href="/services" className="hover:text-blue-400 transition">Services</Link>
          <Link href="/quote" className="bg-blue-600 px-5 py-2 rounded-full hover:bg-blue-500 transition shadow-md">
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
