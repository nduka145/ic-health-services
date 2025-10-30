export default function Services() {
  const services = [
    { name: "Mental Health Services", img: "/service1.jpg" },
    { name: "Medication Management", img: "/service2.jpg" },
    { name: "Psychiatric Evaluation", img: "/service3.jpg" },
    { name: "Telepsych", img: "/service4.jpg" },
  ];

  return (
    <section id="services" className="max-w-6xl mx-auto py-16 text-center px-4">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">Our Services</h2>

      <div className="flex justify-center items-start gap-14 flex-wrap">
        {services.map((s) => (
          <div
            key={s.name}
            className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
          >
            <h3 className="font-extrabold mb-3 text-lg text-gray-800">
              {s.name}
            </h3>
            <div className="w-[220px] h-[140px] overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow">
              <img
                src={s.img}
                alt={s.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
