import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const [burger, setBurger] = useState(false)

    const changeNavbar = () => {
        if (window.scrollY >= 30) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavbar);
    return (
        <>
            <div className={`navBar ${navbar ? 'active' : ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-1">
                            <div className="logo">
                                <a href="/"><img className='w-100' src="img/logo.png" alt="" /></a>
                            </div>
                        </div>
                        <div className={`col-4 mobileWrap ${burger ? '' : 'burgered'}`}>
                            <ul className="nav-menu">
                                <li><Link onClick={() => setBurger(!burger)} to="/about">Dastur haqida</Link></li>
                                <li><Link onClick={() => setBurger(!burger)} to="/questions">Savollar</Link></li>
                                <li><Link onClick={() => setBurger(!burger)} to="/contacts">Aloqa</Link></li>

                            </ul>

                            <div className="imggg d-lg-none d-block">
                                <img src="img/burger.png" alt="" />
                            </div>
                        </div>
                        {/* <div className=""></div> */}
                        <div className="col-3 d-lg-block d-none offset-lg-4">
                            <div className="tel"><a href="tel:+998908232838">+998 90 827 28 38</a></div>
                        </div>

                        <div onClick={() => setBurger(!burger)} className={`burger pr-4 ml-auto d-flex d-lg-none ${burger ? 'burgered' : ''}`}>
                            <div className="burger1"></div>
                            <div className="burger2"></div>
                            <div className="burger3"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="navbarLine"></div>
        </>
    )
}

export default Navbar