import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faDownload, faPerson, faPersonDress } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { API_PATH, config, FATHER } from '../tools/constants';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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

    const [isLoading, setIsLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [son, setSon] = useState('')

    const sendSon = () => {
        console.log(son);
        setSon(son)
    }

    const postBaby = (e) => {
        e.preventDefault()
        const formData = new FormData()
        setIsLoading(true)

        formData.append("image_childrens", cimage)
        formData.append("first_name", cname)
        formData.append("last_name", csurname)
        formData.append("sex", csex)
        formData.append("place_birth", cdistrict)
        formData.append("date_birth", cday + ' ' + cmonth + ' ' + cyear)
        formData.append("parent", localStorage.getItem(FATHER))

        if (cname.length > 0 && csurname.length > 0 && csex.length > 0 && cdistrict.length > 0 && cday.length > 0 && cmonth.length > 0 && cyear.length > 0) {

            axios.post(API_PATH + '/main/children/', formData, config)
                .then((res) => {
                    setIsLoading(false)
                    setCname('')
                    setCsurname('')
                    setCimage('')
                    setCsurname('')
                    setCsex('')
                    setCday('')
                    setCmonth('')
                    setCyear('')
                    setCregion('')
                    setCdistrict('')

                    setSuccess(true)

                    // nav('/', {replace: true})
                })
                .catch(err => {
                    toast.error("Internetda xatolik!", { position: 'bottom-left' })
                    setIsLoading(false)
                })

        } else {
            toast.error("Malumotlarni to'ldiring!", { position: 'bottom-left' })
            setIsLoading(false)
        }
    }

    const changeSon = () => {

        if (son === 'xa') {
            setSuccess(false)
            setSon('')
        } else if (son === 'yoq') {
            nav('/', { replace: true })
            setSon('')
            toast.success("Malumotlaringiz jonatildi!", { position: 'bottom-left' })
        }
    }

    const nav = useNavigate()

    useEffect(() => {
        getDistrict()
        changeSon()
        getRegion()
        if (!localStorage.getItem(FATHER)) {
            toast.error("Blankani to'ldiring!", { position: 'bottom-left' })
            nav('/blank', { replace: true })
        }
    }, [cregion, son])

    return (
        <>
            <div className='Children '>
                <div className="container">
                    <div className="row">
                        <form onSubmit={postBaby} className="col-lg-10 mx-auto py-5">
                            <div className="modal-contents">
                                <div className="modal-header">
                                    <div className="table-title mb-3">Farzandingiz haqida ma'lumot kiritish</div>
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
                                                            <option key={index} value={item.id}>{item.name_uz}</option>
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
                                                        <img src={URL.createObjectURL(cimage)} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="" />
                                                    </> : <><img className='w-100' src="img/babe.png" alt="blank" /></>}

                                                </div>
                                                <div className="column-buttons baby-buttons">
                                                    <input
                                                        accept="image/*,image/jpeg"
                                                        name="myphoto"
                                                        type="file"
                                                        onChange={e => setCimage(e.target.files[0])}
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
                            <div className="send-btn mt-3">
                                <button type="submit" disabled={isLoading} className="btn btn-warning">Jo'natish {isLoading ? <i class=" mx-2 spinner-border spinner-border-sm text-dark" role="status"></i> : ''} </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {success ? <>
                <div className="isitAll">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 mx-auto">
                                <div className="d-flex justify-content-between flex-column connn">
                                  <div className="headerrr d-flex">
                                  <h3>21 yoshga to’lmagan farzandingiz bormi ?</h3>
                                    <label onClick={e => setCsex('yoq')} htmlFor="yoq" className='controls mywidth'>
                                      <FontAwesomeIcon icon={faClose}/>
                                    </label>
                                  </div>
                                    <div className="d-flex mx-auto align-items-center">
                                        <label onClick={e => setCsex('xa')} htmlFor="xa" className='controls mywidth'>
                                            <input onChange={e => setSon('xa')} type="radio" name="gender" id="xa" />
                                            <span></span>
                                            Bor
                                        </label>
                                        <label onClick={e => setCsex('yoq')} htmlFor="yoq" className='controls mywidth'>
                                            <input onChange={e => setSon('yoq')} type="radio" name="gender" id="yoq" />
                                            <span></span>
                                            Yo'q
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </> : <></>}
        </>
    )
}

export default Children