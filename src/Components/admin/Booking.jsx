import { getDatabase, onValue, ref, update } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { app } from '../../Firebase/Firebase';

const Booking = () => {
    const database = getDatabase(app);
    const [user, setUser] = useState([]);
    const [show, setShow] = useState(false);
    const [input, setInput] = useState();
    const [selectid, setSelectid] = useState();
    useEffect(() => {
        userlist();
    }, []);
    const userlist = () => {
        const userRef = ref(database, "booking");
        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const list = Object.keys(data)
                    .map((id) => ({ id, ...data[id] }))
                    .filter(item => (
                        item.status && item.status.includes("Pending")
                    ));
                setUser(list)
            } else {
                console.log("data not Found")
            }
        });
    };
    
    const handleApprove = async (id) => {
        await update(ref(database, `booking/${id}`), { status: "Approve" });
        userlist();
    }
    const handleReject = async (id) => {
        await update(ref(database, `booking/${id}`), { status: "Reject" });
        userlist();
    }
    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setSelectid(id)
        setShow(true);
    }
    const handleChange = (e) => {
        setInput(e.target.value);
    };
    return (
        <div className='p-2'>
            <h1 className='text-center mb-4'>Pending appointment</h1>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">End Date</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {user && user.map((item, index) => (
                        <tr key={item.id}>
                            <td scope="row">{index + 1}</td>
                            <td>{item.startdate}</td>
                            <td>{item.enddate}</td>
                            
                            <td>
                                <button className='btn btn-success mx-2' onClick={() => handleApprove(item.id)}>Approve</button>
                                <button className='btn btn-danger' onClick={() => handleReject(item.id)}>Reject</button>
                                </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Booking