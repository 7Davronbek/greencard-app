import React from 'react'

const BlankHeader = () => {
  return (
    <div className='BlankHeader'>
        <div className="container">
            <h6>Diqqat! Sayt orqali Green Card anketasini to`ldirish pulli. Oilaviy anketa 100 000 so`m, yakka bo`ydoq 75 000 so`m. To'lov anketa to'ldirilgandan keyin Click & Payme orqali amalga oshirilishi shart. To`lovni amalga oshirilmagan anketalar ro'yxatdan o'tkazilmaydi.</h6>

           <div className="d-flex align-items-center">
           <label htmlFor='agree'> <input id='agree' type="checkbox" /> Men lotereyada ishtirok etish shartlariga roziman.</label>
           </div>
        </div>
    </div>
  )
}

export default BlankHeader