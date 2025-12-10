import React from "react";

// Mapping weather main conditions to emojis (or you can use images/icons)
const weatherIcons = {
  Clear: "☀️",
  Clouds: "☁️",
  Rain: "🌧️",
  Drizzle: "🌦️",
  Thunderstorm: "⛈️",
  Snow: "❄️",
  Mist: "🌫️",
};

export default function WeatherCard({ weather }) {
  if (!weather || !weather.weather || weather.cod !== 2000) {
    return <p className="text-red-300 font-bold">City not found</p>;
  }

  const icon = weatherIcons[weather.weather[0].main] || "🌤️";

  return (
    <div className="bg-white text-black p-6 rounded-2xl shadow-2xl w-full max-w-sm text-center transition-all">
      <div className="text-6xl mb-4">{icon}</div>
      <h2 className="text-2xl font-bold">{weather.name}</h2>
      <p className="text-xl mt-2">{weather.main.temp}°C</p>
      <p className="mt-1 capitalize">{weather.weather[0].description}</p>
      <p className="mt-1 text-gray-500">Humidity: {weather.main.humidity}%</p>
      <p className="mt-1 text-gray-500">Wind: {weather.wind.speed} m/s</p>
    </div>
  );
}
