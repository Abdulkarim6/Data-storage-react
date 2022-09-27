import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { DeleteItem, SetItemLS } from '../../utilitis/SetItemLS';

const Fakedb = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            {
                users.map(user => <User user={user} key={user.id}></User>)
            }
        </div>
    );
};

const User = (props) => {
    const { id, name, phone } = props.user;

    // const add = () => click(id)
   
    const click = (id) => SetItemLS(id);

    const deleteItem = (id) => DeleteItem(id);

    
    return ( 
        <div style={{ border: '2px solid red', margin: '20px', padding: '10px' }}>
            <h2> id : {id} </h2>
            <h3> name : {name} </h3>
            <h4> phone : {phone} </h4>
            {/* <button onClick={add}>add to cart</button> */}
            <button onClick={() => click(id)}>add to cart</button>
            <button onClick={()=> deleteItem(id) }>delete item</button>
        </div>
    )
}

export default Fakedb;