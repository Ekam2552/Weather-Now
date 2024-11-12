import './WeatherData.scss';

import DataGrid from '../DataGrid/DataGrid.jsx';

const WeatherData = ({ weatherData }) => {
  return (
    <div className="WeatherDataDiv">
      <DataGrid>
        <div className="GeneralInfo">
          <span>{weatherData.name}</span>
          <span>{weatherData.country}</span>
        </div>
        <div className="time">
          <span>{weatherData.readableDate}</span>
        </div>
      </DataGrid>
      <DataGrid>
        <div className="PopulationHeading">
          <span>Population</span>
        </div>
        <div className="Population">
          <span>{weatherData.population}</span>
        </div>
      </DataGrid>
      <DataGrid>
        <div className="Temperature">
          <span>Temperature</span>
          <span>{weatherData.temperature}</span>
        </div>
        <div className="DayOrNight">
          <span>{weatherData.day}</span>
        </div>
        <table className="AdditionalInfo1">
          <tbody>
            <tr>
              <td>Cloud Cover</td>
              <td>{weatherData.cloud_cover}</td>
            </tr>
            <tr>
              <td>Precipitation</td>
              <td>{weatherData.precipitation}</td>
            </tr>
            <tr>
              <td>Rain</td>
              <td>{weatherData.rain}</td>
            </tr>
          </tbody>
        </table>
      </DataGrid>
      <DataGrid>
        <table className="AdditionalInfo2">
          <tbody>
            <tr>
              <td>Relative Humidity</td>
              <td>{weatherData.relativeHumidity}</td>
            </tr>
            <tr>
              <td>Rainfall</td>
              <td>{weatherData.showers}</td>
            </tr>
            <tr>
              <td>Snowfall</td>
              <td>{weatherData.snowfall}</td>
            </tr>
            <tr>
              <td>WindSpeed</td>
              <td>{weatherData.windSpeed}</td>
            </tr>
          </tbody>
        </table>
      </DataGrid>
    </div>
  );
};

export default WeatherData;
