import React, { useState } from 'react'
import Modal from 'react-modal';
import "../../styles/briefcase.css";
import { FaFolder } from 'react-icons/fa';
import dataBriefcase from '../../data/data-briefcase';
import Footer2 from '../../components/footer/Footer2';

interface Subfolder {
    id: number;
    title: string;
    carpet: string;
    image?: string;
    subcarpeta: string;
    especialidad?: string;
    fechaStart?: string;
    fechaEnd?: string;
    parraf?: string;
    logros?: string;
    tecnology?: string[];
}

export default function Briefcase2() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentFolder, setCurrentFolder] = useState('');
    const [currentSubfolder, setCurrentSubfolder] = useState<Subfolder | null>(null);

    const openModal = (folder: string) => {
        setCurrentFolder(folder);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentSubfolder(null);
    };

    const handleSubfolderClick = (subfolder: Subfolder) => {
        setCurrentSubfolder(subfolder);
    };

    const filteredItems = dataBriefcase.items.filter(item => item.carpet === currentFolder);
    return (
        <div>
            <div className="container-briefcase">
                <div className="file-explorer">
                    <div className="folders">
                        <div className="folder" onClick={() => openModal('projects')}>
                            <FaFolder className="folder-icon" />
                            <span>Proyectos</span>
                        </div>
                        <div className="folder" onClick={() => openModal('utils')}>
                            <FaFolder className="folder-icon" />
                            <span>Utilidades</span>
                        </div>
                    </div>
                    <Modal
                        isOpen={isModalOpen}
                        onRequestClose={closeModal}
                        contentLabel="Folder Modal"
                        className="modal"
                        overlayClassName="overlay"
                    >
                        <div className="modal-header">
                            <h2>{currentFolder}</h2>
                            <button onClick={closeModal} className="close-button">X</button>
                        </div>
                        <div className="modal-content">
                            <div className="left-column">
                                <ul className='tecnology-container-brief'>
                                    {filteredItems.map(item => (
                                        <li key={item.id} onClick={() => handleSubfolderClick(item)} className="tecnology-button-brief">
                                            <div className="folder" onClick={() => openModal('projects')}>
                                                <div className="folder-icon-container" style={{ width: '50px', height: '50px' }}>
                                                    <FaFolder className="folder-icon" />
                                                    <img src={item.image} alt={item.subcarpeta} className="folder-image" />
                                                </div>
                                                <span className="folder-text">{item.subcarpeta}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="right-column">
                                {currentSubfolder && (
                                    <div className='content-rigth-colum'>
                                        <h2 className='title-h2'>{currentFolder}</h2>
                                        <strong className='title-strong'>{currentSubfolder.title}</strong>
                                        <img className='img-content-briefcase' src={currentSubfolder.image} alt={currentSubfolder.subcarpeta} />
                                        <p>{currentSubfolder.parraf}</p>
                                        <p>{currentSubfolder.logros}</p>
                                        <div className='span-tecnology'>
                                            <h3>Tecnologías:</h3>
                                            <ul>
                                                {currentSubfolder.tecnology?.map((tech, index) => (
                                                    <span key={index} className="tecnology-button">{tech}</span>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Modal>
                </div>
                
            </div>
            <Footer2/>
        </div>
    )
}
