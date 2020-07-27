import React, { Component, createContext } from 'react';

export const DateContext = createContext();

class DateContextProvider extends Component {
    state = {
        date: new Date(),
        offset: 0
    }
    updateDate = () => {
        let date = new Date();
        date.setHours(date.getHours() + this.state.offset);
        this.setState({
            date: date
        })
    }
    increaseOffset = () => {
        this.setState({
            offset: this.state.offset + 1
        })
    }
    decreaseOffset = () => {
        if(this.state.offset > 0) {
            this.setState({
                offset: this.state.offset - 1
            })            
        }
    }
    componentDidMount() {
        setInterval(this.updateDate, 1000);
    }
    render() {
        return (
             <DateContext.Provider value={{...this.state, increaseOffset: this.increaseOffset, decreaseOffset: this.decreaseOffset}}>
                 {this.props.children}
             </DateContext.Provider>
        );
    }
}

export default DateContextProvider;