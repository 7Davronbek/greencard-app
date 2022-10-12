import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import InputMask from "react-input-mask";
import { ToastContainer } from 'react-toastify';

const CallUs = () => {
    return (
        <div className='CallUs'>
            <div className="container">
                <div className="titles text-center">
                    <h6 className="aboveT">ALOQA</h6>
                    <h3 className='underT'>Biz siz bilan bog’lanamiz</h3>
                    <p>Pastdagi bo’sh joyga o’z telefon raqamingizni kiriting va biz siz bilan qayta bog’lanamiz 😊</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <form>
                            <div className="tel">
                                <InputMask
                                    mask="+\9\9\8\ (99) 999-99-99"
                                    alwaysShowMask={true}
                                    maskChar="_"
                                    placeholder='Telefon raqamingizni kiriting...'
                                // value={phone_number}
                                // onChange={e => setPhone_number(e.target.value)}
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