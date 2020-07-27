import React, { useContext } from 'react';
import { DateContext } from '../contexts/DateContext';
import { CityContext } from '../contexts/CityContext';

const CityDetails = ({ city }) => {

    const { date } = useContext(DateContext);
    const { removeCity } = useContext(CityContext);

    const localDate = new Date(date.toLocaleString("en-US", {timeZone: city.tz_name}));
    const localHours = localDate.getHours();
    const localAMPM = amPm(localHours);
    const localTimeStr = addLeadingZero(hourFormat(localHours)) + ':' + addLeadingZero(localDate.getMinutes());
    const localDateStr = (localDate.getMonth() + 1 + '/' + localDate.getDate() + '/' + localDate.getFullYear());

    //  Return AM or PM depending on hour (must be 24hr format)
    function amPm(hour) {
        let str = "AM";
        if(hour >= 12) {
            str = "PM";
        }

        return str;
    }
    //  Convert 24 hour format to 12 hour format
    function hourFormat(hour) {
        if(hour >= 12) {
            hour = hour - 12;
        }
        if(hour === 0) {
            hour = 12;
        }
        return hour;
    }
    //  Add a leading zero if the number is less than 10 for formatting
    function addLeadingZero(num) {
        if (num < 10) {
            num = '0' + num;
        }
        return num;
    }
    //  Return a day or night icon depending on time of day.
    function timeIcon(hour) {
        //  Default day
        let icon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19H13V22H11zM11 2H13V5H11zM2 11H5V13H2zM19 11H22V13H19z"/><path transform="rotate(-134.999 5.99 18.01)" d="M4.989 16.51H6.989V19.51H4.989z"/><path transform="rotate(-45.001 18.01 5.99)" d="M16.51 4.99H19.511000000000003V6.99H16.51z"/><path transform="rotate(-134.983 5.99 5.99)" d="M4.489 4.99H7.489V6.99H4.489z"/><path transform="rotate(134.999 18.01 18.01)" d="M17.01 16.51H19.01V19.511000000000003H17.01z"/></svg>';
        if(hour >= 19 || hour <= 6) {
            icon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,11.807C9.349,9.155,8.7,5.261,10.049,2c-1.875,0.37-3.666,1.281-5.12,2.735c-3.905,3.905-3.905,10.237,0,14.142	c3.906,3.906,10.237,3.905,14.143,0c1.454-1.454,2.364-3.244,2.735-5.119C18.545,15.106,14.651,14.458,12,11.807z"/></svg>';
        }
        return icon;
    }

    return (
        <div className="list-group-item time-list-item">
            <div className="container-fluid pb-3 px-0">
                <div className="row" className="time-delete-wrapper">
                    <div className="col-12 text-right">
                        <button className="time-delete" id="timeDelete" onClick={() => {removeCity(city.id)}}>x</button>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-6">
                        <h2 className="time-city-name">{ city.name }</h2>
                    </div>
                    <div className="col-6">
                        <div className="w-100 d-flex justify-content-end">
                            <h1 className="time-time" id="timeTime">{ localTimeStr }</h1>
                            <span className="time-ampm mt-2">{ localAMPM }</span>
                        </div>
                        <div className="w-100 d-flex align-items-center justify-content-end">
                            <span className="time-date mr-2">{ localDateStr }</span>
                            <span dangerouslySetInnerHTML={{__html: timeIcon(localHours)}}></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CityDetails;