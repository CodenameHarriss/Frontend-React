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
        </div>
    )
}

export default Content