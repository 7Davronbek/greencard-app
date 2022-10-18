import React from 'react'

const Question = () => {
    return (
        <div className='Question' id='questions'>
            <div className="container">
                <div className="titles text-center">
                    <h6 className="aboveT">
                        SAVOLLAR
                    </h6>
                    <h3>Tez-tez so'raladigan savollar</h3>
                    <p>Agar savolingizga to’liqroq javob olmoqchi bo’lsangiz yoki boshqa savollaringiz bo’lsa bizga murojaat qilishingiz mumkin</p>
                </div>
                <div className="row">
                    <div className="col-lg-4 offset-lg-1 mb-5">
                        <div className="block">
                            <h4>Qanday qilib Green Card dasturida to’g’ri va xatolarsiz anketa to’ldirish mumkin?</h4>
                            <p>DV rasmiy saytida ro’yxatdan o’tish faqatgina kuz faslida bo’lsa, bizning saytimiz orqali siz yilning istalgan paytida anketa to’ldirib qo’yishingiz mumkin.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1 mb-5">
                        <div className="block">
                            <h4>Green Card dasturida ishtirok etish uchun Xalqaro pasport muhimmi?</h4>
                            <p>Muhim emas, agar sizda hozirda biometrik pasport bo'lsa siz bizning saytimiz orqali anketa to'ldirib ishtirok etishingiz mumkin.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1">
                        <div className="block">
                            <h4>Green Card dasturida ishtirok etish pullikmi?</h4>
                            <p>Ha, saytimiz orqali anketa to'ldirish narxlari: bo'ydoqlar yoki yakka anketa uchun 75 000 so'm, Oilali anketa uchun 100 00 so'mni tashkil etadi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question