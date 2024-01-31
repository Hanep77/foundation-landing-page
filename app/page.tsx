import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import HomeSection from "./sections/HomeSection";

export default function Home() {
  return (
    <>
      <main className="bg-gradient-to-r from-slate-100 to-gray-200">
        <section id="home">
          <HomeSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="contact" className="relative flex justify-center pt-40 md:mt-0">
          <ContactSection />
        </section>
      </main>
    </>
  );
}
