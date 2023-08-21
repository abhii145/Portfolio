import {
  Aboutme,
  Contact,
  Footer,
  Hero,
  NavBar,
  Portfolio,
  Skills,
} from "./sections";
import ScrollToTop from "react-scroll-to-top";


const App = () => {
  return (
    <main className="relative">
      <ScrollToTop smooth />
      <NavBar id="home"/>
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
        <Portfolio id="project" />
      </section>
      <section className="padding-x py-10">
        <Contact id="contact" />
      </section>
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
