import React from "react";

export default function WeatherCard({ weather }) {
  if (!weather) return null;

  const { name, sys, main, weather: weatherArr, wind } = weather;
  const description = weatherArr[0].description;

  return (
    <div className="bg-gray-800 p-6 rounded-xl mt-6 w-full max-w-md text-center border border-gray-700">
      <h2 className="text-3xl font-bold">{name}, {sys.country}</h2>
      <p className="text-gray-400 capitalize">{description}</p>
      <p className="text-5xl font-semibold my-2">{Math.round(main.temp)}°C</p>
      <p className="text-gray-400">
        Feels like {Math.round(main.feels_like)}°C | Humidity: {main.humidity}% | Wind: {wind.speed} m/s
      </p>
    </div>
  );
}
