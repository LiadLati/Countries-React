import React from "react";

const Modal = ({flag, name, population, region, capital, onclick}) => {

    return (
    <>
      <div className="countryWindowContainer">
        <div className="countryPopWindow">
          <h2>{name}</h2>
          <div className="countryPopDetails">
          <img
            src={flag}
            alt={`${name}`}
          />
          <p><strong>Population:</strong> {population}</p>
          <p><strong>Region:</strong> {region}</p>
          <p><strong>Capital:</strong> {capital}</p>
          </div>
          <button className="closeButCountryPop" onClick={onclick}>Close</button>
        </div>
      </div>
    </>
  );
}

export default Modal;

