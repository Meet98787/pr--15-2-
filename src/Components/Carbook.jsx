import { push, ref } from 'firebase/database';
import React, { useState } from 'react'
import { database } from '../Firebase/Firebase';

const Carbook = () => {
    const [input, setInput] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault()
            try {
                const updatedInput = { ...input, "status": "Pending" };
                await push(ref(database, "booking"), updatedInput);
                setInput();
            } catch (e) {
                console.error("Error adding document: ", e);
            }
    };
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };
  return (
    <div>
        <h1>Book Now</h1>
        <form action="" onSubmit={handleSubmit}>
        <input type="date" name='startdate'value={input ? input.startdate : ""} class="form-control m-2" placeholder='' onChange={handleChange} required />
        <input type="date" name='enddate'value={input ? input.enddate : ""} class="form-control m-2" placeholder='' onChange={handleChange} required />
        <input type="text" name='remark' />
        <button className="btn btn-primary m-5" type='submit' >BOOK NOW</button>
        </form>
    </div>
  )
}

export default Carbook