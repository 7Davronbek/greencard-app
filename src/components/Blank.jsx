import { faClose, faDownload, faPerson, faPersonDress, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_PATH } from '../tools/constants';

const Blank = () => {
    const [modal, setModal] = useState(false)

    const [firstName, setFirsName] = useState('')
    const [lastName, setLastName] = useState('')
    const [sex, setSex] = useState('')
    // const [dateBirth, setDateBirth] = useState('')
    const [seriaNumber, setSeriaNumber] = useState('')

    const [regionOfficial, setRegionOfficial] = useState('')
    const [districtOffisial, setDistrictOffisial] = useState('')

    const [currentregionOfficial, setCurrentregionOfficial] = useState('')
    const [currentdistrictOffisial, setCurrentdistrictOffisial] = useState('')

    // const [passwordExpire, setPasswordExpire] = useState('')
    // const [addressDistrict, setAddressDistrict] = useState('')

    const [mahalla, setMahalla] = useState('')
    const [phone, setPhone] = useState('')
    const [degree, setDegree] = useState('')
    const [status, setStatus] = useState('')

    const [aday, setAday] = useState('')
    const [amonth, setAmonth] = useState('')
    const [ayear, setAyear] = useState('')

    const [pday, setPday] = useState('')
    const [pmonth, setPmonth] = useState('')
    const [pyear, setPyear] = useState('')


    const [region, setRegion] = useState([])
    const [district, setDistrict] = useState([])
    // const [currentdistrict, setCurrentdistrict] = useState([])
    // const [currentregion, setCurrentregion] = useState([])
    // const [districtId, setDistrictId] = useState('')

    // let a = aday + amonth + ayear

    const post = (e) => {
        e.preventDefault()

        axios.post(API_PATH + `/main/client/`, { first_name: firstName, last_name: lastName, sex, date_birth: aday + ' ' + amonth + ' ' + ayear, password_expire: pday + ' ' + pmonth + ' ' + pyear, seria_number: seriaNumber, regionOfficial, district: districtOffisial, currentregionOfficial, address_district: currentdistrictOffisial, mahalla, phone, degree, status })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getDistrict = () => {

        axios.get(API_PATH + `/main/district/`)
            // ?region_id=${districtId ? districtId : 1}
            .then((res) => {
                setDistrict(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getRegion = () => {
        axios.get(API_PATH + '/main/region/')
            .then((res) => {
                setRegion(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getDistrict()
        getRegion()
    }, [])



    return (
        <>
            {/* <form>
                <input onChange={e => setFirsName(e.target.value)} value={firstName} type="text" className='form-control' />
                <input onChange={e => setLastName(e.target.value)} value={lastName} type="text" className='form-control' />
                <button onSubmit={post} type='submit'>Sent</button>
            </form> */}

            <form onSubmit={post} className='Blank'>
                <div className="container">
                    <>
                        <div className="table">
                            <div className="table-title">SHAXSIY MA’LUMOTLAR</div>

                            <div className="table-column">

                                <div className="table-row row">

                                    <div className="col-lg-4">
                                        <div className="form-input">
                                            <h5>FAMILIYANGIZ (INGLIZ TILIDA)</h5>
                                            <input onChange={e => setLastName(e.target.value)} value={lastName} className='controls' type="text" id="lastName" />
                                        </div>
                                        <div className="form-input d-lg-none d-block">
                                            <h5>ISMINGIZ (INGLIZ TILIDA)</h5>
                                            <input onChange={e => setFirsName(e.target.value)} value={firstName} className='controls' type="text" id="lastName" />
                                        </div>
                                        <div className="form-input">
                                            <h5>JINSINGIZ</h5>
                                            <div className="d-flex justify-content-between">
                                                <label onClick={e => setSex('Erkak')} htmlFor="male" className='controls mywidth'>
                                                    <input type="radio" name="gender" id="male" />
                                                    <span></span>
                                                    <div className="icon"><FontAwesomeIcon icon={faPerson} /></div>
                                                    Erkak
                                                </label>
                                                <label onClick={e => setSex('Ayol')} htmlFor="female" className='controls mywidth'>
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
                                                <input onChange={e => setAday(e.target.value)} value={aday} className='controls w-32 mt-3' placeholder='1' type="number" id="" />
                                                <select onChange={e => setAmonth(e.target.value)} className='controls w-32 mt-3 cursor'>
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
                                                <input onChange={e => setAyear(e.target.value)} value={ayear} className='controls w-32 mt-3' placeholder='2005' type="number" id="" />
                                            </div>

                                        </div>
                                        <div className="form-input">
                                            <h5>VILOYATINGIZ</h5>
                                            <select onChange={e => { setRegionOfficial(e.target.value); console.log(e.target.id); }} className='controls cursor'>
                                                <option value="empty">Tanlanmagan</option>
                                                {region && region.map((item, index) => (
                                                    <option key={index} id={item.id} value={item.name_uz}>{item.name_uz}</option>
                                                ))}

                                            </select>
                                        </div>
                                        <div className="form-input d-block d-lg-none">
                                            <h5>TUMANINGIZ</h5>
                                            <select onChange={(e) => setDistrictOffisial(e.target.value)} className='controls cursor'>
                                                <option value="empty">Tanlanmagan</option>
                                                {district && district.map((item, index) => (
                                                    <option key={index} value={item.region_id}>{item.name_uz}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-input">
                                            <h5>PASPORT MA`LUMOTLARINGIZ (SERIYA RAQAMI VA AMAL QILISH MUDDATI)</h5>
                                            <input onChange={e => setSeriaNumber(e.target.value)} value={seriaNumber} placeholder='AA1234567' className='controls' type="text" id="lastName" />

                                            <div className="d-flex justify-content-between flex-nowrap">
                                                <input onChange={e => setPday(e.target.value)} className='controls w-32 mt-3' placeholder='1' type="number" id="" />
                                                <select onChange={e => setPmonth(e.target.value)} className='controls w-32 mt-3 cursor'>
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
                                                <input onChange={e => setPyear(e.target.value)} className='controls w-32 mt-3' placeholder='2005   ' type="number" id="" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-4 d-none d-lg-block offset-lg-1">
                                        <div className="form-input">
                                            <h5>ISMINGIZ (INGLIZ TILIDA)</h5>
                                            <input onChange={e => setFirsName(e.target.value)} value={firstName} className='controls' type="text" id="lastName" />
                                        </div>
                                        <div className="form-input">
                                            <h5>TUG`ILGAN KUNINGIZ</h5>
                                            <div className="d-flex justify-content-between flex-nowrap">
                                                <input onChange={e => setAday(e.target.value)} value={aday} className='controls w-32 mt-3' placeholder='1' type="number" id="" />
                                                <select onChange={e => setAmonth(e.target.value)} className='controls w-32 mt-3 cursor'>
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
                                                <input onChange={e => setAyear(e.target.value)} value={ayear} className='controls w-32 mt-3' placeholder='2005   ' type="number" id="" />
                                            </div>
                                        </div>
                                        <div className="form-input">
                                            <h5>TUMANINGIZ</h5>
                                            <select onChange={(e) => setDistrictOffisial(e.target.value)} className='controls cursor'>
                                                <option value="empty">Tanlanmagan</option>
                                                {district && district.map((item, index) => (
                                                    <option key={index} value={item.region_id}>{item.name_uz}</option>
                                                ))}
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

                                            <img className='w-100' src="img/Photo.png" alt="blank" />
                                        </div>
                                        <div className="column-buttons">
                                            <input
                                                accept="image/*,image/jpeg"
                                                name="myphoto"
                                                type="file"
                                                id='my_photo'
                                                style={{ display: 'none' }}
                                            />
                                            <label htmlFor="my_photo"><FontAwesomeIcon icon={faDownload} />Fotosurat yuklash</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">

                                        <div className="info">
                                            <h4>Fotosurat yuklashning qisqacha <span>qoidalari:</span></h4>
                                            <ul>
                                                <li>Yuklanayotgan fotosurat maksimal hajmi 2 MB dan oshmasligi.</li>
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
                                            <select onChange={e => setCurrentregionOfficial(e.target.value)} className='controls cursor'>
                                                <option value="empty">Tanlanmagan</option>
                                                {region && region.map((item, index) => (
                                                    <option key={index} id={item.id} value={item.name_uz}>{item.name_uz}</option>
                                                ))}
                                                <option value="Toshkent">Toshkent shahri</option>
                                            </select>
                                        </div>
                                        <div className="form-input d-lg-none d-block">
                                            <h5>TUMANINGIZ</h5>
                                            <select onChange={e => setCurrentdistrictOffisial(e.target.value)} className='controls cursor'>
                                                <option value="empty">Tanlanmagan</option>
                                                {district && district.map((item, index) => (
                                                    <option key={index} value={item.region_id}>{item.name_uz}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-input">
                                            <h5>MANZILINGIZ</h5>
                                            <textarea onChange={e => setMahalla(e.target.value)} value={mahalla} placeholder='NOMOZGOH MAHALLA, ARCHAZOR KO’CHASI 39-UY' cols="30" rows="20" className='controls' />
                                        </div>
                                        <div className="form-input d-lg-none d-block">
                                            <h5>TELEFON RAQAMINGIZ</h5>
                                            <input onChange={e => setPhone(e.target.value)} className='controls' placeholder='+998 97 123 45 67' type="tel" id="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 d-none d-lg-block  offset-lg-1">
                                        <div className="form-input">
                                            <h5>TUMANINGIZ</h5>
                                            <select onChange={e => setCurrentdistrictOffisial(e.target.value)} className='controls cursor'>
                                                <option value="empty">Tanlanmagan</option>
                                                {district && district.map((item, index) => (
                                                    <option key={index} value={item.region_id}>{item.name_uz}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-input">
                                            <h5>TELEFON RAQAMINGIZ</h5>
                                            <input onChange={e => setPhone(e.target.value)} className='controls' placeholder='+998 97 123 45 67' type="tel" id="" />
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
                                            <select onChange={e => setDegree(e.target.value)} className='controls cursor'>

                                                <option value="empty">Tanlanmagan </option>

                                                <option value="MAKTAB(9 sinf)">MAKTAB(9 sinf)</option>
                                                <option value="MAKTAB(11 sinf)">MAKTAB(11 sinf)</option>
                                                <option value="LITSEY">LITSEY</option>
                                                <option value="KOLLEJ">KOLLEJ</option>
                                                <option value="TUGALLANMAGAN OLIY">TUGALLANMAGAN OLIY</option>
                                                <option value="OLIY MA'LUMOT">OLIY MA'LUMOT</option>
                                                <option value="MAGISTRATURA">MAGISTRATURA</option>
                                                <option value="ASPIRANTURA">ASPIRANTURA</option>
                                                <option value="DOKTORANTURA">DOKTORANTURA </option>

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
                                            <select onChange={e => setStatus(e.target.value)} className='controls cursor'>

                                                <option value="empty">Tanlanmagan </option>
                                                <option value="Bo'ydoq / Turmushga chiqmagan">Bo'ydoq / Turmushga chiqmagan</option>
                                                <option value="Uylangan / Turmushga chiqqan"> Uylangan / Turmushga chiqqan </option>
                                                <option value="Ajrashgan, Beva / Yolg'iz">Ajrashgan, Beva / Yolg'iz </option>

                                            </select>
                                        </div>

                                    </div>

                                    <div className="col-lg-6 offset-lg-1">
                                        <div className="form-input">
                                            <h5>21 YOSHGA TO’LMAGAN FARZANDLAR HAQIDA MA’LUMOT KIRITING</h5>
                                            <div onClick={() => { setModal(true) }} className="controls btn-con">FARZAND QO’SHISH <FontAwesomeIcon icon={faPlus} /></div>
                                        </div>

                                    </div>

                                    <button type='submit'>Enter</button>
                                </div>
                            </div>
                        </div>
                    </>
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
                                                            <input className='controls w-32' placeholder='1' type="number" id="" />
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
                                                            <input className='controls w-32' placeholder='2005   ' type="number" id="" />
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
                                                            <input className='controls w-32' placeholder='1' type="number" id="" />
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
                                                            <input className='controls w-32' placeholder='2005   ' type="number" id="" />
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

                                                        <img className='w-100' src="img/babe.png" alt="blank" />
                                                    </div>
                                                    <div className="column-buttons">
                                                        <input
                                                            accept="image/*,image/jpeg"
                                                            name="myphoto"
                                                            type="file"
                                                            id='my_photo'
                                                            style={{ display: 'none' }}
                                                        />
                                                        <label htmlFor="my_photo"><FontAwesomeIcon icon={faDownload} />Fotosurat yuklash</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="modal-footer">
                                        <button onClick={() => { setModal(!modal) }} type="button" className="close">Yopish</button>

                                        <button className="btn send d-flex align-items-center">
                                            SAQLASH
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Blank