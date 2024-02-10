import React, { useEffect, useState } from "react";
import { getDatabase, ref, push, onValue, update, remove } from "firebase/database";
import { useNavigate } from "react-router";
import { app, auth } from "../Firebase/Firebase";

function Register() {
    const database = getDatabase(app);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [input, setInput] = useState();
    const [edit, setEdit] = useState(false);
    const navigate = useNavigate();
    const user = auth.currentUser;

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEmail(input.email);
        setPassword(input.password);

        if (input.contectno && input.contectno.toString().length !== 10) {
            alert("Contact number must be 10 characters long");
            return;
        }
        if (edit) {
            console.log("ok")
        } else {
            try {
                await auth.createUserWithEmailAndPassword(email, password);
                await push(ref(database, "user"), input);
                setInput();
                setPassword(null);
                setEmail(null);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    };
    return (
        <div className="container-fuild admin">
            <div className="container">
                <h1 className="text-center mb-4">Signup</h1>
                <form onSubmit={handleSubmit} className="col-md-6 offset-md-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" className="form-control mb-2" name="name" value={input ? input.name : ""} onChange={handleChange} required />

                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control mb-2" name="email" value={input ? input.email : ""} onChange={handleChange} required />
                    
                    <label htmlFor="password" className="form-label">Password</label>
                     <input type="password" className="form-control mb-2" name="password" value={input ? input.password : ""} onChange={handleChange} required />


                    <label htmlFor="contectno" className="form-label">Contact Number</label>
                    <input type="number" className="form-control mb-2" name="contectno" value={input ? input.contectno : ""} onChange={handleChange} required /> 
                    <label htmlFor="contectno" className="form-label">Date of Birth</label>
                    <input type="Date" className="form-control mb-2" name="dob" value={input ? input.dob : ""} onChange={handleChange} required /> 
                    <label>Address</label><br /> 
                    <textarea name="address" className="col-12" value={input ? input.address : ""} onChange={handleChange}></textarea><br /> 

                    <label htmlFor="contectno" className="form-label">Country</label> 
                    <input type="text" className="form-control mb-2" name="country" value={input ? input.country : ""} onChange={handleChange} required />
                    <label htmlFor="contectno" className="form-label">City</label>
                    <input type="text" className="form-control mb-2" name="city" value={input ? input.city : ""} onChange={handleChange} required />

                    <button className="btn btn-primary mt-2">{edit ? 'Update' : 'Signup'}</button>
                </form>

            </div>
        </div>
    );
}

export default Register;