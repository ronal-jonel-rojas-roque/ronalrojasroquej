import React, { useState } from 'react'
import "../../styles/contacto.css"
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { FaSquareFacebook } from "react-icons/fa6";
import { SiFacebook } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import jar1 from "../../images/contacto/jar1.png"
import Modal from 'react-modal';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (folder: string) => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  

  return (
    <div>
      <div className="Contact-Home" id='contact'>
        <div className="content-contact">
          <h2 className='title-contact'>4. Mis redes</h2>
          <div className="content-border-reactor-option">
            <div className="img-container img-top-left">
              <a href="https://github.com/ronal-jonel-rojas-roque" target="_blank" rel="noopener noreferrer">
                <img src={jar1} alt="imagen1" className='img' />
                <FaGithub className='social-icon' />
              </a>
            </div>
            <div className="img-container img-top-right">
              <a href="https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276 https://www.linkedin.com/in/ronal-rojas-a39772276" target="_blank" rel="noopener noreferrer">
                <img src={jar1} alt="imagen1" className='img' />
                <AiFillLinkedin className='social-icon' />
              </a>
            </div>
            <div className="reactor">
              <div className="triangle"></div>
              <div className="circle-1"><span></span><span></span><span></span><span></span>
              </div>
              <div className="circle-2"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
              <div className="circle-3"></div>
              <div className="circle-4"><span></span><span></span><span></span></div>
              <div className="circle-5" onClick={() => openModal('')}><span></span><span></span><span></span></div>
              <div className="circle-6" onClick={() => openModal('')}></div>
              <div className="circle-7" onClick={() => openModal('')}></div>
              <div className="circle-8" onClick={() => openModal('')}><span></span><span></span><span></span></div>
            </div>
            <div className="img-container img-bottom-left">
              <a href="https://www.facebook.com/RonalRojasRoqueJ" target="_blank" rel="noopener noreferrer">
                <img src={jar1} alt="imagen1" className='img' />
                <FaSquareFacebook className='social-icon' />
              </a>
            </div>
            <div className="img-container img-bottom-right">
              <a href="https://www.instagram.com/ronalrojasroquej/" target="_blank" rel="noopener noreferrer">
                <img src={jar1} alt="imagen1" className='img' />
                <RiInstagramFill className='social-icon' />
              </a>
            </div>
          </div>
        </div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Folder Modal"
          className="modal-contact"
          overlayClassName="overlay"
        >
          <div className="modal-header-contact">
            <h2>Contactame</h2>
            <IoClose onClick={closeModal} className="close-button-contact" />
          </div>
          <div className="modal-content-contact">
            <div className="left-column-contact">
              <FaWhatsapp className='social-icon-modal whatssap' />
              <a href="https://wa.me/51989505663" target="_blank" rel="noopener noreferrer">
                <span className='text-redes'>+51 989505663</span>
              </a>
            </div>
            <div className="left-column-contact">
              <FaGithub className='social-icon-modal' />
              <a href="https://github.com/ronal-jonel-rojas-roque" target="_blank" rel="noopener noreferrer">
                <span className='text-redes'>/ronalrojasroquej</span>
              </a>
            </div>
            <div className="left-column-contact">
              <AiFillLinkedin className='social-icon-modal linkedin' />
              <a href="https://www.linkedin.com/in/ronal-rojas-a39772276" target="_blank" rel="noopener noreferrer">
                <span className='text-redes'>/ronalrojas</span>
              </a>
            </div>
            <div className="left-column-contact">
              <RiInstagramFill className='social-icon-modal instagram' />
              <a href="https://www.instagram.com/ronalrojasroquej/" target="_blank" rel="noopener noreferrer">
                <span className='text-redes'>/ronalrojasr</span>
              </a>
            </div>
            <div className="left-column-contact">
              <SiFacebook className='social-icon-modal face' />
              <a href="https://www.facebook.com/RonalRojasRoqueJ" target="_blank" rel="noopener noreferrer">
                <span className='text-redes'>/ronalrojasroque</span>
              </a>
            </div>
          </div>
        </Modal>
      </div>

    </div>
  )
}
