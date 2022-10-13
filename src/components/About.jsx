import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='About'>
            <div className="container"> 
                <div className="row align-items-center justify-content-between flex-lg-row flex-column-reverse">
                    <div className="col-lg-6">
                        <div className="img">
                            <img className='w-100' src="img/about.png" alt="" />
                        </div>
                        <div className="go-btn d-block d-lg-none"><a className="btn" href="#/blank">Anketa to’ldirish</a></div>
                    </div>
                    <div className="col-lg-5">
                        <div className="info">
                            <h6 className='aboveT'>Dastur haqida</h6>
                            <h2>Green Card <span>nima?</span></h2>
                            <p>Green Card Lotereyasi — AQSh hukumati tomonidan e’lon qilingan “DV Lottery” dasturi har yili dunyoning ko’plab mamlakatlaridan minglab odamlarga AQShga kelib yashash orzusini ro’yobga chiqarish imkoniyatini beradi.</p>
                            <div className="go-btn d-lg-block d-none">
                                <Link to="/blank" className="btn">
                                    Anketa to’ldirish
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     
        </div>
    )
}

export default About