import React from 'react'
import { listCars } from '../data/data'

function Content() {
    return (
        <div className='container'>
            <div className='text-center'>
                <h2 className='fw-bold mt-2'>My Content Cars</h2>
            </div>
            <div className='row col-md-10 col-lg-5 mt-2'>
                <form className="d-flex" role="search">
                    <input className="form-control border-info me-2" type="search" placeholder="Search for cars" aria-label="Search" />
                    <button className="btn btn-primary" type="submit">Search</button>
                </form>
            </div>
            <div className='row mt-3'>
                {listCars.map((items, index) =>
                    <div className='col-md-4 mt-2' key={index}>
                        <div className="card h-100 mb-3 border border-0 shadow">
                            <img src={items.image} className="card-img-top" />
                            <div className="card-body">
                                <h3 className="card-title fw-semibold">{items.title}</h3>
                                <p className="card-text">{items.description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* <div className='row mt-3'>
                <div className='col-md-4 mt-2'>
                    <div className="card h-100 mb-3 border border-0 shadow">
                        <img src="https://c4.wallpaperflare.com/wallpaper/666/167/593/dodge-challenger-srt-hellcat-widebody-dodge-challenger-2018-cars-4k-wallpaper-preview.jpg" className="card-img-top" alt="p1" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 mt-2'>
                    <div className="card h-100 mb-3 border border-0 shadow">
                        <img src="https://c4.wallpaperflare.com/wallpaper/840/954/346/dark-night-rain-car-wallpaper-preview.jpg" className="card-img-top" alt="p2" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 mt-2'>
                    <div className="card h-100 mb-3 border border-0 shadow">
                        <img src="https://c4.wallpaperflare.com/wallpaper/410/494/431/racing-f1-car-formula-1-race-car-hd-wallpaper-preview.jpg" className="card-img-top" alt="p3" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 mt-2'>
                    <div className="card h-100 mb-3 border border-0 shadow">
                        <img src="https://c4.wallpaperflare.com/wallpaper/308/488/991/nissan-skyline-gt-r-r34-sports-car-digital-art-need-for-speed-wallpaper-preview.jpg" className="card-img-top" alt="p4" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 mt-2'>
                    <div className="card h-100 mb-3 border border-0 shadow">
                        <img src="https://c4.wallpaperflare.com/wallpaper/513/196/980/mercedes-amg-petronas-f1-car-4k-wallpaper-preview.jpg" className="card-img-top" alt="p5" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 mt-2'>
                    <div className="card h-100 mb-3 border border-0 shadow">
                        <img src="https://c4.wallpaperflare.com/wallpaper/582/521/223/ford-mustang-car-muscle-cars-wallpaper-preview.jpg" className="card-img-top" alt="p6" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='mt-3'>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-end">
                        <li className="page-item disabled">
                            <a className="page-link">Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Content