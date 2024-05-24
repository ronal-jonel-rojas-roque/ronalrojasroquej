import React, { useEffect, useState } from 'react';
import "../../styles/briefcase.css";
import dataBriefcase from '../../data/data-briefcase';
import datatecnology from '../../data/data-tecnology';
import { Link } from 'react-router-dom';
import ModalDetalle from '../../components/modal/ModalDetalle';
import Modal from 'react-modal';
import { IoClose } from 'react-icons/io5';
import Typed from 'typed.js';

interface TechImageMap {
    [key: string]: string;
}
const techImageMap: TechImageMap = datatecnology.items.reduce((map, item) => {
    map[item.tecnology.toLowerCase()] = item.imagetec;
    return map;
}, {} as TechImageMap);



export default function Briefcase() {
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const projects = dataBriefcase.items.filter(item => item.carpet === 'projects');

    const openModal = (project: any) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setIsModalOpen(false);
    };

    useEffect(() => {
        // Configuración de Typed.js
        const options = {
            strings: ['Este apartado aun no esta completo ',  'Por el momento solo disfruta del diseño'],
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
        const typed = new Typed('.typede', options);

        // Detener la animación al desmontar el componente
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="Briefcase">
            <div className="head-brief">
                <h2>3. PROYECTOS</h2>
            <p className='p-Briefcase-title'>
                Disculpen las molestias: <span className='typede'></span>
              </p>
            </div>
            
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
                            <button className="Btn-detalles" onClick={() => openModal(project)}>
                                Ver Detalles
                            </button>
                        </div>
                    </div>
                ))}

            </div>
            <Link to="/briefcase" className='Btn-detalles brief-detalle'>Quieres ver mas?</Link>
            {selectedProject &&
                <Modal isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="Folder Modal"
                    className="modal-detalle"
                    overlayClassName="overlay" >
                    <div className="modal-header">
                        <h2>Detalles del Proyecto</h2>
                        <IoClose onClick={closeModal} className="close-button-contact">X</IoClose>
                    </div>
                    <div className="modal-content-detalle">
                        <ModalDetalle />
                    </div>
                </Modal>
            }

        </div>
    )
}
