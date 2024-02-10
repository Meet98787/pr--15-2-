import React, { useEffect, useState } from 'react'
import { database } from '../../Firebase/Firebase';
import { onValue, ref, update } from 'firebase/database';

const Contectlist = () => {
    const [user,setUser] = useState()
    useEffect(() => {
        userlist();
    }, []);
    const userlist = () => {
        const userRef = ref(database, "contectus");
        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const list = Object.keys(data).map((id) => ({ id, ...data[id] }))
                console.log(list)
                setUser(list)
            } else {
                console.log("data not Found")
            }
        });
    };
    const handleRead = async (id) => {
        await update(ref(database, `contectus/${id}`), { status: "Readed" });
        userlist();
    }
  return (
    <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">contectno</th>
                        <th scope="col">message</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {user && user.map((item,index) => (
                        <tr key={item.id}>
                            <td scope="row">{index + 1}</td>
                            <td>{item.fullname}</td>
                            <td>{item.email}</td>
                            <td>{item.contactno}$</td>
                            <td>{item.message}</td>
                            <td>
                            {item.status === "Pending" ? (
                                <button className="btn btn-danger mx-2" onClick={()=>handleRead(item.id)}>Mark As Read</button>
                                ) : (
                                <button className="btn btn-danger mx-2">Readed</button>
                            )}
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
  )
}

export default Contectlist