import React, { useEffect } from 'react'
import "../../styles/first.css";
import sky from "../../images/first/sky.png"
import centercity from "../../images/first/center-city.png"
import hillleft1 from "../../images/first/hill-left-1.png"
import hillright1 from "../../images/first/hill-right-1.png"
import leftcity from "../../images/first/left-city.png"
import moon from "../../images/first/moon.png"
import rail from "../../images/first/rail.png"
import rightcity from "../../images/first/right-city.png"
import train from "../../images/first/train.png"
import water from "../../images/first/water.png"


export default function First() {
    useEffect(() => {
        const moon = document.getElementById("moon");
        const text = document.getElementById("text");
        const train = document.getElementById("train");

        const handleScroll = () => {
            let value = window.scrollY;
            /* if (moon) {
                moon.style.top = value * 0.9 + "px";
            } */
            if (text) {
                text.style.top = 80 + value * -0.2 + "%";
            }
            if (train) {
                train.style.left = value * 1.5 + "px";
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return ( 
        <div className='body-first'>
            <section className='section-first'>
                <img src={sky} alt="" className='sky img-first' id='sky' />
                <img src={moon} alt="" className='moon img-first' id='moon' />
                <img src={water} alt="" className='water img-first' id='water' />
                <img src={centercity} alt="" className='centercity img-first' id='centercity' />
                <img src={rightcity} alt="" className='rightcity img-first' id='rightcity' />
                <img src={leftcity} alt="" className='leftcity img-first' id='leftcity' />
                <img src={train} alt="" className='train img-first' id='train' />
                <img src={rail} alt="" className='rail img-first' id='rail' />

                <h1 className='text-first' id='text'> Bienvenido </h1>
                <img src={hillleft1} alt="" className='rail img-first' id='hillleft1' />
                <img src={hillright1} alt="" className='rail img-first' id='hillright1' />

                <a href="#about" className='btn-ready'> Explorar</a>

            </section>
        </div>
    )
}
