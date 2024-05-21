import React, { useEffect } from 'react'
import "../../styles/about.css"
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from 'react-icons/fa';
import { FaLinkedinIn } from "react-icons/fa6";
import Typed from 'typed.js';
import img1 from "../../images/10.png"

export default function About() {

  useEffect(() => {
    // Configuración de Typed.js
    const options = {
        strings: ['Ronal Jonel', 'Rojas Roque'],
        typeSpeed: 75,
        backSpeed: 75,
        backDelay: 1500,
        cursorChar: '|',
        starDelay: 300,
        loop: true,
        showCursor: true,
        contentType: 'html',
    };

    // Inicializar Typed.js
    const typed = new Typed('.typed', options);

    // Detener la animación al desmontar el componente
    return () => {
        typed.destroy();
    };
}, []);
  return (
    <div>
      <section className='about'>
        <div className="container-about">
          <h2 className='title-about'>1. ¿QUIEN SOY?</h2>
          <div className='line-spacing'></div>
          <div className="content-date-about">
            <div className="content-img">
              <img src={img1} alt="" className='perfil-image' />
              <div className="date-contact">
                <a href='#' className="btn-cv">CV</a>
                <div className="list-contact-icons">
                  <a href="https://wa.me/51989505663" target="_blank" rel="noreferrer" className="icono-wsp">
                    <FaWhatsapp />
                  </a>
                  <a href="https://www.facebook.com/RonalRojasRoqueJ" target="_blank" rel="noopener noreferrer" className='icono-fb'>
                    <FaLinkedinIn />
                  </a>
                  <a href="https://github.com/ronal-jonel-" target="_blank" rel="noreferrer" className="icono-github">
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
            <div className="title-about-m">
              <p className='p-about-itle'>
                Mi nombre es <span className='typed'></span>
              </p>
              <p className='p-about'>
                Soy un desarrollador Full Stack con experiencia en el desarrollo de aplicaciones web.
                <br />
                Tengo amplios conocimientos en el desarrollo de aplicaciones con el uso de JavaScript, TypeScript, .Net Core 6, SQL Server, MYSQL, Mongo DB y Postgresql,
                así como en el uso de tecnologías como frameworks y librerías como React, Next.Js,Bootstrap, Node.Js, NestJS, Git Hub y Postman.
                <br />
                +3 años en desarrollo de soluciones con React Js y Node Js.
                <br />
                Ademas soy un apasionado por la resolución de problemas y el desarrollo de soluciones eficientes.
              </p>
            </div>
          </div>
        </div>

      </section>


    </div>
  )
}
