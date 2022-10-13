import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faDownload, faPerson, faPersonDress } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { API_PATH, config } from '../tools/constants';

const Children = () => {

    const [region, setRegion] = useState([])
    const [district, setDistrict] = useState([])

    const getDistrict = () => {

        axios.get(API_PATH + `/main/district/?region_id=${cregion ? cregion : ''}`)
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

    // CHILDREN'S tools
    const [cname, setCname] = useState('')
    const [csurname, setCsurname] = useState('')
    const [csex, setCsex] = useState('')
    const [cday, setCday] = useState('')
    const [cmonth, setCmonth] = useState('')
    const [cyear, setCyear] = useState('')
    const [cregion, setCregion] = useState('')
    const [cdistrict, setCdistrict] = useState('')
    const [cimage, setCimage] = useState('')

    const postBaby = (id) => {

        const formData = new FormData()

        formData.append("image_childrens", cimage)
        formData.append("first_name", cname)
        formData.append("last_name", csurname)
        formData.append("sex", csex)
        formData.append("place_birth", cdistrict)
        formData.append("date_birth", cday + ' ' + cmonth + ' ' + cyear)
        formData.append("parent", id)

        axios.post(API_PATH + '/main/children/', formData, config)
            .then((res) => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getDistrict()
        getRegion()
    }, [])

    return (
        <div className='Children'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="modal-contents">
                            <div className="modal-header">
                                <h3>Farzandingiz haqida ma'lumot kiritish</h3>
                                {/* <FontAwesomeIcon onClick={() => { setModal(!modal) }} icon={faClose} /> */}
                            </div>
                            <div className="modal-body">
                                <div className="table-column p-0">

                                    <div className="table-row row">

                                        <div className="col-lg-6">
                                            <div className="form-input">
                                                <h5>FAMILIYA (INGLIZ TILIDA)</h5>
                                                <input onChange={e => setCsurname(e.target.value)} value={csurname} className='controls' type="text" id="lastName" />
                                            </div>
                                            <div className="form-input d-lg-none d-block">
                                                <h5>ISMI (INGLIZ TILIDA)</h5>
                                                <input onChange={e => setCname(e.target.value)} value={cname} className='controls' type="text" id="lastName" />
                                            </div>
                                            <div className="form-input">
                                                <h5>JINSI</h5>
                                                <div className="d-flex justify-content-between">
                                                    <label onClick={e => setCsex('Erkak')} htmlFor="babe_male" className='controls mywidth'>
                                                        <input type="radio" name="gender" id="babe_male" />
                                                        <span></span>
                                                        <div className="icon"><FontAwesomeIcon icon={faPerson} /></div>
                                                        Erkak
                                                    </label>
                                                    <label onClick={e => setCsex('Ayol')} htmlFor="babe_female" className='controls mywidth'>
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
                                                    <input onChange={e => setCday(e.target.value)} value={cday} className='controls w-32' placeholder='1' type="number" id="" />
                                                    <select onChange={e => setCmonth(e.target.value)} className='controls w-32 cursor'>
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
                                                    <input onChange={e => setCyear(e.target.value)} value={cyear} className='controls w-32' placeholder='2005   ' type="number" id="" />
                                                </div>
                                            </div>
                                            <div className="form-input">
                                                <h5>VILOYATI</h5>
                                                <select onChange={e => setCregion(e.target.value)} className='controls cursor'>
                                                    <option value="empty">Tanlanmagan</option>
                                                    {region && region.map((item, index) => (
                                                        <option key={index} value={item.region_id}>{item.name_uz}</option>
                                                    ))}
                                                </select>
                                            </div>

                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-input  d-none d-lg-block ">
                                                <h5>ISMI (INGLIZ TILIDA)</h5>
                                                <input onChange={e => setCname(e.target.value)} className='controls' type="text" id="lastName" />
                                            </div>
                                            <div className="form-input  d-none d-lg-block ">
                                                <h5>TUG`ILGAN KUNI</h5>

                                                <div className="d-flex justify-content-between flex-nowrap">
                                                    <input onChange={e => setCday(e.target.value)} value={cday} className='controls w-32' placeholder='1' type="number" id="" />
                                                    <select onChange={e => setCmonth(e.target.value)} className='controls w-32 cursor'>
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
                                                    <input onChange={e => setCyear(e.target.value)} value={cyear} className='controls w-32' placeholder='2005   ' type="number" id="" />
                                                </div>
                                            </div>
                                            <div className="form-input">
                                                <h5>TUMANI</h5>
                                                <select onChange={e => setCdistrict(e.target.value)} className='controls cursor'>
                                                    <option value="empty">Tanlanmagan</option>
                                                    {district && district.map((item, index) => (
                                                        <option key={index} value={item.region_id}>{item.name_uz}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="column-img">


                                                {cimage ? <>
                                                    {/* <img src={URL.createObjectURL(image)} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" /> */}
                                                    {cimage.name}
                                                </> : <><img className='w-100' src="img/babe.png" alt="blank" /></>}
                                            </div>
                                            <div className="column-buttons">
                                                <input
                                                    accept="image/*,image/jpeg"
                                                    name="myphoto"
                                                    type="file"
                                                    onChange={e => setCimage(e.target.files[1])}
                                                    // onChange={e => {setCimage(e.target.files[0])}}
                                                    id='my_photo'
                                                    style={{ display: 'none' }}
                                                />
                                                <label htmlFor="my_photo"><FontAwesomeIcon icon={faDownload} />Fotosurat yuklash</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* <div className="modal-footer">
                                <button onClick={() => { setModal(!modal) }} type="button" className="close">Yopish</button>

                                <button onClick={() => { setModal(false) }} className="btn send d-flex align-items-center">
                                    SAQLASH
                                </button>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Children