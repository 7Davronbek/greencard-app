import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='Header'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="info">
                            <h1>Greencardusa.uz bilan <span>Green Card</span> lotereyasini <span>yutib oling!</span></h1>
                            <p>Greencardusa.uz sizni Amerika DV Lottery dasturida rasmiy ro’yxatdan o’tkazadi</p>
                            <div className="go-btn d-lg-block d-none">
                                <Link to="/blank" className="btn">
                                    Anketa to’ldirish
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="img">
                            <img className='w-100' src="img/header.png" alt="" />
                        </div>
                        <div className="go-btn d-block d-lg-none"><a className="btn" href="#/blank">Anketa to’ldirish</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header