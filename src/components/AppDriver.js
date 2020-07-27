import React, { useContext } from 'react';
import { SettingsContext } from '../contexts/SettingsContext';
import CityList from './CityList';
import AddCity from './AddCity';

const AppDriver = () => {
    const { isSearching, isLightTheme, toggleTheme } = useContext(SettingsContext);
    return(
        <div className={`main-wrapper App py-5 ${isLightTheme ? 'main-wrapper-light' : 'main-wrapper-dark'}`}>
            <div className="container">
                <div className="row py-5 justify-content-center">
                    <div className="col-8 text-right">
                        <label className="theme-toggle-cont">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="theme-toggle-sun"><path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19H13V22H11zM11 2H13V5H11zM2 11H5V13H2zM19 11H22V13H19z"/><path transform="rotate(-134.999 5.99 18.01)" d="M4.989 16.51H6.989V19.51H4.989z"/><path transform="rotate(-45.001 18.01 5.99)" d="M16.51 4.99H19.511000000000003V6.99H16.51z"/><path transform="rotate(-134.983 5.99 5.99)" d="M4.489 4.99H7.489V6.99H4.489z"/><path transform="rotate(134.999 18.01 18.01)" d="M17.01 16.51H19.01V19.511000000000003H17.01z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="theme-toggle-moon"><path d="M12,11.807C9.349,9.155,8.7,5.261,10.049,2c-1.875,0.37-3.666,1.281-5.12,2.735c-3.905,3.905-3.905,10.237,0,14.142	c3.906,3.906,10.237,3.905,14.143,0c1.454-1.454,2.364-3.244,2.735-5.119C18.545,15.106,14.651,14.458,12,11.807z"/></svg>
                            <input type="checkbox" className="theme-toggle-box" onClick={() => toggleTheme()} />
                            <span className="theme-toggle-slider"></span>
                        </label>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="w-full text-center">
                            <h1 className="main-heading">Time Zone Converter</h1>
                            <p className="main-heading-lead">Add popular cities from around the world and compare them on the fly. Click the plus below to add a city.</p>
                        </div>
                        <div className={`time-wrapper ${isLightTheme ? 'time-wrapper-light' : 'time-wrapper-dark'}`}>
                            { isSearching ? <AddCity /> : <CityList /> }
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    );

}

export default AppDriver;