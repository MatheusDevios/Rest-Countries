import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./Home.css";
import { useQuery } from "react-query";
import axios from "axios";
import NavBar from "../../Components/navBar/NavBar";
import CountryExamples from "../../Components/countryExamples/CountryExamples";
import CountryModal from "../../Components/countryModals/CountryModal";
import Loading from "../../Components/loading/Loading";
import Error from "../../Components/error/Error";
import countryExampleData from "../../models/countryExpampleData";
import countryData from "../../models/countryData";

const Home = () => {
  const url = "http://localhost:5001/api/country";
  const [showModal, setShowModal] = useState(false);
  const { data, isLoading, error: errorSearch, fetchData } = useFetch();
  const { data: countryData, isFetching } = useQuery({
    queryKey: ["country"],
    queryFn: async () => {
      const res = await axios.get(`${url}/all`);
      // console.log(res.data);
      return res.data;
    },
  });

  const handleClose = () => {
    setShowModal(false);
  };

  const handleOpen = (value: string) => {
    if (value !== "") {
      fetchData({ url: `${url}?name=${value}` });
      setShowModal(true);
    }
  };

  if (isFetching || isLoading) return <Loading />;
  if (errorSearch && showModal) return <Error onClose={handleClose} />;

  return (
    <div className="c-country">
      {showModal && !isLoading && <CountryModal data={data as countryData} onClose={handleClose} />}
      <NavBar onOpen={handleOpen} />
      <div className="w-country">
        {countryData?.slice(0, 8).map((country: countryExampleData, index: number) => (
          <CountryExamples onOpen={handleOpen} key={index} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Home;
