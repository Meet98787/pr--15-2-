import { push, ref } from 'firebase/database';
import React, { useState } from 'react'
import { database } from '../Firebase/Firebase';

const Addtestimonial = () => {
    const [input, setInput] = useState({});
    const handleSubmit = async (e) => {
        e.preventDefault()
            try {
                await push(ref(database, "testimonial"), input);
                setInput();
            } catch (e) {
                console.error("Error adding document: ", e);
            }
    };
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
        console.log(input)
    };
  return (
    <div>
        <h1>Book Now</h1>
        <form onSubmit={handleSubmit}>
            <textarea name='testimonial' onChange={handleChange}>

            </textarea>
        <button className="btn btn-primary m-5" type='submit' >BOOK NOW</button>
        </form>
    </div>
  )

}

export default Addtestimonial