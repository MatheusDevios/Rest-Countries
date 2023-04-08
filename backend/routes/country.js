const axios = require("axios");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const country = await axios.get(`https://restcountries.com/v3.1/name/${req.query.name}`);
    const countryData = country.data[0];

    res.status(200).json(countryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/all", async (req, res) => {
  try {
    const country = await axios.get(`https://restcountries.com/v3.1/all`);
    const countryData = country.data;

    // console.log(countryData);
    res.status(200).json(countryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
