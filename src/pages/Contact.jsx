import React, { useState } from 'react'
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

function Contact() {

    const [form, setForm] = useState({
        name: '', email: '', message: ''
    })

    const handleSubmit = (e) => {

        e.preventDefault();

        if (form.name === '' || form.name === '' || form.message === '') {
            Swal.fire({
                icon: 'error',
                title: 'กรุณากรอกข้อมูลให้ครบ',
            });
            return;
        }

        const contact = {
            name: form.name,
            email: form.email,
            message: form.message
        }

        addDoc(collection(db, 'contact'), contact).then((res) => {
            //console.log(res)
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
                    <form onSubmit={handleSubmit}>
                        <div className='d-flex justify-content-center'>
                            <div className='col-md-8'>
                                <div className="mb-3">
                                    <label className="form-label">Name :</label>
                                    <input onChange={e => setForm({ ...form, name: e.target.value })} type="text" name='name' className="form-control" placeholder='name' />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email :</label>
                                    <input onChange={e => setForm({ ...form, email: e.target.value })} type="email" name='email' className="form-control" placeholder='email' />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Message :</label>
                                    <textarea onChange={e => setForm({ ...form, message: e.target.value })} name='message' className="form-control" rows="3" placeholder='message'></textarea>
                                </div>
                                <div className='d-grid gap-2'>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact