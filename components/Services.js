export default function Services() {
  const services = [
    { name: "Mental Health Services", img: "/service1.jpg" },
    { name: "Medication Management", img: "/service2.jpg" },
    { name: "Psychiatric Evaluation", img: "/service3.jpg" },
    { name: "Telepsych", img: "/service4.jpg" },
  ];

  return (
    <section id="services" className="max-w-6xl mx-auto py-16 text-center">
      <h2 className="text-3xl font-bold mb-10">Our Services</h2>
      <div className="flex justify-center gap-8 flex-wrap">
        {services.map((s) => (
          <div key={s.name} className="flex flex-col items-center text-center">
            <h3 className="font-bold mb-3">{s.name}</h3>
            <div className="w-[220px] h-[140px] overflow-hidden rounded-lg shadow-md">
              <img src={s.img} alt={s.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
