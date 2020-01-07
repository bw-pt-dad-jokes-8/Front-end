import React from 'react';
import axios from 'axios';



export const axiosWithAuth =() => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        }
    });
};

export default function(){
    if(localStorage.getItem('token')){
        return <p>Authorized</p>;
    }
    return <p>Not Authorized</p>;
}
