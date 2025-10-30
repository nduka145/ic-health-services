import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>IC Health Services</title>
        <meta name="description" content="Mental and Behavioral Health Services in Owings Mills, MD" />
      </Head>

      <Navbar />
      <Hero />
      <Services />
      <About />
      <MapSection />
      <Footer />
    </>
  );
}
