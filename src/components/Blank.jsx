import { faClose, faDownload, faPerson, faPersonDress, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'

const Blank = () => {
    const [modal, setModal] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);

    return (
        <div className='Blank'>
            <div className="container">
                <form>
                    <div className="table">
                        <div className="table-title">SHAXSIY MA’LUMOTLAR</div>

                        <div className="table-column">

                            <div className="table-row row">

                                <div className="col-lg-4">
                                    <div className="form-input">
                                        <h5>FAMILIYANGIZ (INGLIZ TILIDA)</h5>
                                        <input className='controls' type="text" id="lastName" />
                                    </div>
                                    <div className="form-input d-lg-none d-block">
                                        <h5>ISMINGIZ (INGLIZ TILIDA)</h5>
                                        <input className='controls' type="text" id="lastName" />
                                    </div>
                                    <div className="form-input">
                                        <h5>JINSINGIZ</h5>
                                        <div className="d-flex justify-content-between">
                                            <label htmlFor="male" className='controls mywidth'>
                                                <input type="radio" name="gender" id="male" />
                                                <span></span>
                                                <div className="icon"><FontAwesomeIcon icon={faPerson} /></div>
                                                Erkak
                                            </label>
                                            <label htmlFor="female" className='controls mywidth'>
                                                <input type="radio" name="gender" id="female" />
                                                <span></span>
                                                <div className="icon"><FontAwesomeIcon icon={faPersonDress} /></div>
                                                Ayol
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-input d-block d-lg-none">
                                        <h5>TUG`ILGAN KUNINGIZ</h5>
                                        <div className="d-flex justify-content-between flex-nowrap">
                                            <input className='controls w-32 mt-3' placeholder='1' type="number" name="" id="" />
                                            <select className='controls w-32 mt-3 cursor'>
                                                <option value="Yanvar">Yanvar</option>
                                                <option value="Fevral">Fevral</option>
                                                <option value="Mart">Mart</option>
                                                <option value="Aprel">Aprel</option>
                                                <option value="May">May</option>
                                                <option value="Iyun">Iyun</option>
                                                <option value="Iyul">Iyul</option>
                                                <option value="Avgust">Avgust</option>
                                                <option value="Sentabr">Sentabr</option>
                                                <option value="Oktabr">Oktabr</option>
                                                <option value="Noyabr">Noyabr</option>
                                                <option value="Dekabr">Dekabr</option>
                                            </select>
                                            <input className='controls w-32 mt-3' placeholder='2005   ' type="number" name="" id="" />
                                        </div>
                                    </div>
                                    <div className="form-input">
                                        <h5>VILOYATINGIZ</h5>
                                        <select className='controls cursor'>
                                            <option value="empty">Tanlanmagan</option>
                                            <option value="Toshkent">Toshkent shahri</option>
                                            <option value="Tashkent">Toshkent vil.</option>
                                            <option value="Qoraqalpoq">Qoraqalpog'iston</option>
                                            <option value="Andijon">Andijon</option>
                                            <option value="Buxoro">Buxoro</option>
                                            <option value="Jizzax">	Jizzax</option>
                                            <option value="Qashqadaryo">Qashqadaryo</option>
                                            <option value="Navoiy">Navoiy</option>
                                            <option value="Namangan">Namangan</option>
                                            <option value="Samarqand">Samarqand</option>
                                            <option value="Surxondaryo">Surxondaryo</option>
                                            <option value="Sirdaryo">Sirdaryo</option>
                                            <option value="Fargona">Farg'ona</option>
                                            <option value="Xorazm">Xorazm</option>
                                        </select>
                                    </div>
                                    <div className="form-input d-block d-lg-none">
                                        <h5>TUMANINGIZ</h5>
                                        <select className='controls cursor'>
                                            <option value="empty">Tanlanmagan</option>
                                            <option value="Toshkent">Toshkent shahri</option>
                                            <option value="Tashkent">Toshkent vil.</option>
                                            <option value="Qoraqalpoq">Qoraqalpog'iston</option>
                                            <option value="Andijon">Andijon</option>
                                            <option value="Buxoro">Buxoro</option>
                                            <option value="Jizzax">	Jizzax</option>
                                            <option value="Qashqadaryo">Qashqadaryo</option>
                                            <option value="Navoiy">Navoiy</option>
                                            <option value="Namangan">Namangan</option>
                                            <option value="Samarqand">Samarqand</option>
                                            <option value="Surxondaryo">Surxondaryo</option>
                                            <option value="Sirdaryo">Sirdaryo</option>
                                            <option value="Fargona">Farg'ona</option>
                                            <option value="Xorazm">Xorazm</option>
                                        </select>
                                    </div>
                                    <div className="form-input">
                                        <h5>PASPORT MA`LUMOTLARINGIZ (SERIYA RAQAMI VA AMAL QILISH MUDDATI)</h5>
                                        <input placeholder='AA1234567' className='controls' type="text" id="lastName" />

                                        <div className="d-flex justify-content-between flex-nowrap">
                                            <input className='controls w-32 mt-3' placeholder='1' type="number" name="" id="" />
                                            <select className='controls w-32 mt-3 cursor'>
                                                <option value="Yanvar">Yanvar</option>
                                                <option value="Fevral">Fevral</option>
                                                <option value="Mart">Mart</option>
                                                <option value="Aprel">Aprel</option>
                                                <option value="May">May</option>
                                                <option value="Iyun">Iyun</option>
                                                <option value="Iyul">Iyul</option>
                                                <option value="Avgust">Avgust</option>
                                                <option value="Sentabr">Sentabr</option>
                                                <option value="Oktabr">Oktabr</option>
                                                <option value="Noyabr">Noyabr</option>
                                                <option value="Dekabr">Dekabr</option>
                                            </select>
                                            <input className='controls w-32 mt-3' placeholder='2005   ' type="number" name="" id="" />
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-4 d-none d-lg-block offset-lg-1">
                                    <div className="form-input">
                                        <h5>ISMINGIZ (INGLIZ TILIDA)</h5>
                                        <input className='controls' type="text" id="lastName" />
                                    </div>
                                    <div className="form-input">
                                        <h5>TUG`ILGAN KUNINGIZ</h5>
                                        <div className="d-flex justify-content-between flex-nowrap">
                                            <input className='controls w-32 mt-3' placeholder='1' type="number" name="" id="" />
                                            <select className='controls w-32 mt-3 cursor'>
                                                <option value="Yanvar">Yanvar</option>
                                                <option value="Fevral">Fevral</option>
                                                <option value="Mart">Mart</option>
                                                <option value="Aprel">Aprel</option>
                                                <option value="May">May</option>
                                                <option value="Iyun">Iyun</option>
                                                <option value="Iyul">Iyul</option>
                                                <option value="Avgust">Avgust</option>
                                                <option value="Sentabr">Sentabr</option>
                                                <option value="Oktabr">Oktabr</option>
                                                <option value="Noyabr">Noyabr</option>
                                                <option value="Dekabr">Dekabr</option>
                                            </select>
                                            <input className='controls w-32 mt-3' placeholder='2005   ' type="number" name="" id="" />
                                        </div>
                                    </div>
                                    <div className="form-input">
                                        <h5>TUMANINGIZ</h5>
                                        <select className='controls cursor'>
                                            <option value="empty">Tanlanmagan</option>
                                            <option value="Toshkent">Toshkent shahri</option>
                                            <option value="Tashkent">Toshkent vil.</option>
                                            <option value="Qoraqalpoq">Qoraqalpog'iston</option>
                                            <option value="Andijon">Andijon</option>
                                            <option value="Buxoro">Buxoro</option>
                                            <option value="Jizzax">	Jizzax</option>
                                            <option value="Qashqadaryo">Qashqadaryo</option>
                                            <option value="Navoiy">Navoiy</option>
                                            <option value="Namangan">Namangan</option>
                                            <option value="Samarqand">Samarqand</option>
                                            <option value="Surxondaryo">Surxondaryo</option>
                                            <option value="Sirdaryo">Sirdaryo</option>
                                            <option value="Fargona">Farg'ona</option>
                                            <option value="Xorazm">Xorazm</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="table">
                        <div className="table-title">RASM JOYLASHTIRISH</div>
                        <div className="table-column">
                            <div className="row photo-blog">
                                <div className="col-lg-3">
                                    <div className="column-img">
                                        {imageUrl && selectedImage && (
                                            <img
                                                src={imageUrl}
                                                alt={selectedImage.name}
                                                height="100px"
                                            />
                                        )}
                                        <img className='w-100' src="img/Photo.png" alt="blank" />
                                    </div>
                                    <div className="column-buttons">
                                        <input
                                            accept="image/*,image/jpeg"
                                            name="myphoto"
                                            type="file"
                                            id='my_photo'
                                            style={{ display: 'none' }}
                                            onChange={e => setSelectedImage(e.target.files[0])}
                                        />
                                        <label htmlFor="my_photo"><FontAwesomeIcon icon={faDownload} />Fotosurat yuklash</label>
                                    </div>
                                </div>
                                <div className="col-lg-9">

                                    <div className="info">
                                        <h4>Fotosurat yuklashning qisqacha <span>qoidalari:</span></h4>
                                        <ul>
                                            <li>Yuklanayotgan fotosurat maksimal hajmi 240 KB dan oshmasligi.</li>
                                            <li>Fotosurat kengligi kamida 600X600 piksel yoki 5x5 sm bo'lishi lozim.</li>
                                            <li>Fotosurat foni oq va ravshan bo'lishi lozim.</li>
                                            <li>Fotosuratni kerakli hajmda kesish va tayyorlash uchun mana bu yerga o'ting.</li>
                                            <li>DIQQAT: Uy sharoitida tushirilgan rasmlarni yuklamang. Rasm fotosalonda tushirilgan bo’lishi kerak.</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="table">
                        <div className="table-title">
                            YASHASH MANZILINGIZ
                        </div>
                        <div className="table-column">
                            <div className="table-row row">

                                <div className="col-lg-4">
                                    <div className="form-input">
                                        <h5>VILOYATINGIZ</h5>
                                        <select className='controls cursor'>
                                            <option value="empty">Tanlanmagan</option>
                                            <option value="Toshkent">Toshkent shahri</option>
                                            <option value="Tashkent">Toshkent vil.</option>
                                            <option value="Qoraqalpoq">Qoraqalpog'iston</option>
                                            <option value="Andijon">Andijon</option>
                                            <option value="Buxoro">Buxoro</option>
                                            <option value="Jizzax">	Jizzax</option>
                                            <option value="Qashqadaryo">Qashqadaryo</option>
                                            <option value="Navoiy">Navoiy</option>
                                            <option value="Namangan">Namangan</option>
                                            <option value="Samarqand">Samarqand</option>
                                            <option value="Surxondaryo">Surxondaryo</option>
                                            <option value="Sirdaryo">Sirdaryo</option>
                                            <option value="Fargona">Farg'ona</option>
                                            <option value="Xorazm">Xorazm</option>
                                        </select>
                                    </div>
                                    <div className="form-input d-lg-none d-block">
                                        <h5>TUMANINGIZ</h5>
                                        <select className='controls cursor'>
                                            <option value="empty">Tanlanmagan</option>
                                            <option value="Toshkent">Toshkent shahri</option>
                                            <option value="Tashkent">Toshkent vil.</option>
                                            <option value="Qoraqalpoq">Qoraqalpog'iston</option>
                                            <option value="Andijon">Andijon</option>
                                            <option value="Buxoro">Buxoro</option>
                                            <option value="Jizzax">	Jizzax</option>
                                            <option value="Qashqadaryo">Qashqadaryo</option>
                                            <option value="Navoiy">Navoiy</option>
                                            <option value="Namangan">Namangan</option>
                                            <option value="Samarqand">Samarqand</option>
                                            <option value="Surxondaryo">Surxondaryo</option>
                                            <option value="Sirdaryo">Sirdaryo</option>
                                            <option value="Fargona">Farg'ona</option>
                                            <option value="Xorazm">Xorazm</option>
                                        </select>
                                    </div>
                                    <div className="form-input">
                                        <h5>MANZILINGIZ</h5>
                                        <textarea placeholder='NOMOZGOH MAHALLA, ARCHAZOR KO’CHASI 39-UY' cols="30" rows="20" className='controls' />
                                    </div>
                                    <div className="form-input d-lg-none d-block">
                                    <h5>TELEFON RAQAMINGIZ</h5>
                                        <input className='controls' placeholder='+998 97 123 45 67' type="tel" name="" id="" />
                                    </div>
                                </div>
                                <div className="col-lg-4 d-none d-lg-block  offset-lg-1">
                                    <div className="form-input">
                                        <h5>TUMANINGIZ</h5>
                                        <select className='controls cursor'>
                                            <option value="empty">Tanlanmagan</option>
                                            <option value="Toshkent">Toshkent shahri</option>
                                            <option value="Tashkent">Toshkent vil.</option>
                                            <option value="Qoraqalpoq">Qoraqalpog'iston</option>
                                            <option value="Andijon">Andijon</option>
                                            <option value="Buxoro">Buxoro</option>
                                            <option value="Jizzax">	Jizzax</option>
                                            <option value="Qashqadaryo">Qashqadaryo</option>
                                            <option value="Navoiy">Navoiy</option>
                                            <option value="Namangan">Namangan</option>
                                            <option value="Samarqand">Samarqand</option>
                                            <option value="Surxondaryo">Surxondaryo</option>
                                            <option value="Sirdaryo">Sirdaryo</option>
                                            <option value="Fargona">Farg'ona</option>
                                            <option value="Xorazm">Xorazm</option>
                                        </select>
                                    </div>
                                    <div className="form-input">
                                    <h5>TELEFON RAQAMINGIZ</h5>
                                        <input className='controls' placeholder='+998 97 123 45 67' type="tel" name="" id="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="table">
                        <div className="table-title">
                            TA’LIM DARAJANGIZ
                        </div>
                        <div className="table-column">
                            <div className="table-row row">

                                <div className="col-lg-4">
                                    <div className="form-input">
                                        <h5>TA’LIM DARAJANGIZ</h5>
                                        <select className='controls cursor'>

                                            <option value="empty">Tanlanmagan </option>

                                            <option value="oliy">Oliy</option>

                                            <option id="sel-supr-yes" value="tugallanmagan">Tugallanmagan oliy</option>

                                            <option value="orta">
                                                O'rta-maxsus</option>
                                        </select>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="table">
                        <div className="table-title">
                            OILAVIY HOLATINGIZ
                        </div>
                        <div className="table-column">
                            <div className="table-row row">

                                <div className="col-lg-4">
                                    <div className="form-input">
                                        <h5>OILAVIY HOLATINGIZ</h5>
                                        <select className='controls cursor'>

                                            <option value="notmarried">Uylanmagan / Turmushga chiqmagan</option>
                                            <option value="married">Uylangan / Turmushga chiqgan</option>

                                            <option value="ajrashgan">Ajrashgan</option>
                                            <option value="ajrashgan">Beva</option>

                                        </select>
                                    </div>

                                </div>

                                <div className="col-lg-6 offset-lg-1">
                                    <div className="form-input">
                                        <h5>21 YOSHGA TO’LMAGAN FARZANDLAR HAQIDA MA’LUMOT KIRITING</h5>
                                        <button onClick={() => { setModal(!modal) }} className="controls btn-con">FARZAND QO’SHISH <FontAwesomeIcon icon={faPlus} /></button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>


            <div className={`application-modal ${modal ? 'active' : ''}`}>
                <div className="modal-dialog">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3>Farzandingiz haqida ma'lumot kiritish</h3>
                                    <FontAwesomeIcon onClick={() => { setModal(!modal) }} icon={faClose} />
                                </div>
                                <div className="modal-body">
                                    <div className="table-column p-0">

                                        <div className="table-row row">

                                            <div className="col-lg-6">
                                                <div className="form-input">
                                                    <h5>FAMILIYA (INGLIZ TILIDA)</h5>
                                                    <input className='controls' type="text" id="lastName" />
                                                </div>
                                                <div className="form-input d-lg-none d-block">
                                                    <h5>ISMI (INGLIZ TILIDA)</h5>
                                                    <input className='controls' type="text" id="lastName" />
                                                </div>
                                                <div className="form-input">
                                                    <h5>JINSI</h5>
                                                    <div className="d-flex justify-content-between">
                                                        <label htmlFor="babe_male" className='controls mywidth'>
                                                            <input type="radio" name="gender" id="babe_male" />
                                                            <span></span>
                                                            <div className="icon"><FontAwesomeIcon icon={faPerson} /></div>
                                                            Erkak
                                                        </label>
                                                        <label htmlFor="babe_female" className='controls mywidth'>
                                                            <input type="radio" name="gender" id="babe_female" />
                                                            <span></span>
                                                            <div className="icon"><FontAwesomeIcon icon={faPersonDress} /></div>
                                                            Ayol
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-input d-lg-none d-block">
                                                    <h5>TUG`ILGAN KUNI</h5>

                                                    <div className="d-flex justify-content-between flex-nowrap">
                                                        <input className='controls w-32' placeholder='1' type="number" name="" id="" />
                                                        <select className='controls w-32 cursor'>
                                                            <option value="Yanvar">Yanvar</option>
                                                            <option value="Fevral">Fevral</option>
                                                            <option value="Mart">Mart</option>
                                                            <option value="Aprel">Aprel</option>
                                                            <option value="May">May</option>
                                                            <option value="Iyun">Iyun</option>
                                                            <option value="Iyul">Iyul</option>
                                                            <option value="Avgust">Avgust</option>
                                                            <option value="Sentabr">Sentabr</option>
                                                            <option value="Oktabr">Oktabr</option>
                                                            <option value="Noyabr">Noyabr</option>
                                                            <option value="Dekabr">Dekabr</option>
                                                        </select>
                                                        <input className='controls w-32' placeholder='2005   ' type="number" name="" id="" />
                                                    </div>
                                                </div>
                                                <div className="form-input">
                                                    <h5>VILOYATI</h5>
                                                    <select className='controls cursor'>
                                                        <option value="empty">Tanlanmagan</option>
                                                        <option value="Toshkent">Toshkent shahri</option>
                                                        <option value="Tashkent">Toshkent vil.</option>
                                                        <option value="Qoraqalpoq">Qoraqalpog'iston</option>
                                                        <option value="Andijon">Andijon</option>
                                                        <option value="Buxoro">Buxoro</option>
                                                        <option value="Jizzax">	Jizzax</option>
                                                        <option value="Qashqadaryo">Qashqadaryo</option>
                                                        <option value="Navoiy">Navoiy</option>
                                                        <option value="Namangan">Namangan</option>
                                                        <option value="Samarqand">Samarqand</option>
                                                        <option value="Surxondaryo">Surxondaryo</option>
                                                        <option value="Sirdaryo">Sirdaryo</option>
                                                        <option value="Fargona">Farg'ona</option>
                                                        <option value="Xorazm">Xorazm</option>
                                                    </select>
                                                </div>

                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-input  d-none d-lg-block ">
                                                    <h5>ISMI (INGLIZ TILIDA)</h5>
                                                    <input className='controls' type="text" id="lastName" />
                                                </div>
                                                <div className="form-input  d-none d-lg-block ">
                                                    <h5>TUG`ILGAN KUNI</h5>

                                                    <div className="d-flex justify-content-between flex-nowrap">
                                                        <input className='controls w-32' placeholder='1' type="number" name="" id="" />
                                                        <select className='controls w-32 cursor'>
                                                            <option value="Yanvar">Yanvar</option>
                                                            <option value="Fevral">Fevral</option>
                                                            <option value="Mart">Mart</option>
                                                            <option value="Aprel">Aprel</option>
                                                            <option value="May">May</option>
                                                            <option value="Iyun">Iyun</option>
                                                            <option value="Iyul">Iyul</option>
                                                            <option value="Avgust">Avgust</option>
                                                            <option value="Sentabr">Sentabr</option>
                                                            <option value="Oktabr">Oktabr</option>
                                                            <option value="Noyabr">Noyabr</option>
                                                            <option value="Dekabr">Dekabr</option>
                                                        </select>
                                                        <input className='controls w-32' placeholder='2005   ' type="number" name="" id="" />
                                                    </div>
                                                </div>
                                                <div className="form-input">
                                                    <h5>TUMANI</h5>
                                                    <select className='controls cursor'>
                                                        <option value="empty">Tanlanmagan</option>
                                                        <option value="Toshkent">Toshkent shahri</option>
                                                        <option value="Tashkent">Toshkent vil.</option>
                                                        <option value="Qoraqalpoq">Qoraqalpog'iston</option>
                                                        <option value="Andijon">Andijon</option>
                                                        <option value="Buxoro">Buxoro</option>
                                                        <option value="Jizzax">	Jizzax</option>
                                                        <option value="Qashqadaryo">Qashqadaryo</option>
                                                        <option value="Navoiy">Navoiy</option>
                                                        <option value="Namangan">Namangan</option>
                                                        <option value="Samarqand">Samarqand</option>
                                                        <option value="Surxondaryo">Surxondaryo</option>
                                                        <option value="Sirdaryo">Sirdaryo</option>
                                                        <option value="Fargona">Farg'ona</option>
                                                        <option value="Xorazm">Xorazm</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="column-img">
                                                    {imageUrl && selectedImage && (
                                                        <img
                                                            src={imageUrl}
                                                            alt={selectedImage.name}
                                                            height="100px"
                                                        />
                                                    )}
                                                    <img className='w-100' src="img/babe.png" alt="blank" />
                                                </div>
                                                <div className="column-buttons">
                                                    <input
                                                        accept="image/*,image/jpeg"
                                                        name="myphoto"
                                                        type="file"
                                                        id='my_photo'
                                                        style={{ display: 'none' }}
                                                        onChange={e => setSelectedImage(e.target.files[0])}
                                                    />
                                                    <label htmlFor="my_photo"><FontAwesomeIcon icon={faDownload} />Fotosurat yuklash</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button onClick={() => { setModal(!modal) }} type="button" className="close">Yopish</button>

                                    <button type='submit' className="btn send d-flex align-items-center">
                                    SAQLASH
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Blank