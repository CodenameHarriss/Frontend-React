import React from 'react'

function Contact() {

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
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">NAME :</label>
                                    <input type="text" className="form-control" placeholder='NAME' />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">EMAIL :</label>
                                    <input type="email" className="form-control" placeholder='EMAIL' />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">MESSAGE :</label>
                                    <textarea className="form-control" rows="3" placeholder='MESSAGE'></textarea>
                                </div>
                                <div className='d-grid gap-2'>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact