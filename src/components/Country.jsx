import React from "react";

const Country = ({flag, name, population, region, capital}) => {
  return (
    // TODO: Country component
    <>
      <a href ="details.html"
        className="country scale-effect countryDiv">
        <div className="country-flag">
          <img src={flag} alt={name}/>
        </div>
        <div className="country-info">
          <h2 className="country-title">{name}</h2>
          <ul className="country-brief">
            <li><strong>population: </strong>{population}</li>
            <li><strong>Region: </strong>{region}</li>
            <li><strong>capital: </strong>{capital}</li>
          </ul>
        </div>
      </a>
    </>
  );
};

export default Country;
