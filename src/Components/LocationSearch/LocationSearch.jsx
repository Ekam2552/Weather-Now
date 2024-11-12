import { useState } from 'react';

import './LocationSearch.scss';

const LocationSearch = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <div className="LocationSearch">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter Location"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default LocationSearch;
