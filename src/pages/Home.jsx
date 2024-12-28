import React, { useState, useEffect } from "react";
import Country from "../components/Country";
import data from "../assets/CountriesData.json";

const Home = () => {
  const [countries] = useState(data);
  
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
            <a href="index.html">
              <h1 className="headerh1">Where in the world?</h1>
            </a>
          </div>
          <button
            type="button"
            aria-label="Theme Switcher Button"
            className="theme-toggle flex flex-jc-sb flex-ai-c"
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
                  key={country.name}
                  flag={country.flag}
                  name={country.name}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
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
