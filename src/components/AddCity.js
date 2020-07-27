import React, { useContext, useState } from 'react';
import { SettingsContext } from '../contexts/SettingsContext';
import AddCityDetails from './AddCityDetails';

const AddCity = () => {
    const { toggleSearching } = useContext(SettingsContext);
    const [results, addResults] = useState([]);
    const getResults = (value) => {
        if(value !== '') {
            fetch('https://carsons.me/api/?param=' + value)
                .then((response) => response.json())
                .then((data) => {
                    addResults(data.results);
                });
        } else {
            addResults([]);
        }
    }
    return (
        <div className='w-100'>
            <div className="time-search">
                <input type="text" placeholder="ex: Boston" onChange={(e) => getResults(e.target.value.toLowerCase())}/>
                <button onClick={() => toggleSearching()}>Cancel</button>
            </div>
            <div className="time-search-results">
                <div className="list-group list-group-flush time-list-group w-100">
                    {
                        results.map(city => {
                            return ( <AddCityDetails city={city} key={city.id} />)
                        })
                    }
                </div>
            </div>
        </div>
    );
} 

export default AddCity;