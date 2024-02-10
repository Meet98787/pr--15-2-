import { onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { database } from '../Firebase/Firebase';

const Showtestimonial = () => {
    const [testimonial, setTestimonial] = useState();
    useEffect(() => {
        userlist();
    }, []);
    const userlist = () => {
        const userRef = ref(database, "testimonial");
        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const list = Object.keys(data).map((id) => ({ id, ...data[id] }));
                setTestimonial(list)
            } else {
                console.log("data not Found")
            }
        });
    };

    return (
        <div>
        {testimonial && testimonial.map((item,index) => (
            <div className="m-auto col-5 border shadow-lg card">
                <p className="card-text">
                    {item.testimonial}
                </p>
            </div>
            
        ))}
        </div>
        
    )
}

export default Showtestimonial