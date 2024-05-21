import React, { useEffect, useState } from 'react'
import "./footer.css"
import { FaWindows } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { TbDeviceDesktopHeart } from "react-icons/tb";
import { HiOutlineSpeakerWave } from "react-icons/hi2";

import { Link } from 'react-router-dom';

export default function Footer2() {

    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
          setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
      }, []);

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    };

    return (
        <div>
            <div className="footer">
                <div className="footer-left">
                    <Link to="/" className='window-link'>
                        <FaWindows className="icon-window" />
                    </Link>

                </div>
                <div className="footer-right">
                    <IoIosArrowUp className="icon" />
                    <TbDeviceDesktopHeart className="icon" />
                    <HiOutlineSpeakerWave className="icon" />
                    <span className="time">{formatTime(time)}</span>

                </div>
            </div>
        </div>
    )
}
