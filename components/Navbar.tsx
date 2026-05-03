import Link from 'next/link';

export default function Navbar() {
  return (
 // Inside components/Navbar.tsx
<nav className="bg-white border-b border-gray-100 text-slate-900 p-4 sticky top-0 z-50 shadow-sm">
  <div className="container mx-auto flex justify-between items-center">
    <Link href="/" className="text-xl font-bold tracking-tight text-blue-600">
      CHOWDESHWARI <span className="text-slate-500 font-light">ROOFING</span>
    </Link>
    <div className="hidden md:flex space-x-8 font-medium">
      <Link href="/" className="hover:text-blue-600 transition">Home</Link>
      <Link href="/services" className="hover:text-blue-600 transition">Products</Link>
      <Link href="/quote" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
        Get Quote
      </Link>
    </div>
  </div>
</nav>

  );
}
