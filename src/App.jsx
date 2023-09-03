import {
  Aboutme,
  Contact,
  Footer,
  Hero,
  NavTbar,
  Portfolio,
  Skills,
  ExperienceTimeline,
} from "./sections";
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  return (
    <main className="relative">
      <ScrollToTop smooth />
      <NavTbar />
      <section className="xl:padding-l wide:padding-r padding-b padding">
        <Hero id="hero" />
      </section>
      <section className="bg-neutral-50 padding">
        <Skills id="skills" />
      </section>
      <section className="padding">
        <Aboutme id="aboutme" />
      </section>
      <section className="bg-neutral-50 padding">
        <ExperienceTimeline id="experience" />
      </section>
      <section className=" padding">
        <Portfolio id="project" />
      </section>
      <section className=" bg-neutral-50 padding-x py-10">
        <Contact id="contact" />
      </section>
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
