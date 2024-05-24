import React from 'react'
import dataBriefcase from '../../data/data-briefcase';
import DetalleCarrusel from '../carrusel/DetalleCarrusel';
/* import Maps from '../maps/Maps'; */
import "./modal.css";
import datatecnology from '../../data/data-tecnology';

interface TechImageMap {
    [key: string]: string;
}
const techImageMap: TechImageMap = datatecnology.items.reduce((map, item) => {
    map[item.tecnology.toLowerCase()] = item.imagetec;
    return map;
}, {} as TechImageMap);

export default function ModalDetalle() {
    const selectedItem = dataBriefcase.items[0];
    const images = [selectedItem.image];
    return (
        <div>
            <div className="modal-content">
                <div className="demo-carousel">
                    <DetalleCarrusel images={images} />
                </div>
                <div className="details-data-modal">
                    <h1>{selectedItem.title}</h1>
                    <p>{selectedItem.parraf}</p>
                    {selectedItem.paffaf2 && <p>{selectedItem.paffaf2}</p>}
                    <div className="technologies">
                        <h3>Tecnologias usadas:</h3>
                        <div className="tecnologi-wrap">
                            {selectedItem.tecnology.map((tech, index) => (

                                <div key={index} className="technology-item">
                                    <img
                                        key={index}
                                        src={techImageMap[tech.toLowerCase()]}
                                        alt={tech}
                                        className="tecnology-image"
                                    />
                                    <span>
                                        {tech}
                                    </span>

                                </div>
                            ))}
                        </div>

                    </div>
                </div>
                {/* <div className="map-container">
                    <Maps />
                </div> */}
            </div>
        </div >
    )
}
