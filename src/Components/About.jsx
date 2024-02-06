import React from 'react'
import image from '../Components/images/banner-image.jpg'


function About() {
    return (
        <>

            <div className="main-banner">
                <img src={image} alt="" className="img-fluid" style={{ width: "100%" }} />

            </div>

            <div className="about-sec">
                <div className="container py-5">
                    <div className="about text-center">
                        <p className='fs-1 fw-light'><span className='fw-bold'>Find the Best</span> Car For You </p>
                        <div className="ab-dsc fs-5">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, ab minus. Nihil consequuntur ipsam ut placeat eius provident officiis laboriosam porro? Obcaecati vel quas nihil temporibus aperiam qui voluptatum sequi deserunt repudiandae quod, commodi nostrum! Quia pariatur eos, molestias vitae id maiores dolor optio eaque, reprehenderit, nesciunt in tempora quasi!</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About