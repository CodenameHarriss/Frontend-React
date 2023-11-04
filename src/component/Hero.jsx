import React from 'react'

function Hero() {
    return (
        <div className='p-5 text-white' style={{ backgroundImage: `url("https://c4.wallpaperflare.com/wallpaper/175/985/284/abstract-3d-digital-art-dark-wallpaper-preview.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className='container text-center'>
                <h1 className='fw-bold text-white'>Welcome to Website</h1>
                <p className='text-title mt-4'>Discover amazing things with Bootstrap 5.</p>
                <a href="" className='btn btn-primary rounded-pill'>Get Started</a>
            </div>
        </div>
    )
}

export default Hero