import React from 'react'

function Home() {
    return (
        <div className='container'>
            <div className='text-center'>
                <h4 className='mt-2'>Welcome To Homecomming</h4>
            </div>
            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://c4.wallpaperflare.com/wallpaper/840/954/346/dark-night-rain-car-wallpaper-preview.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://c4.wallpaperflare.com/wallpaper/663/420/862/car-purple-retrowave-landscape-wallpaper-preview.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://c4.wallpaperflare.com/wallpaper/404/19/616/dark-car-vehicle-ford-wallpaper-preview.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span aria-hidden="true"><i className="fa-solid fa-circle-chevron-right fa-rotate-180"></i></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span aria-hidden="true"><i className="fa-solid fa-circle-chevron-right"></i></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Home