import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';
const Countries = () => {
    const [data, setData] = useState([]);
    const [sortedData, setsortedData] = useState([]);
    const [playOnce, setplayOnce] = useState(true);
    const [rangeValue, setRangeValue] = useState(40);
    const [selectedRadio, setSelectedRadio] = useState("");
    const radios = ['Africa', 'Europe', 'Asia', 'Oceania', 'Amerique du Nord', 'Amerique du Sud'];

    useEffect(() => {
        if (playOnce) {
            axios.get('https://restcountries.com/v3.1/all?fields=name,population,capital,flags')
                .then((response) => {
                    setData(response.data);
                    setplayOnce(false);
                });
        }

        const sortedCountry = () => {
            const countryObg = Object.keys(data).map((i) => data[i]);
            const sortedArray = countryObg.sort((a, b) => {
                return b.population - a.population;
            });
            sortedArray.length = rangeValue;
            setsortedData(sortedArray);
        }
        sortedCountry();

    }, [data, rangeValue, playOnce]);

    return (
        <div className="countries">
            <div className="sort-container">
                <input type="range"min="1" max="250" value={rangeValue} onChange={(e) => setRangeValue(e.target.value)} />
                <ul>{radios.map( (radio) => {
                    return (
                        <li key={radio}>
                            <input type="radio" name="continent" id={radio} value={radio} onChange={(e) => setSelectedRadio(e.target.value)} />
                            <label htmlFor={radio}>{radio}</label>
                        </li>
                    )
                } )}</ul>
            </div>
            <ul className="countries-list">
                {data.map((country, index) => (
                    <Card key={country.name.common || index} country={country} index={index} />
                ))}
            </ul>
        </div>
    );
}

export default Countries;