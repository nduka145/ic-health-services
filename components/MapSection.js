export default function MapSection() {
  return (
    <section id="contact" className="py-12">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
        <p>110 Painters Mill Rd Suite 105, Owings Mills, MD 21117</p>
      </div>
      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.964518240822!2d-76.78547922411433!3d39.416262072144196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81beea12c9de5%3A0x4abf5b69dd4b86d3!2s110%20Painters%20Mill%20Rd%20%23105%2C%20Owings%20Mills%2C%20MD%2021117!5e0!3m2!1sen!2sus!4v1719879876543!5m2!1sen!2sus"
          width="80%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
