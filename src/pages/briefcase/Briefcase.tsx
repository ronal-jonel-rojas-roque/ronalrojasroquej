import React, { useState } from 'react';
import "../../styles/briefcase.css";
import dataBriefcase from '../../data/data-briefcase';
import datatecnology from '../../data/data-tecnology';
import { Link } from 'react-router-dom';

interface TechImageMap {
    [key: string]: string;
}
const techImageMap: TechImageMap = datatecnology.items.reduce((map, item) => {
    map[item.tecnology.toLowerCase()] = item.imagetec;
    return map;
}, {} as TechImageMap);

export default function Briefcase() {

    const projects = dataBriefcase.items.filter(item => item.carpet === 'projects');


    return (
        <div className="Briefcase">
            <h2>3. PROYECTOS</h2>
            <div className="briefcase-container">
                {projects.map(project => (
                    <div key={project.id} className="briefcase-item">
                        <div className="info-briefcase">
                            <img src={project.image} alt={project.title} className='img-title' />
                            <div className="data-name">
                                <h3 className="title-briefcase">{project.title}</h3>
                            </div>
                            <div className="span-tecnolys">
                                <span>Tecnologias</span>
                                <div className="tecnolgys">
                                    {project.tecnology?.map((tech, index) => (
                                        <img
                                            key={index}
                                            src={techImageMap[tech.toLowerCase()]}
                                            alt={tech}
                                            className="tecnology-image"
                                        />
                                    ))}
                                </div>

                            </div>
                            <a href="#" className="Btn-detalles">Ver Detalles</a>
                        </div>
                    </div>
                ))}

            </div>
            <Link to="/briefcase" className='Btn-detalles brief-detalle'>Quieres ver mas?</Link>

        </div>
    )
}
