import React, { useState, useEffect } from 'react'
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

function Contact() {

    const [form, setForm] = useState({
        name: '', email: '', message: ''
    })

    const handleChange = (e) => {
        // console.log(e.target.name, e.target.value)
        // e.preventDefault();
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleAddData = async () => {

        if (form.name === '' || form.name === '' || form.message === '') {
            Swal.fire({
                icon: 'error',
                title: 'กรุณากรอกข้อมูลให้ครบ',
            });
            return;
        }

        await addDoc(collection(db, 'contact'), form).then((res) => {
            console.log(res)
            Swal.fire({
                icon: 'success',
                title: 'ส่งข้อมูลเสร็จสิ้น',
            });
            setForm({ name: '', email: '', message: '' })
        }).catch(err => console.log(err))
    }

    const image = 'https://c4.wallpaperflare.com/wallpaper/177/182/521/abstract-fantasy-art-simple-background-digital-art-wallpaper-preview.jpg';

    return (
        <div className='container'>
            <div className='text-center mt-2'>
                <h2 className='mt-2'>Contact to Me</h2>
            </div>
            <div className='border border-0 mb-3 mt-2'>
                <div className='row g-0'>
                    <div className='col-md-12 text-center'>
                        <img src={image} alt="" className="img-fluid rounded" />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className='col-md-8'>
                            <div className="mb-3">
                                <label className="form-label">NAME :</label>
                                <input value={form.name} onChange={handleChange} type="text" name='name' className="form-control" placeholder='NAME' />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">EMAIL :</label>
                                <input value={form.email} onChange={handleChange} type="email" name='email' className="form-control" placeholder='EMAIL' />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">MESSAGE :</label>
                                <textarea value={form.message} onChange={handleChange} name='message' className="form-control" rows="3" placeholder='MESSAGE'></textarea>
                            </div>
                            <div className='d-grid gap-2'>
                                <button onClick={handleAddData} type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact