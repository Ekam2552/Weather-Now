import './App.scss';
import { useState } from 'react';

import Header from './Components/Header/Header.jsx';
import LocationSearch from './Components/LocationSearch/LocationSearch.jsx';
import WeatherData from './Components/WeatherData/WeatherData.jsx';

import fetchData from './DataFetch.js';

function App() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState('');
  const handleSearch = async (city) => {
    try {
      const locationInfo = await fetchData(city);
      setErr('');
      setData(locationInfo);
    } catch (error) {
      console.error('Error in handleSearch:', error);
      setData(null);
      setErr('Error in fetching Data.');
    }
  };

  return (
    <main id="main">
      <Header />
      <LocationSearch onSearch={handleSearch} />
      {!data && !err && (
        <p className="initalMessage">Enter a location to know the weather.</p>
      )}
      {err && <p className="error">{err}</p>}
      {data && <WeatherData weatherData={data} />}
    </main>
  );
}

export default App;
