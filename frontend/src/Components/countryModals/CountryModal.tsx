import countryData from "../../models/countryData";
import currency from "../../models/currency";
import "./CountryModal.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

interface Props {
  data: countryData;
  onClose: React.MouseEventHandler<HTMLElement>;
}

const CountryModal: React.FC<Props> = (props) => {
  const {
    name,
    currencies,
    flags,
    continents,
    capital,
    languages,
    region,
    population,
    subregion,
    coatOfArms,
  } = props.data;

  let mainCurrency: currency = Object.values(currencies)[0];
  let allLanguages: any = Object.values(languages);

  return (
    <div className="c-modal" onClick={props.onClose}>
      <div className="w-modal" onClick={(e) => e.stopPropagation()}>
        <div className="c-header-modal">
          <img
            className="simble-country"
            src={coatOfArms?.svg || coatOfArms?.png || flags.svg}
            alt="Country Simble"
          />
          <h1 className="title-modal">{name?.common}</h1>
        </div>
        <div className="c-info-modal">
          <button className="btn btn-modal" onClick={props.onClose}>
            <KeyboardBackspaceIcon />
            Back
          </button>
          <div className="info-wrapper">
            <div className="c-info-modal__left">
              <img className="c-flag-modal" src={flags.svg} alt={flags.alt} />
            </div>
            <div className="c-info-modal__right">
              <div className="c-info-modal__right__top">
                <div className="c-info-modal__right__top__left">
                  <div className="c-info-modal__items-info">
                    <strong>Official Name: </strong>
                    <span>{name?.official}</span>
                  </div>
                  <div className="c-info-modal__items-info">
                    <strong>Capital: </strong>
                    <span>{capital}</span>
                  </div>
                  <div className="c-info-modal__items-info">
                    <strong>Population: </strong>
                    <span>{population}</span>
                  </div>
                  <div className="c-info-modal__items-info">
                    <strong>Region: </strong>
                    <span>{region}</span>
                  </div>
                </div>
                <div className="c-info-modal__right__top__right">
                  <div className="c-info-modal__items-info">
                    <strong>Currencies: </strong>
                    <span>{mainCurrency.name}</span>
                  </div>
                  <div className="c-info-modal__items-info">
                    <strong>Continents: </strong>
                    <span>{continents[0]}</span>
                  </div>
                  <div className="c-info-modal__items-info">
                    <strong>Sub Region: </strong>
                    <span>{subregion}</span>
                  </div>
                </div>
              </div>
              <div className="c-info-modal__right__bottom">
                <div className="c-border-countries-modal">
                  <h4 className="border-countries-title">Languages:</h4>
                  <div className="border-countries-items">
                    {allLanguages.map((lang: any, index: number) => (
                      <div className="border-countries-item" key={index}>
                        {lang}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryModal;
