import React, { useState } from "react";

export default function SearchBar({ setWeather }) {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city.trim()) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&appid=46a2720539b49cdb95d4f8d0040808fd&units=metric`
      );
      const data = await response.json();

      if (Number(data.cod) !== 200 || !data.weather || !data.weather.length) {
        alert(data.message || "City not found. Please try another city.");
        setWeather(null);
      } else {
        setWeather(data);
      }
    } catch (err) {
      alert("Unable to fetch weather data. Please try again.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") fetchWeather();
  };

  return (
    <div className="w-full max-w-md flex gap-2 mt-6">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 px-4 py-2 rounded-lg text-black focus:outline-none"
      />
      <button
        onClick={fetchWeather}
        disabled={loading}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition disabled:opacity-60"
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </div>
  );
}
