import { onValue, push, ref, update } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { database } from '../../Firebase/Firebase';

function Menagecontect() {

    const [input, setInput] = useState();



    const handleSubmit = async (e) => {
        console.log("ok")
        e.preventDefault();
            try {
             await update(ref(database, `contect`), { address: input.address });
             await update(ref(database, `contect`), { contect: input.contect });
             await update(ref(database, `contect`), { email: input.email });
            // await push(ref(database, "contect"), input);
            } catch (e) {
                console.error("Error updating document: ", e);
            }
    };
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };
  return (
    <div className="container-fuild admin">
        <div className="container">
            <h1 className="text-center mb-4">contect</h1>
            <form onSubmit={handleSubmit} className="col-md-6 offset-md-3">
                <label htmlFor="name" className="form-label">Address</label>
                <input type="text" className="form-control mb-2" name="address" value={input ? input.name : ""} onChange={handleChange} required />
                
                <label htmlFor="email" className="form-label">Contect Number</label>
                <input type="text" className="form-control mb-2" name="contect" value={input ? input.contect : ""} onChange={handleChange} required />
                
                <label htmlFor="password" className="form-label">Email</label>
                <input type="text" className="form-control mb-2" name="email" value={input ? input.email : ""} onChange={handleChange} required />
                
                <button className="btn btn-primary mt-2">Update</button>
            </form>
        </div>
        </div>
  )
}

export default Menagecontect