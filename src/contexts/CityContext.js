import React, { Component, createContext } from 'react';

export const CityContext = createContext();

class CityContextProvider extends Component {
    state = {
        cities: [
            { id: "5f1dceb964cca1175459e26a", name: 'Orlando', country: 'United States', tz_name: 'America/New_York' },
        ]
    }
    removeCity = (id) => {
        let filterArray = this.state.cities.filter(city => city.id !== id);
        this.setState({cities: filterArray});
    }
    addCity = (city) => {

        //  Check if in the list
        let stateCheck = this.state.cities.find(arrCity => arrCity.id === city.id);

        if(stateCheck === undefined) {

            //  Now we add to the list and return to the display
            this.setState(oldState => ({
                cities: [...oldState.cities, city]
            }));

        } else {
            console.error('CITY EXISTS');
        }
        
    }
    componentDidUpdate() {
        localStorage.setItem('cities', JSON.stringify(this.state.cities));
    }
    componentDidMount() {
        let cities = this.state.cities;

        if(localStorage.getItem('cities')) {
            this.setState({
                cities: JSON.parse(localStorage.getItem('cities'))
            })
        } else {
            localStorage.setItem('cities', JSON.stringify(cities));
        }
    }
    render() {
        return (
             <CityContext.Provider value={{...this.state, removeCity: this.removeCity, addCity: this.addCity}}>
                 {this.props.children}
             </CityContext.Provider>
        );
    }
}

export default CityContextProvider;