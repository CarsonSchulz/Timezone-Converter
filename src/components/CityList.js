import React, { useContext } from 'react';
import { CityContext } from '../contexts/CityContext';
import { SettingsContext } from '../contexts/SettingsContext';
import CityDetails from './CityDetails';
import { DateContext } from '../contexts/DateContext';

const CityList = () => {
    const { cities } = useContext(CityContext);
    const { toggleSearching } = useContext(SettingsContext);
    const { offset, increaseOffset, decreaseOffset } = useContext(DateContext);
    return (
        <div className="w-100">
            <div className="time-increase w-100 py-4">
                <button className="mx-4" onClick={() => {decreaseOffset()}}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M5 11H19V13H5z"/></svg></button>
                <div className="d-flex flex-wrap">
                    <span>{offset}</span>
                    <small className="align-self-center ml-2">hours</small>
                </div>
                <button className="mx-4" onClick={() => {increaseOffset()}}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M19 11L13 11 13 5 11 5 11 11 5 11 5 13 11 13 11 19 13 19 13 13 19 13z"/></svg></button>
            </div>
            <div className="w-100" id="timeCont">
                <div className="list-group list-group-flush time-list-group">
                    {
                        cities.map(city => {
                            return ( <CityDetails city={city} key={city.id} />)
                        })
                    }
                    <div className="list-group-item list-group-item-action time-add" onClick={() => toggleSearching()}>
                        <div className="w-100 py-4 d-flex flex-wrap align-items-center justify-content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M19 15L19 12 17 12 17 15 14.78 15 14 15 14 17 14.78 17 17 17 17 20 19 20 19 17 21.063 17 22 17 22 15 21.063 15zM4 7H15V9H4zM4 11H15V13H4zM4 15H12V17H4z"/></svg>
                        </div>
                    </div>
                </div>
            </div>                
        </div>
    )
}

export default CityList;