import React from 'react'

function Footer() {
    return (
        <>

            <div className="footer p-5" style={{ backgroundColor: "#211F21" }}>
                <div className="container">
                    <div className="footer-sec d-flex flex-wrap  justify-content-between">
                        <div className="list col-6  p-4 ">
                            <h5 className='text-white'> ABOUT US</h5>
                            <ul className='list-unstyled'>
                                <li className='mt-4'><a href="" className='text-light text-decoration-none'><i className="fa-solid fa-chevron-right"></i> About Us</a></li>
                                <li className='mt-2'><a href="" className='text-light text-decoration-none '><i className="fa-solid fa-chevron-right"></i> FAQs</a></li>
                                <li className='mt-2'><a href="" className='text-light text-decoration-none '><i className="fa-solid fa-chevron-right"></i> Privacy</a></li>
                                <li className='mt-2'><a href="" className='text-light text-decoration-none '><i className="fa-solid fa-chevron-right"></i> Terms of Use</a></li>
                                <li className='mt-2'><a href="" className='text-light text-decoration-none '><i className="fa-solid fa-chevron-right"></i> Admin Login</a></li>
                            </ul>
                        </div>
                        <div className="list col-6 p-4">
                            <h4 className='text-white'> SUBSCRIBE NEWSLATTER</h4>
                            <input type="text" className='border rounded text-white text-center bg-transparent d-grid gap-3 col-8 mt-5 py-2 px-5 ' placeholder='Enter Email Address' /><br />
                            <button className='btn btn-info text-white mt-1 py-2 fw-bold fs-5 border-0  col-8'>Subscribe <i className="fa-solid fa-circle-chevron-right fs-6"></i></button><br />
                            <p className='text-white mt-2 '>We send Great deals and latest auto news to our <br /> subscribe users very week</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer