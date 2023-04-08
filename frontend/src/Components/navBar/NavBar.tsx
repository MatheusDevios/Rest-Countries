import "./NavBar.css";
import SearchIcon from "@mui/icons-material/Search";
import PublicIcon from "@mui/icons-material/Public";
import { useState } from "react";

interface Props {
  onOpen: (country: string) => void;
}
const NavBar: React.FC<Props> = (props) => {
  const [country, setCountry] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };

  const handleSearch = (e: any) => {
    if (e.key === "Enter" || e.type === "click") {
      props.onOpen(country);
      setCountry("");
    }
  };

  return (
    <div className="c-navbar" role="navigation">
      <div className="w-navbar">
        <div className="navbar-title">
          <PublicIcon />
          <h1>Rest Countries - Matheus Diniz</h1>
        </div>
        <div className="navbar-search">
          <SearchIcon onClick={handleSearch} />
          <input
            className="search-input"
            onChange={handleChange}
            onKeyUp={handleSearch}
            value={country}
            type="text"
            placeholder="Search for a country..."
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
