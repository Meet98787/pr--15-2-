import { onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { database } from '../Firebase/Firebase';
import { Link } from 'react-router-dom';

const CarListing = () => {
    const [listcar, setListcar] = useState();
    useEffect(() => {
        userlist();
    }, []);
    const userlist = () => {
        const userRef = ref(database, "vehicles");
        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const list = Object.keys(data).map((id) => ({ id, ...data[id] }));
                setListcar(list)
            } else {
                console.log("data not Found")
            }
        });
    };
    
    return (
        <div>
        {listcar && listcar.map((item,index) => (
            <div className="d-flex">
            <div className="col d-flex">
                <div className="p-4"><img src={item.url} alt="" className="src" />
                </div>
                <div className="col p-4 ">
                    <div className="choice p-2  ">
                        <p className='fs-5 fw-bold'>{item.name}</p>
                        <span className='fs-5 text-dark'>${item.price}/Day</span>
                    </div>
                    <div className="car-dsc text-start">
                        <h5>Key Specs & Features of {item.brand}</h5>
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
                                    <li>Fuel  <span className='fw-bold ms-4 tex*t-end'> {item.fuel}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div >
                    <div className=' '>
                        <Link to="/bookcar" className='btn btn-danger mt-3' >Rent Car</Link>
                    </div>
                </div>
            </div>
        </div>
            
        ))}
        </div>
        
    )
}

export default CarListing