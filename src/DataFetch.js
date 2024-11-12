const fetchData = async (location) => {
  try {
    const coordinatesAPIResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
    ); // Receiving co-ordinates of the location
    const coordinatesResult = await coordinatesAPIResponse.json();

    if (!coordinatesResult.results || coordinatesResult.results.length === 0) {
      throw new Error(`No location data found for city: ${location}`);
    }
    const latitude = coordinatesResult.results[0].latitude;
    const longitude = coordinatesResult.results[0].longitude;
    const locationInfo = {
      name: coordinatesResult.results[0].name,
      country: coordinatesResult.results[0].country,
      population: coordinatesResult.results[0].population,
    };

    const weatherAPIResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,rain,showers,snowfall,cloud_cover,wind_speed_10m&hourly=temperature_2m`
    ); // Retreiving Weather Info of the location
    const weatherResult = await weatherAPIResponse.json();
    const currentWeatherInfo = weatherResult.current;
    const currentWeatherUnits = weatherResult.current_units;
    locationInfo.temperature =
      currentWeatherInfo.temperature_2m + currentWeatherUnits.temperature_2m;
    locationInfo.day = '';
    if (currentWeatherInfo.is_day === 0) {
      locationInfo.day = 'Night';
    } else {
      location.day = 'Day';
    }
    locationInfo.cloud_cover =
      currentWeatherInfo.cloud_cover + currentWeatherUnits.cloud_cover;
    locationInfo.precipitation =
      currentWeatherInfo.precipitation + currentWeatherUnits.precipitation;
    locationInfo.rain = currentWeatherInfo.rain + currentWeatherUnits.rain;
    locationInfo.relativeHumidity =
      currentWeatherInfo.relative_humidity_2m +
      currentWeatherUnits.relative_humidity_2m;
    locationInfo.showers =
      currentWeatherInfo.showers + currentWeatherUnits.showers;
    locationInfo.snowfall =
      currentWeatherInfo.snowfall + currentWeatherUnits.snowfall;
    locationInfo.windSpeed =
      currentWeatherInfo.wind_speed_10m + currentWeatherUnits.wind_speed_10m;
    const time = new Date(currentWeatherInfo.time);
    locationInfo.readableDate = time.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
    });

    return locationInfo;
  } catch (error) {
    throw error;
  }
};

export default fetchData;
