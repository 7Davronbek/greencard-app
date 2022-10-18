import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import InputMask from "react-input-mask";
import { toast, ToastContainer } from 'react-toastify';
import { API_PATH } from '../tools/constants';
import axios from 'axios';

const CallUs = () => {
    const [phone, setPhone] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        axios.post(API_PATH + '/main/contact/', { phone })
            .then((res) => {
                toast.success("Malumotlaringiz jo'natildi!", {position: "bottom-left"})
                setPhone('')
            })
            .catch((err) => {
                toast.error("Internet Error!", {position: "bottom-left"})
            })
    }
    return (
        <div className='CallUs py-5'>
            <div className="container">
                <div className="titles text-center">
                    <h6 className="aboveT">ALOQA</h6>
                    <h3 className='underT'>Biz siz bilan bog’lanamiz</h3>
                    <p>Pastdagi bo’sh joyga o’z telefon raqamingizni kiriting va biz siz bilan qayta bog’lanamiz 😊</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <form onSubmit={handleSubmit} >
                            <div className="tel">
                                <InputMask
                                    mask="+\9\9\8\ (99) 999-99-99"
                                    alwaysShowMask={true}
                                    maskChar="_"
                                    required
                                    placeholder='Telefon raqamingizni kiriting...'
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                />
                                <button type='submit'>
                                    Yuborish
                                </button>
                                <ToastContainer />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallUs