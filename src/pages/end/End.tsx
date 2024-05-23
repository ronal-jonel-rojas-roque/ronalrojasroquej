import React from 'react'
import "../../styles/end.css"
import sun from "../../images/planets/sun.png"
import EndMotiv from './component/EndMotiv';

export default function End() {
    return (
        <div>
            <div className="content-end">
                
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
                    <EndMotiv />
                </div>

            </div>
        </div>
    )
}
