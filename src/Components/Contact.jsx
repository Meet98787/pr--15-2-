import { onValue, push, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { database } from '../Firebase/Firebase';

function Contact() {
    const [user, setUser] = useState();
    const [input,setInput] = useState();
    useEffect(() => {
        userlist();
    }, []);
    const userlist = () => {
        const userRef = ref(database, "contect");
        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const list = data
                setUser(list)
                console.log(user)
                
            } else {
                console.log("data not Found")
            }
        });
    };
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedInput = { ...input, "status": "Pending" };
            await push(ref(database, "contectus"), updatedInput);
            setInput();
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    };
    return (
        <>
            <section className="contact_us section-padding p-5" id='contactus'>
                <div className="container">
                    <div className="row">
                        <h3>Get in touch using the form below</h3>
                        <div className="col-md-6 shadow  mt-4 p-4">
                            <div className="contact_form ">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label className="control-label">Full Name <span>*</span></label>
                                        <input type="text" name="fullname" className="form-control white_bg" id="fullname"
                                        onChange={handleChange} required />
                                    </div><br />
                                    <div className="form-group">
                                        <label className="control-label">Email Address <span>*</span></label>
                                        <input type="email" name="email" className="form-control white_bg" id="emailaddress" 
                                        onChange={handleChange} required />
                                    </div><br />
                                    <div className="form-group">
                                        <label className="control-label">Phone Number <span>*</span></label>
                                        <input type="text" name="contactno" className="form-control white_bg" id="phonenumber" 
                                        onChange={handleChange} required maxlength="10" pattern="[0-9]+" />
                                    </div><br />
                                    <div className="form-group">
                                        <label className="control-label">Message <span>*</span></label>
                                        <textarea className="form-control white_bg" name="message" rows="4" onChange={handleChange} required></textarea>
                                    </div><br />
                                    <div className="form-group">
                                        <button className="btn btn-info text-white form-control fw-bold" type="submit" name="send" >Send Message <span className="angle_arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></span></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <h3 className='ms-4 '>Contact Info</h3>
                            <div className="contact_detail  p-4">
                                {user &&
                                <ul>
                                    <li className='list-unstyled d-flex'>
                                        <div className="icon_wrap"><i className="fa-solid fa-location-dot me-3 fs-5"></i></div>
                                        <div className="contact_info_m mb-3 fs-5  ">{user.address}</div>
                                    </li>
                                    <li className='list-unstyled d-flex'>
                                        <div className="icon_wrap"><i className="fa fa-phone me-3 fs-5"></i></div>
                                        <div className="contact_info_m mb-3"><a className='text-decoration-none fs-5 text-black' href="tel:61-1234-567-90">{user.contect}</a></div>
                                    </li>
                                    <li className='list-unstyled d-flex'>
                                        <div className="icon_wrap"><i className="fa-regular fa-envelope me-3 fs-4"></i></div>
                                        <div className="contact_info_m mb-3"><a className='text-decoration-none fs-5 text-black' href="mailto:contact@exampleurl.com">{user.email}</a></div>
                                    </li>
                                </ul>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}

export default Contact