export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-12 text-center px-6">
      <h3 className="text-2xl font-bold mb-4">Welcome to IC Health Services</h3>
      <p className="max-w-4xl mx-auto text-gray-700 leading-relaxed">
        IC Health Services is your premier mental health provider in Owings Mills, MD.
        We offer compassionate, culturally competent, and individualized care
        to promote total well-being and mental health.
      </p>

      <div className="mt-8">
        <ul className="list-disc list-inside text-left max-w-md mx-auto text-gray-600">
          <li>Medication Management</li>
          <li>Psychiatric Evaluations</li>
          <li>ADHD Evaluations</li>
          <li>PTSD Therapy</li>
          <li>Bipolar Disorder Therapy</li>
        </ul>
      </div>
    </section>
  );
}
