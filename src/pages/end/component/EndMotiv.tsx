import React, { useEffect, useState } from 'react'
import dataMotivational from '../../../data/data-motivational'
import "./endmot.css"

export default function EndMotiv() {
    const [motivationalIndex, setMotivationalIndex] = useState(0);
    const [animationDirection, setAnimationDirection] = useState(1);

    useEffect(() => {
        const generateParticles = () => {
            const particlesContainer = document.querySelector('.particles-container');
            if (window.scrollX >= document.documentElement.scrollWidth - window.innerWidth) {
                setAnimationDirection(-1);
                const randomIndex = Math.floor(Math.random() * dataMotivational.items.length);
                setMotivationalIndex(randomIndex);
            } else if (window.scrollX <= 0) {
                setAnimationDirection(1);
                const randomIndex = Math.floor(Math.random() * dataMotivational.items.length);
                setMotivationalIndex(randomIndex);
            }   
            if (particlesContainer) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particlesContainer.appendChild(particle);
                const randomX = Math.random() * window.innerWidth;
                const randomY = Math.random() * window.innerHeight;
                particle.style.left = `${randomX}px`;
                particle.style.top = `${randomY}px`;
                setTimeout(() => {
                    particle.remove();
                }, 1000);
            }
        };

        const intervalId = setInterval(generateParticles, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <div className="end-motiv-container">
                <div className="frases-motivacionales">
                    <div className="frase-content">
                        <span className='frase'>{dataMotivational.items[motivationalIndex].frase}</span>
                    </div>
                </div>
            </div>
            <div className="particles-container"></div>
        </div>
    )
}
