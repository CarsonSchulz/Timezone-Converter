import React, { useContext } from 'react';
import { CityContext } from '../contexts/CityContext';
import { SettingsContext } from '../contexts/SettingsContext';

const AddCityDetails = ({ city }) => {
    const { addCity } = useContext(CityContext);
    const { toggleSearching } = useContext(SettingsContext);
    return(
        <div className="list-group-item time-search-item list-group-item-action" onClick={() => {addCity(city); toggleSearching()}}>
            <h1>{city.name}</h1>
            <span>{city.country}</span>
        </div>
    );
}

export default AddCityDetails;