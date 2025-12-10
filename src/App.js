import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Footer from "./components/Footer";

function App() {
  const [weather, setWeather] = useState(null);

  // Dynamic background based on weather
  let bgClass = "from-blue-400 to-indigo-600";
  if (weather) {
    const main = weather?.weather?.[0]?.main;
    if (main === "Clear") bgClass = "from-yellow-400 to-orange-500";
    else if (main === "Rain" || main === "Drizzle") bgClass = "from-blue-700 to-blue-900";
    else if (main === "Clouds") bgClass = "from-gray-400 to-gray-600";
    else if (main === "Snow") bgClass = "from-white to-gray-300";
  }

  return (
    <div className={`min-h-screen bg-gradient-to-r ${bgClass} text-white flex flex-col items-center p-4 transition-all duration-500`}>
      <Header />
      <SearchBar setWeather={setWeather} />
      {weather && <WeatherCard weather={weather} />}
      <Footer />
    </div>
  );
}

export default App;
