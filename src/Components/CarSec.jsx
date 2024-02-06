import React from 'react'
import carbanner1 from '../Components/images/knowledge_base_bg.jpg'
import carbanner2 from '../Components/images/car_755x430.png'
import carbanner3 from '../Components/images/featured-img-3.jpg'

function CarSec() {
    const handleViewCar = () => {
        console.log()
    }
    return (
        <>

            <div className="car-sec" id='carlist'>
                <div className="container py-3">
                    <div className="car text-center ">
                        <button className='btn btn-info  text-white fw-bold rounded-pill px-4  fs-5'>New Car</button>
                        <div className="car-choice mt-5 d-flex flex-wrap">
                            <div className="col-4 shadow">
                                <div className="p-4"><img src={carbanner1} alt="" className="src" style={{ width: "100%" }} />
                                    <div className="choice p-2 d-flex justify-content-between">
                                        <p className='fs-5 fw-bold'>BMW,ytb rvtr</p>
                                        <span className='fs-5 text-dark'>$859/Day</span>
                                    </div>
                                    <div className="car-dsc text-start">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dolorum.
                                    </div >
                                    <div className='d-flex justify-content-end'>
                                        <button className='btn btn-danger mt-3' onClick={handleViewCar}>View Car</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 shadow">
                                <div className="p-4"><img src={carbanner2} alt="" className="src" style={{ width: "100%" }} />
                                    <div className="choice p-2 d-flex justify-content-between">
                                        <p className='fs-5 fw-bold'>BMW,Test Demoy</p>
                                        <span className='fs-5 text-dark'>$859/Day</span>
                                    </div>
                                    <div className="car-dsc text-start">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dolorum.
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <button className='btn btn-danger mt-3' onClick={handleViewCar}>View Car</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 shadow">
                                <div className="p-4"><img src={carbanner3} alt="" className="src" style={{ width: "100%" }} />
                                    <div className="choice p-2 d-flex justify-content-between">
                                        <p className='fs-5 fw-bold'>Nissan,Lorem ipsum </p>
                                        <span className='fs-5 text-dark'>$563/Day</span>
                                    </div>
                                    <div className="car-dsc text-start">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dolorum.
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <button className='btn btn-danger mt-3' onClick={handleViewCar}>View Car</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 shadow">
                                <div className="p-4"><img src={carbanner3} alt="" className="src" style={{ width: "100%" }} />
                                    <div className="choice p-2 d-flex justify-content-between">
                                        <p className='fs-5 fw-bold'>Maruti,Lorem ipsum </p>
                                        <span className='fs-5 text-dark'>$5636/Day</span>
                                    </div>
                                    <div className="car-dsc text-start">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dolorum.
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <button className='btn btn-danger mt-3' onClick={handleViewCar}>View Car</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 shadow">
                                <div className="p-4"><img src={carbanner2} alt="" className="src" style={{ width: "100%" }} />
                                    <div className="choice p-2 d-flex justify-content-between">
                                        <p className='fs-5 fw-bold'>Toyota,ytb rvtr</p>
                                        <span className='fs-5 text-dark'>$345345/Day</span>
                                    </div>
                                    <div className="car-dsc text-start">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dolorum.
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <button className='btn btn-danger ' onClick={handleViewCar}>View Car</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarSec