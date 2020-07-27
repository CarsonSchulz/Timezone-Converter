import React, { Component, createContext } from 'react';

export const SettingsContext = createContext();

class SettingsContextProvider extends Component {
    state = {
        isLightTheme: true,
        isSearching: false
    }
    toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme })
    }
    toggleSearching = () => {
        this.setState({ isSearching: !this.state.isSearching })
    }
    render() {
        return (
             <SettingsContext.Provider value={{...this.state, toggleTheme: this.toggleTheme, toggleSearching: this.toggleSearching}}>
                 {this.props.children}
             </SettingsContext.Provider>
        );
    }
}

export default SettingsContextProvider;