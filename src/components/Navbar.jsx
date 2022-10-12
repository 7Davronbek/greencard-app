import React, { useState } from 'react'

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
        <div className={`navBar ${navbar ? 'active' : ''}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-1">
                        <div className="logo">
                            <a href="/"><img className='' src="img/logo.png" alt="" /></a>
                        </div>
                    </div>
                    <div className={`col-4 mobileWrap ${burger ? '' : 'burgered'}`}>
                        <ul className="nav-menu">
                            <li><a onClick={() => setBurger(!burger)} href="#about">Dastur haqida</a></li>
                            <li><a onClick={() => setBurger(!burger)} href="#questions">Savollar</a></li>
                            <li><a onClick={() => setBurger(!burger)} href="#contacts">Aloqa</a></li>
                          
                        </ul>

                        <div className="imggg d-lg-none d-block">
                            <img src="img/burger.png" alt="" />
                        </div>
                    </div>
                    {/* <div className=""></div> */}
                    <div className="col-2 d-lg-block d-none offset-lg-5">
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
    )
}

export default Navbar