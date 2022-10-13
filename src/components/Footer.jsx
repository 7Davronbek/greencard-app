import { faFacebookF, faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-3 col-10 mb-5 mb-lg-0">
                        <div className="logo">
                            <a href="/"><img src="img/logo.png" alt="" /></a>
                        </div>
                        <p className='paragraf'>usa.uz bilan Green Card lotereyasini yutib oling! Greencardusa.uz sizni Amerika DV Lottery dasturida rasmiy ro’yxatdan o’tkazadi.</p>
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
                            <li><Link to="/about">Dastur haqida</Link></li>
                            <li><Link to="/questions">Savollar</Link></li>
                            <li><Link to="/contacts">Aloqa</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="copyright">
                <h6>Copyright 2022 <a href="kokoagency.uz">zamaan team</a>. All rights reserved.</h6>
            </div>
        </div>
    )
}

export default Footer