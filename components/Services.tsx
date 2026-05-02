export default function Services() {
  const serviceList = [
    {
      title: "Residential Roofing",
      description: "Premium shingles and metal roofing designed for long-lasting home protection.",
      icon: "🏠"
    },
    {
      title: "Commercial Solutions",
      description: "Expert installation of flat roofs, TPO, and industrial-grade factory materials.",
      icon: "🏢"
    },
    {
      title: "Roof Maintenance",
      description: "Regular inspections and factory-certified repairs to extend your roof's lifespan.",
      icon: "🛠️"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Roofing Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine factory-direct materials with expert craftsmanship to provide the best solutions for your property.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {serviceList.map((service, index) => (
            <div key={index} className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow bg-gray-50">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
