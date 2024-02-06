// import React from 'react'

// function Login() {
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await update(ref(database, `user/${id}`), input);
//             setId(null);
//             setInput({
//                 name: '',
//                 email: '',
//                 password: '',
//             });
//             setEdit(false);
//         } catch (error) {
//             console.error("Error updating document: ", error);
//         }
//     };
//     return (
//         <>
//             <div className="container mx-auto">
//                 <form action="" onSubmit={handleSubmit} className="m-auto col-4 border rounded shadow  p-5 ">
//                     <label htmlFor="">Email</label>
//                     <input type="text" className='form-control' placeholder='Enter your email' />
//                     <label htmlFor="">Password</label>
//                     <input type="password" className='form-control' placeholder='Enter your password' />
//                 </form>
//             </div>
//         </>
//     )
// }

// export default Login

import React, { useState } from 'react';
import { app, auth } from '../Firebase/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);

            console.log('Logged in successfully!', userCredential.user);
            navigate("/admin");
        } catch (error) {
            console.error("Error during login: ", error.message);
        }
    };

    return (
        <>
            <h1 className='text-center mb-3'>Login</h1>
            <form onSubmit={handleSubmit} className="m-auto col-4 border rounded shadow p-5">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    className='form-control mb-3'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    className='form-control'
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="btn btn-primary mt-3 form-control">Login</button>
            </form>
        </>
    );
}

export default Login;
