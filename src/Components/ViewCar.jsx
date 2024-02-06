import React from 'react'
import carbanner1 from '../Components/images/knowledge_base_bg.jpg'
import carbanner2 from '../Components/images/car_755x430.png'
import carbanner3 from '../Components/images/featured-img-3.jpg'


function ViewCar() {
    return (
        <>
            <div className="view">
                <div className="container">
                    <div className="d-flex">
                        <div className="col d-flex">
                            <div className="p-4"><img src={carbanner1} alt="" className="src" />
                            </div>
                            <div className="col p-4 ">
                                <div className="choice p-2  ">
                                    <p className='fs-5 fw-bold'>BMW,ytb rvtr</p>
                                    <span className='fs-5 text-dark'>$859/Day</span>
                                </div>
                                <div className="car-dsc text-start">
                                    <h5>Key Specs & Features of BMW</h5>
                                    <div className="d-flex">
                                        <div className="col-9 p-2">
                                            <ul className='lh-lg' >
                                                <li>Engine  <span className='fw-bold ms-4 text-end'> 998cc </span></li>
                                                <li>Torque  <span className='fw-bold ms-4 text-end'> 82.1Nm </span></li>
                                                <li>Mileage  <span className='fw-bold ms-4 text-end'> 24.39 - 24.9 kmpl </span></li>
                                                <li>Global NCAP Safety Rating  <span className='fw-bold ms-4 text-end'> 2 Star </span></li>
                                            </ul>
                                        </div>
                                        <div className="col-9 p-2">
                                            <ul className='lh-lg'>

                                                <li>Power  <span className='fw-bold ms-4 text-end'> 55.92 - 65.71 bhp</span></li>
                                                <li>Transmission  <span className='fw-bold ms-4 text-end'> Manual / Automatic</span></li>
                                                <li>Fuel  <span className='fw-bold ms-4 text-end'> CNG / Petrol</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div >
                                <div className=' '>
                                    <button className='btn btn-danger mt-3'>Rent Car</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="col d-flex">
                            <div className="p-4"><img src={carbanner2} alt="" className="src" />
                            </div>
                            <div className="col p-4 ">
                                <div className="choice p-2  ">
                                    <p className='fs-5 fw-bold'>Toyota,ytb rvtr</p>
                                    <span className='fs-5 text-dark'>$345345/Day</span>
                                </div>
                                <div className="car-dsc text-start">
                                    <h5>Key Specs & Features of Toyota</h5>
                                    <div className="d-flex">
                                        <div className="col-9 p-2">
                                            <ul className='lh-lg' >
                                                <li>Engine  <span className='fw-bold ms-4 text-end'> 998cc </span></li>
                                                <li>Power  <span className='fw-bold ms-4 text-end'> 65.71 bhp</span></li>
                                                <li>Mileage  <span className='fw-bold ms-4 text-end'> 24.39 kmpl </span></li>
                                            </ul>
                                        </div>
                                        <div className="col-9 p-2">
                                            <ul className='lh-lg'>

                                                <li>Transmission  <span className='fw-bold ms-4 text-end'> Manual </span></li>
                                                <li>Fuel  <span className='fw-bold ms-4 text-end'> Petrol</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div >
                                <div className=' '>
                                    <button className='btn btn-danger mt-3'>Rent Car</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="col d-flex">
                            <div className="p-4"><img src={carbanner3} alt="" className="src" />
                            </div>
                            <div className="col p-4 ">
                                <div className="choice p-2  ">
                                    <p className='fs-5 fw-bold'>Nissan,Lorem ipsum </p>
                                    <span className='fs-5 text-dark'>$563/Day</span>
                                </div>
                                <div className="car-dsc text-start">
                                    <h5>Key Specs & Features of Nissan</h5>
                                    <div className="d-flex">
                                        <div className="col-8 p-2">
                                            <ul className='lh-lg' >
                                                <li>Engine  <span className='fw-bold ms-4 text-end'> 998cc </span></li>
                                                <li>Power  <span className='fw-bold ms-4 text-end'> 65.71 bhp</span></li>
                                                <li>Mileage  <span className='fw-bold ms-4 text-end'> 24.9 kmpl </span></li>
                                            </ul>
                                        </div>
                                        <div className="col-8 p-2">
                                            <ul className='lh-lg'>
                                                <li>Transmission  <span className='fw-bold ms-4 text-end'> Automatic </span></li>
                                                <li>Fuel  <span className='fw-bold ms-4 text-end'> Petrol</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div >
                                <div className=' '>
                                    <button className='btn btn-danger mt-3'>Rent Car</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="col d-flex">
                            <div className="p-4"><img src={carbanner3} alt="" className="src" />
                            </div>
                            <div className="col p-4 ">
                                <div className="choice p-2  ">
                                    <p className='fs-5 fw-bold'>Maruti,Lorem ipsum </p>
                                    <span className='fs-5 text-dark'>$5636/Day</span>
                                </div>
                                <div className="car-dsc text-start">
                                    <h5>Key Specs & Features of Maruti</h5>
                                    <div className="d-flex">
                                        <div className="col-8 p-2">
                                            <ul className='lh-lg' >
                                                <li>Engine  <span className='fw-bold ms-4 text-end'> 998cc </span></li>
                                                <li>Power  <span className='fw-bold ms-4 text-end'> 65.71 bhp</span></li>
                                                <li>Mileage  <span className='fw-bold ms-4 text-end'> 24.9 kmpl </span></li>
                                            </ul>
                                        </div>
                                        <div className="col-8 p-2">
                                            <ul className='lh-lg'>
                                                <li>Transmission  <span className='fw-bold ms-4 text-end'> Automatic </span></li>
                                                <li>Fuel  <span className='fw-bold ms-4 text-end'> Petrol</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div >
                                <div className=' '>
                                    <button className='btn btn-danger mt-3'>Rent Car</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="col d-flex">
                            <div className="p-4"><img src={carbanner2} alt="" className="src" />
                            </div>
                            <div className="col p-4 ">
                                <div className="choice p-2  ">
                                    <p className='fs-5 fw-bold'>Toyota,ytb rvtr</p>
                                    <span className='fs-5 text-dark'>$345345/Day</span>
                                </div>
                                <div className="car-dsc text-start">
                                    <h5>Key Specs & Features of Toyota</h5>
                                    <div className="d-flex">
                                        <div className="col-9 p-2">
                                            <ul className='lh-lg' >
                                                <li>Engine  <span className='fw-bold ms-4 text-end'> 998cc </span></li>
                                                <li>Power  <span className='fw-bold ms-4 text-end'> 65.71 bhp</span></li>
                                                <li>Mileage  <span className='fw-bold ms-4 text-end'> 24.39 kmpl </span></li>
                                            </ul>
                                        </div>
                                        <div className="col-9 p-2">
                                            <ul className='lh-lg'>

                                                <li>Transmission  <span className='fw-bold ms-4 text-end'> Manual </span></li>
                                                <li>Fuel  <span className='fw-bold ms-4 text-end'> Petrol</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div >
                                <div className=' '>
                                    <button className='btn btn-danger mt-3'>Rent Car</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewCar