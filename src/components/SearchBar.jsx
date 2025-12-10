import React, { useState } from "react";

export default function SearchBar({ setWeather }) {
  const [city, setCity] = useState("");
  const apiKey = "YOUR_API_KEY"; // replace with your key

  const getWeather = async () => {
    if (!city) return;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();
    setWeather(data);
  };

  return (
    <div className="flex mb-6 w-full max-w-md">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="flex-grow p-2 rounded-l-md text-black"
      />
      <button
        onClick={getWeather}
        className="bg-yellow-400 text-black px-4 rounded-r-md font-bold hover:bg-yellow-300"
      >
        Search
      </button>
    </div>
  );
}
