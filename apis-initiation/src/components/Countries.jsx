import axios from 'axios';
import React, { useEffect, useState } from 'react';
const Countries = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all?fields=name,capital,flags')
            .then((response) =>
                setData(response.data));
    }, []);

    return (
        <div className="countries">
            <ul className="countries-list">
                {data.map((country, index) => (
                    <li key={index}>{country.name.common}</li>
                ))}
            </ul>
        </div>
    );
}

export default Countries;