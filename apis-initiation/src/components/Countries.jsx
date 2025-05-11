import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';
const Countries = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all?fields=name,population,capital,flags')
            .then((response) =>
                setData(response.data));
    }, []);

    return (
        <div className="countries">
            <ul className="countries-list">
                {data.map((country, index) => (
                    <Card country={country} index={index}/>
                ))}
            </ul>
        </div>
    );
}

export default Countries;