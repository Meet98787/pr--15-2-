import { getDatabase, onValue, push, ref, remove, update } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { app } from '../../Firebase/Firebase';

const Addvehicles = () => {
    const database = getDatabase(app);
    const [input, setInput] = useState();
    const [vehicles, setVehicles] = useState([]);
    const [brand, setBrand] = useState();
    const [id, setId] = useState(null);
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        userlist();
        brandlist();
    }, []);
    const userlist = () => {
        const userRef = ref(database, "vehicles");
        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const list = Object.keys(data).map((id) => ({ id, ...data[id] }));
                setVehicles(list)
            } else {
                console.log("data not Found")
            }
        });
    };
    const brandlist = () => {
        const userRef = ref(database, "brand");
        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const list = Object.keys(data).map((id) => ({ id, ...data[id] }));
                setBrand(list)
                console.log(brand)
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
                await update(ref(database, `vehicles/${id}`), input);
                setId(null);
                setInput();
                setEdit(false);
            } catch (e) {
                console.error("Error updating document: ", e);
            }
        } else {
            try {
                await push(ref(database, "vehicles"), input);
                setInput();
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    };

    const handleDelete = async (id) => {
        try {
            await remove(ref(database, `vehicles/${id}`));
            setVehicles((prevUser) => prevUser.filter((item) => item.id !== id));
        } catch (e) {
            console.error("Error deleting document: ", e);
        }
    };

    const handleEdit = (id) => {
        console.log(id)
        setInput(vehicles.find((item) => item.id === id) || {});
        setId(id);
        setEdit(true);
        
    };

    return (
        <div>
            <h1 className="text-center">Manage Vehicles</h1>
            <form onSubmit={handleSubmit} className="m-auto col-3">
                <label htmlFor="name">Name</label>
                <input type="text"  class="form-control" name="name" value={input ? input.name : ""} onChange={handleChange} />
                <label>Price Per Day(in USD)</label>
                <input type="number"  class="form-control mb-2" name="price"  value={input ? input.price : ""} onChange={handleChange} />
                <label>Model Year</label>
                <input type="number"  class="form-control mb-2" name="year"  value={input ? input.year : ""} onChange={handleChange} />
                <label>Seating Capacity</label>
                <input type="number"  class="form-control mb-2" name="capacity"  value={input ? input.capacity : ""} onChange={handleChange} />
                <label>Image Url</label>
                <input type="text"  class="form-control mb-2" name="url"  value={input ? input.url : ""} onChange={handleChange} />
                <select className="form-select mb-3" id="Specialization" name="brand" onChange={handleChange}>
                    <option value="">Select Brand</option>
                    {brand && brand.map((item, index) => (
                                <>
                                <option key={index} value={item.name}>{item.name}</option>
                                </>
                            ))}
                </select>
                <select className="form-select mb-3" id="Specialization" name="fuel" onChange={handleChange}>
                    <option value="">Select fule</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Cng">Cng</option>
                    <option value="Diesel">Diesel</option>
                    
                </select>
                <button className="btn btn-primary">{edit ? 'Update' : 'Add'}</button>
            </form>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Price Per Day</th>
                        <th scope="col">capacity</th>
                        <th scope="col">year</th>
                        <th scope="col">fuel</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicles && vehicles.map((item,index) => (
                        <tr key={item.id}>
                            <td scope="row">{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.brand}</td>
                            <td>{item.price}$</td>
                            <td>{item.capacity}</td>
                            <td>{item.year}</td>
                            <td>{item.fuel}</td>
                            <td>
                                <button className="btn btn-danger mx-2" onClick={() => handleDelete(item.id)}>Delete</button>
                                <button className="btn btn-warning" onClick={() => handleEdit(item.id)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Addvehicles