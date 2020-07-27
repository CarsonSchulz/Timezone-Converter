import React from 'react';
import SettingsContextProvider from './contexts/SettingsContext';
import CityContextProvider from './contexts/CityContext';
import DateContextProvider from './contexts/DateContext';
import AppDriver from './components/AppDriver';

function App() {
	return (
		<SettingsContextProvider>
			<CityContextProvider>
				<DateContextProvider>
					<AppDriver />
				</DateContextProvider>
			</CityContextProvider>
		</SettingsContextProvider>
	);
}

export default App;
