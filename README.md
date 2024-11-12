# Weather Now

**Weather Now** is a simple, mobile-first web application that provides users with quick, current weather information for any city around the globe. Built with React and Sass, this app is designed for smooth performance and user-friendly access to weather data.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [API](#api)
- [Future Improvements](#future-improvements)

## Features

- **Quick Weather Search**: Enter any city name to get the latest weather conditions instantly.
- **Mobile-First Design**: Optimized for mobile devices but responsive for larger screens.
- **Easy Styling with Sass**: Global styling and CSS management using Sass variables.
- **Real-time Weather Data**: Uses Open-Meteo API to retrieve accurate weather information based on city coordinates.

## Technologies Used

- **Frontend**: [React](https://reactjs.org/) with the `useState` Hook for state management.
- **Styling**: [Sass](https://sass-lang.com/) for modular, reusable styling.
- **API**: [Open-Meteo API](https://open-meteo.com/) for both location-based coordinates and weather data.

## Usage

1. Enter a Location name in the search bar.
2. The app will use the Open-Meteo API to convert the location into latitude and longitude coordinates.
3. It will then fetch the latest weather data for the specified location using these coordinates.
4. View real-time weather information displayed on the screen.

## API

The app utilizes the Open-Meteo API for both location-to-coordinates conversion and weather data retrieval. Here’s a brief overview of the API flow:

1. Convert Location to Coordinates: Using Open-Meteo’s location API to translate a city name into latitude and longitude.
2. Retrieve Weather Data: Using these coordinates, the app fetches real-time weather data, which is then displayed to the user.

### Note: Ensure that you have an active internet connection as the app requires external API calls.

## Future Improvements

- **Extended Forecast**: Add a feature to display a multi-hours and multi-day forecast.
- **Geolocation Support**: Automatically detect the user’s location for quick weather checks.
- **Dark Mode**: Add support for dark mode for better user experience in low-light conditions.
