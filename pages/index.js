import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>IC Health Services | Mental & Behavioral Care in Owings Mills, MD</title>
        <meta
          name="description"
          content="IC Health Services provides mental and behavioral health care in Owings Mills, MD. Compassionate therapy and evaluation services to support your well-being."
        />
        <meta name="keywords" content="mental health, therapy, psychiatry, Owings Mills MD, IC Health Services" />
        <meta property="og:title" content="IC Health Services" />
        <meta property="og:description" content="Professional Mental and Behavioral Health Services in Owings Mills, MD" />
        <meta property="og:image" content="/hero.jpg" />
      </Head>

      <Navbar />
      <Hero />
      <Services />
      <About />
      <Footer />
    </>
  );
}
