import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12 border-t border-white/10">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4 uppercase tracking-tight">
            Chowdeshwari <span className="text-blue-500">Roofing Solutions</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Authorized distributor of JSW Colour Coated Sheets and MS Square Tubes. 
            Providing high-quality industrial and residential roofing materials in Devanahalli.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link href="/services" className="hover:text-blue-400 transition">Products & Services</Link></li>
            <li><Link href="/quote" className="hover:text-blue-400 transition">Get Free Quotation</Link></li>
          </ul>
        </div>

        {/* Contact Info (Optimized for Local SEO) */}
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Visit Our Store</h4>
          <address className="not-italic text-sm space-y-4">
            <p className="flex items-start">
              <span className="mr-3 text-blue-500 text-lg">📍</span>
              <span>Ward No 9, Near Bimal Showroom, BB Road, Devanahalli, Bangalore - 562110, Karnataka</span>
            </p>
            <p className="flex items-center">
              <span className="mr-3 text-blue-500 text-lg">📞</span>
              <a href="tel:7947414492" className="hover:text-blue-400 transition text-lg font-semibold">7947414492</a>
            </p>
          </address>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center text-[10px] uppercase tracking-widest opacity-50">
        <p>© {new Date().getFullYear()} Chowdeshwari Roofing Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}
