import React from 'react'
import "../../styles/end.css"
import sun from "../../images/planets/sun.png"
/* import earth from "../../images/planets/earth.png"
import jupiter from "../../images/planets/jupiter.png"
import mars from "../../images/planets/mars.png"
import mercury from "../../images/planets/mercury.png"
import moon from "../../images/planets/moon.png"
import neptune from "../../images/planets/neptune.png"
import pluto from "../../images/planets/pluto.png"
import saturn from "../../images/planets/saturn.png"
import uranus from "../../images/planets/uranus.png"
import venus from "../../images/planets/venus.png"
 */
export default function End() {
    return (
        <div>
            <div className="container-sistem-solar" id='home'>
                <div className="container">
                    <div className="suns">
                        <img src={sun} alt="sun" />
                    </div>
                    <div className="mercury"></div>
                    <div className="venus"></div>
                    <div className="earth">
                        <div className="moons"></div>
                    </div>
                    <div className="mars"></div>
                    <div className="jupiter"></div>
                    <div className="saturn"></div>
                    <div className="uranus"></div>
                    <div className="neptune"></div>
                    <div className="pluto">
                    </div>
                </div>
            </div>
        </div>
    )
}
