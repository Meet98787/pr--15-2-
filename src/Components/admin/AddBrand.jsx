import { getDatabase, onValue, push, ref, remove, update } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { app, database } from '../../Firebase/Firebase';

const AddBrand = () => {
    const database = getDatabase(app);
    const [input, setInput] = useState();
    const [user, setUser] = useState([]);
    const [id, setId] = useState(null);
    const [edit, setEdit] = useState(false);
    useEffect(() => {
        userlist();
    }, []);

    const userlist = () => {
        const userRef = ref(database, "brand");
        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const list = Object.keys(data).map((id) => ({ id, ...data[id] }));
                setUser(list)
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

        if (edit && id) {
            try {
                await update(ref(database, `brand/${id}`), input);
                setId(null);
                setInput();
                setEdit(false);
            } catch (e) {
                console.error("Error updating document: ", e);
            }
        } else {
            try {
                await push(ref(database, "brand"), input);
                setInput();
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    };

    const handleDelete = async (id) => {
        try {
            await remove(ref(database, `brand/${id}`));
            setUser((prevUser) => prevUser.filter((item) => item.id !== id));
        } catch (e) {
            console.error("Error deleting document: ", e);
        }
    };

    const handleEdit = (id) => {
        console.log(id)
        setInput(user.find((item) => item.id === id) || {});
        setId(id);
        setEdit(true);
    };

    return (
        <>
            <h1 className="text-center mt-4">Manage Brands</h1>
            <div className="container">
                <form onSubmit={handleSubmit} className="m-auto col-3 mt-4">
                    <label htmlFor="name" className=' fs-5'>Brand Name :</label>
                    <input type="text" className="form-control" name="name" placeholder='Enter brand name' value={input ? input.name : ""} onChange={handleChange} />
                    <button className="btn btn-primary form-control mt-3">{edit ? 'Update' : 'Add'}</button>
                </form>
                <table className="table table-hover mt-4">
                    <thead>
                        <tr className='text-center'>
                            <th className="col-3 fs-5">Id</th>
                            <th className="col-3 fs-5">Name</th>
                            <th className="col-3 fs-5">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user && user.map((item, index) => (
                            <tr key={item.id} className='text-center col-3'>
                                <td scope="row" className='col-3 fs-5'>{index + 1}</td>
                                <td className='col-3 fs-5'>{item.name}</td>
                                <td className='col-3 '>
                                    <button className="btn btn-warning text-white" onClick={() => handleEdit(item.id)}>Edit</button>
                                    <button className="btn btn-danger mx-2" onClick={() => handleDelete(item.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default AddBrand