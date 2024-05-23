import React from 'react'
import { useInView } from 'react-intersection-observer';

import Navbar from '../../components/navbar/Navbar'
import "../../styles/home.css"
import Briefcase from '../briefcase/Briefcase'
import Contact from '../contact/Contact'
import About from '../about/About'
import Experience from '../experience/Experience'
import First from '../first/First'
import Blog from '../blog/Blog'
import End from '../end/End';

export default function Home() {

  const [homeRef, homeInView] = useInView({ threshold: 0.5 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.5 });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.5 });
  const [briefcaseRef, briefcaseInView] = useInView({ threshold: 0.5 });
  const [contactRef, contactInView] = useInView({ threshold: 0.5 });
  const [blogRef, blogInView] = useInView({ threshold: 0.5 });
  const [endRef, endInView] = useInView({ threshold: 0.5 });

  React.useEffect(() => {
    if (homeInView) {
      window.history.replaceState(null, '', '#home');
    } else if (aboutInView) {
      window.history.replaceState(null, '', '#about');
    } else if (experienceInView) {
      window.history.replaceState(null, '', '#experience');
    } else if (briefcaseInView) {
      window.history.replaceState(null, '', '#briefcase');
    } else if (contactInView) {
      window.history.replaceState(null, '', '#contact');
    } else if (blogInView) {
      window.history.replaceState(null, '', '#blog');
    } else if (blogInView) {
      window.history.replaceState(null, '', '#end');
    }
  }, [homeInView, aboutInView, experienceInView, briefcaseInView, contactInView, blogInView, endInView]);

  return (
    <div>
      <div className='home'>
        <div>
          <Navbar />
        </div>
        <section id='home' ref={homeRef}>
          <First />
        </section>

        <section id='about' ref={aboutRef}>
          <About />
        </section>

        <section id='experience' ref={experienceRef}>
          <Experience />
        </section>

        <section id='briefcase' ref={briefcaseRef}>
          <Briefcase />
        </section>

        <section id='contact' ref={contactRef}>
          <Contact />
        </section>

        <section id='blog' ref={blogRef}>
          <Blog />
        </section>
        <section className='section-enlace'>
          <div className="div">
            <span>
              Gracias por visitar mi portafolio
            </span>
          </div>
        </section>
        <section id='end' ref={endRef}>
          <End />
        </section>
      </div>
    </div>
  )
}
