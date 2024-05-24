import React, { useState } from 'react'
import { BsFillArrowThroughHeartFill } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";

import { MdLinearScale } from "react-icons/md";
import dataExperience from '../../data/data-experience';
import "../../styles/experience.css"

interface WorkExperience {
  id: number;
  title: string;
  image: string;
  subtitle: string;
  especialidad: string;
  fechaStart: string;
  fechaEnd: string;
  parraf: string;
  logros?: string;
  logros2?: string;
  logros3?: string;
  logros4?: string;
  logros5?: string;
  tecnology: string[];
  link?: string;
}
const formatDate = (dateString: string) => {
  if (dateString.toLowerCase() === 'actualidad') {
    return dateString;
  }
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
  const date = new Date(dateString.split('-').reverse().join('-'));
  return date.toLocaleDateString('es-ES', options);
};

export default function Experience() {
  const [selectedWork, setSelectedWork] = useState<WorkExperience>(dataExperience.items[0]);

  const handleClick = (work: WorkExperience) => {
    setSelectedWork(work);
  };

  const hasLogros = (work: WorkExperience) => {
    return work.logros || work.logros2 || work.logros3 || work.logros4 || work.logros5;
  };

  return (
    <div className="no-select">
      <div className="container-experience">
        <h1 className='title-experience'>2. Experiencia Laboral</h1>
        <div className="experience-content">
          <div className="left-experience">
            {dataExperience.items.map((work) => (
              <div
                key={work.id}
                className={`detail-left ${selectedWork.id === work.id ? 'active' : ''}`}
                onClick={() => handleClick(work)}
              >
                <img src={work.image} alt={work.title} className='img-det' />
                <span className='title-work'>{work.title}</span>
              </div>
            ))}
          </div>
          <div className="right-experience">
            {selectedWork && (
              <div className="detail-right">
                <div className="title-work-rigth">
                  <span className='title'>{selectedWork.subtitle}</span>
                  <span className='especialidad'>{selectedWork.especialidad}</span>
                  {selectedWork.link && (
                    <a href={selectedWork.link} target="_blank" rel="noopener noreferrer">
                      <AiOutlineGlobal className='icon-global' />
                    </a>
                  )}

                </div>
                <div className="div-fec">
                  <span className='fecha'>{formatDate(selectedWork.fechaStart)}</span>
                  <MdLinearScale className='line-fech' />
                  <span className='fecha'>{formatDate(selectedWork.fechaEnd)}</span>
                </div>
                <div className="detalle-trabajo">
                  <div className="span-detalle">
                    <BsFillArrowThroughHeartFill className='icon-detalle' />
                    <span className='parraf1'>{selectedWork.parraf}</span>
                  </div>
                  {hasLogros(selectedWork) && (
                    <div className="span-resposability">
                      <h3>Responsabilidades destacadas:</h3>
                      {selectedWork.logros && (
                        <div className="resposability">
                          <BsFillArrowThroughHeartFill className='icon-detalle' />
                          <span className='logros'>{selectedWork.logros}</span>
                        </div>
                      )}
                      {selectedWork.logros2 && (
                        <div className="resposability">
                          <BsFillArrowThroughHeartFill className='icon-detalle' />
                          <span className='logros'>{selectedWork.logros2}</span>
                        </div>
                      )}
                      {selectedWork.logros3 && (
                        <div className="resposability">
                          <BsFillArrowThroughHeartFill className='icon-detalle' />
                          <span className='logros'>{selectedWork.logros3}</span>
                        </div>
                      )}
                      {selectedWork.logros4 && (
                        <div className="resposability">
                          <BsFillArrowThroughHeartFill className='icon-detalle' />
                          <span className='logros'>{selectedWork.logros4}</span>
                        </div>
                      )}
                      {selectedWork.logros5 && (
                        <div className="resposability">
                          <BsFillArrowThroughHeartFill className='icon-detalle' />
                          <span className='logros'>{selectedWork.logros5}</span>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="tecnology-container">
                    <h3> Tecnologias usadas:</h3>
                    <div className="span-tecnology">
                      {selectedWork.tecnology.map((tech, index) => (
                        <span key={index} className="tecnology-button">
                          {tech}
                        </span >
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}