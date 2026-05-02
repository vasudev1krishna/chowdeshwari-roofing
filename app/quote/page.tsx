"use client";
import React from 'react';

export default function QuotePage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you! Your request has been sent to our factory team.");
  };

  return (
    <main className="min-h-screen relative flex items-center justify-center py-20 px-6">
      {/* BACKGROUND IMAGE - Fixed with a direct link and dark overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="../bgroof.avif" 
          alt="Roofing background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70"></div> 
      </div>

      {/* GLASSMORPHISM FORM CONTAINER */}
      <div className="relative z-10 max-w-2xl w-full 
                bg-white/10 backdrop-blur-xl 
                shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] 
                rounded-3xl border border-white/20 
                overflow-hidden">
        
        <div className="bg-blue-600/40 backdrop-blur-md p-8 text-white text-center border-b border-white/10">
          <h1 className="text-3xl font-bold tracking-tight">Request a Quotation</h1>
          <p className="mt-2 text-blue-100 font-medium">Factory-Direct Roofing Solutions</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label className="text-sm font-bold text-white mb-1 ml-1">Full Name</label>
              <input 
                type="text" 
                required 
                className="p-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder:text-white/60 outline-none focus:bg-white/30 transition" 
                placeholder="John Doe" 
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-bold text-white mb-1 ml-1">Phone Number</label>
              <input 
                type="tel" 
                required 
                className="p-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder:text-white/60 outline-none focus:bg-white/30 transition" 
                placeholder="+1 555-0000" 
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-bold text-white mb-1 ml-1">Service Required</label>
            <select className="p-3 bg-white/20 border border-white/30 rounded-xl text-white outline-none focus:bg-white/30 transition cursor-pointer [&>option]:text-slate-900">
              <option>New Roof Installation</option>
              <option>Roof Repair</option>
              <option>Factory Material Supply</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-bold text-white mb-1 ml-1">Project Address</label>
            <input 
              type="text" 
              required 
              className="p-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder:text-white/60 outline-none focus:bg-white/30 transition" 
              placeholder="123 Factory Way, City" 
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-bold text-white mb-1 ml-1">Additional Details</label>
            <textarea 
              rows={3} 
              className="p-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder:text-white/60 outline-none focus:bg-white/30 transition" 
              placeholder="Tell us about your project..."
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg transition transform active:scale-95">
            Send Quote Request
          </button>
        </form>
      </div>
    </main>
  );
}
