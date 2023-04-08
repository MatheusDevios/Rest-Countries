const express = require("express");
const app = express();
const port = 5001;

const countryRoute = require("./routes/country");

const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/api/country", countryRoute);

app.listen(5001, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});
