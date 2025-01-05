import React, { useState, useEffect } from "react";
import Country from "../components/Country";
import Modal from "../components/Modal";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkMode]);

  useEffect(() => {
      fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log("error fetching countries:", error));
  }, []);

  
  const openCountryWindow = (country) => {
    setSelectedCountry(country);
  };
  
  const closeCountryWindow = () => {
    setSelectedCountry(null);
  };

  return (
    <>
      <button
        type="button"
        aria-label="Scroll Top Button"
        className="button scroll-top flex flex-ai-c flex-jc-c scale-effect"
      >
        <i className="fa-regular fa-chevron-up icon"></i>
      </button>
      <header className="header">
        <div className="container flex flex-jc-sb flex-ai-c">
          <div className="logo">
              <h1 className="headerh1">Where in the world?</h1>
          </div>
          <button
            type="button"
            aria-label="Theme Switcher Button"
            className="theme-toggle flex flex-jc-sb flex-ai-c"
            onClick={() => setIsDarkMode((prev) => !prev)}
          >
            <span className="darkIcon">
              <i className="fa-regular fa-moon theme-icon" id="darkButton"></i>
            </span>
            <span className="theme-text" id="darkText">
              Dark Mode
            </span>
          </button>
        </div>
      </header>
      {/*////////////////////////Country Modal//////////////////////////////*/}
      {selectedCountry && (
        <Modal
          key={selectedCountry.name.common}
          flag={selectedCountry.flags.png}
          name={selectedCountry.name.common}
          population={selectedCountry.population}
          region={selectedCountry.region}
          capital={selectedCountry.capital}
          onclick={closeCountryWindow} 
        />
      )}
      {/*//////////////////////////////////////////////////////*/}
      <div className="body-container">
        <section className="filters">
          <div className="container">
            <div className="search-wrapper">
              <i className="fa-regular fa-magnifying-glass search-icon"></i>
              <input
                type="text"
                className="search-input"
                placeholder="Search for a country..."
              />
            </div>
            <div className="dropdown-wrapper">
              <div className="dropdown-header flex flex-jc-sb flex-ai-c">
                <span>Filter by Region</span>
                <i className="fa-regular fa-chevron-down icon"></i>
              </div>
              <div className="dropdown-body">
                <ul>
                  <li data-region="all">All</li>
                  <li data-region="africa">africa</li>
                  <li data-region="america">Americas</li>
                  <li data-region="asia">Asia</li>
                  <li data-region="europe">Europe</li>
                  <li data-region="oceania">Oceania</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <main className="main">
          <div className="container">
            <section className="countries-grid">
              {countries.map((country) => (
                <Country
                  key={country.name.common}
                  flag={country.flags.png}
                  name={country.name.common}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  onclick={() => openCountryWindow(country)}
                />
              ))}
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;


