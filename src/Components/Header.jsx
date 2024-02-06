import React from 'react'
import navimg from '../Components/images/logo.png'
import { Link } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth'
import { app } from '../Firebase/Firebase'


function Header({ logIn, setLogIn }) {
    const handleLogout = (e) => {
        e.preventDefault()
        const auth = getAuth(app);

        signOut(auth)
            .then(() => {
                console.log('User signed out');
                setLogIn(null)
            })
            .catch((error) => {
                console.error('Error signing out:', error);
            });
    }

    return (
        <>
            <div className="container p-4">
                <div className="logoheader d-flex flex-wrap justify-content-between">
                    <img src={navimg} alt="" className="col-2" />
                    <div className="mail d-flex">
                        <i className="fa-solid fa-envelope fs-4 border rounded-circle p-3 "></i>
                        <div className="mail-dsc">
                            <p className='ms-2 mb-0 fw-bold mt-1'>FOR SUPPORT MAIL US :</p>
                            <p className='ms-2 mb-0'><a href="" className='text-decoration-none text-dark'>info@example.com</a></p>
                        </div>
                    </div>
                    <div className="call d-flex">
                        <i className="fa-solid fa-phone fs-4 border rounded-circle p-3"></i>
                        <div className="call-dsc">
                            <p className='ms-2 mb-0 fw-bold mt-1'>SERVICE HELPLINE CALL US :</p>
                            <p className='ms-2 mb-0'><a href="" className='text-decoration-none text-dark'>+91-1234-5678-9</a></p>
                        </div>
                    </div>
                    <div className="icons d-flex ms-2 mt-4 fs-2">
                        <i className="me-2 fa-brands fa-square-facebook"></i>
                        <i className="me-2 fa-brands fa-square-twitter"></i>
                        <i className="me-2 fa-brands fa-linkedin"></i>
                        <i className="me-2 fa-brands fa-square-google-plus"></i>
                        <i className="me-2 fa-brands fa-instagram"></i>

                    </div>
                    <div className="btn-click mt-4">
                        {/* <button className="btn bg-info text-white fw-bold "> <a href="#login" className='text-decoration-none'>LOGIN / </a><a href="#register" className='text-decoration-none'>REGISTER</a> </button> */}
                        {!logIn ? <> <button className="btn bg-info text-white fw-bold "> <Link to="/login" className='text-decoration-none'>LOGIN / </Link>
                            <Link to="/signup" className='text-decoration-none'>REGISTER</Link></button> </> :
                            <Link href='#' className="text-decoration-none  btn btn-danger" onClick={handleLogout} to="/logout">Logout</Link>}
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-dark ">
                <div className="container">
                    <div className="collapse navbar-collapse p-2" >
                        <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link  text-white fs-5" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  text-white fs-5" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  text-white fs-5" href="#carlist">CarListing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  text-white fs-5" href="#">FAQs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  text-white fs-5" href="#contactus">Contact Us</a>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <button className='fs-5 border-1   px-4 py-1 me-2 rounded'><i className="fa-solid fa-circle-user "></i></button>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header