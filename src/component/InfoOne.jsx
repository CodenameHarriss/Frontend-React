import React from 'react'

function InfoOne() {
    return (
        <div className='p-3 bg-white text-dark'>
            <div className='container'>
                <div className="card border border-0 mb-3">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src="https://c4.wallpaperflare.com/wallpaper/268/96/863/anime-anime-girls-original-characters-short-hair-wallpaper-thumb.jpg" className="img-fluid rounded" alt="..." />
                        </div>
                        <div className="col-md-6 align-self-center">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoOne