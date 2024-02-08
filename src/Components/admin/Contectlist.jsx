import React, { useEffect, useState } from 'react'
import { database } from '../../Firebase/Firebase';
import { onValue, ref } from 'firebase/database';

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
                                <button className="btn btn-danger mx-2" >Mark As read</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
  )
}

export default Contectlist