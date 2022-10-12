import { faFacebookF, faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-3 col-10 mb-5 mb-lg-0">
                        <div className="logo">
                            <a href="/"><img src="img/logo.png" alt="" /></a>
                        </div>
                        <p className='paragraf'>Greencard.uz bilan Green Card lotereyasini yutib oling! Greencard.uz sizni Amerika DV Lottery dasturida rasmiy ro’yxatdan o’tkazadi.</p>
                        <div className="socials">
                            <ul>
                                <li>
                                    <a href="/"><FontAwesomeIcon icon={faFacebookF} /></a>
                                </li>
                                <li>
                                    <a href="/"><FontAwesomeIcon icon={faTelegramPlane} /></a>
                                </li>
                                <li>
                                    <a href="/"><FontAwesomeIcon icon={faInstagram} /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-10">
                        <ul className='links-menu'>
                            <li><a href="#about">Dastur haqida</a></li>
                            <li><a href="#questions">Savollar</a></li>
                            <li><a href="#contacts">Aloqa</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="copyright">
                <h6>Copyright 2022 <a href="kokoagency.uz">kOkO digital agency</a>. All rights reserved.</h6>
            </div>
        </div>
    )
}

export default Footer