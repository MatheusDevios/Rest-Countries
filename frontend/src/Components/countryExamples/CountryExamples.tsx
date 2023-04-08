import React from "react";
import "./CountryExamples.css";
import countryExampleData from "../../models/countryExpampleData";

interface Props {
  country: countryExampleData;
  onOpen: (country: string) => void;
}

const CountryExamples: React.FC<Props> = (props) => {
  const handleOpen = () => {
    props.onOpen(props.country.name.common);
  };

  //   console.log(Object.values(props.country.languages));
  let mainLanguage: string = Object.values(props.country.languages)[0];
  return (
    <div onClick={handleOpen} className="c-examples">
      <div className="w-examples">
        <div className="examples-flag">
          <img src={props.country.flags.svg} alt="flag" />
        </div>
        <div className="examples-info">
          <span>Name: {props.country.name.common}</span>
          <span>Population: {props.country.population}</span>
          <span>Language: {mainLanguage}</span>
          <span>Capital: {props.country.capital[0]}</span>
        </div>
      </div>
    </div>
  );
};

export default CountryExamples;
