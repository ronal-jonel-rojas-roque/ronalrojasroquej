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
  logros: string;
  tecnology: string[];
}
const formatDate = (dateString: string) => {
  if (dateString.toLowerCase() === 'actualidad') {
    return dateString;
  }
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
  const date = new Date(dateString.split('-').reverse().join('-'));
  return date.toLocaleDateString('en-US', options);
};

export default function Experience() {
  const [selectedWork, setSelectedWork] = useState<WorkExperience>(dataExperience.items[0]);

  const handleClick = (work: WorkExperience) => {
    setSelectedWork(work);
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
                  <AiOutlineGlobal className='icon-global'/>
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
                  <div className="span-detalle">
                    <BsFillArrowThroughHeartFill className='icon-detalle' />
                    <span className='logros'>{selectedWork.logros}</span>
                  </div>
                  <div className="span-tecnology tecnology-container">
                    {selectedWork.tecnology.map((tech, index) => (
                      <span key={index} className="tecnology-button">
                        {tech}
                      </span >
                    ))}
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