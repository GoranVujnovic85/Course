const express = require("express");

/* axios je biblioteka yza HTTP zahteve i API */ 
const axios = require("axios");
const app = express();

/* kao neki tamplate za rendovanje stranice http ili tako nesto */
app.set("view engine", "ejs");

/* konfigurisemo express da koristi datoteke iz foldera public */
app.use(express.static("public"));

/* renderuje  html stranicu na osnovu sablona indeh.ejs ejs je nesto poput sablona... vratiti se na ovo!!!!*/
app.get("/", (req, res) => {
  res.render("index", { weather: null, error: null });
});

/* ovde trazimo podatke ya odredjeni grad koje nam daje URL */
app.get("/weather", async (req, res) => {
  const city = req.query.city;
  /* apiKey moze da se skine na portalu Weather forcast ili tako nesto... ovaj nije dobar zbog toga i ne daje relevantne podatke */
  const apiKey = "094b545dde613af5667ba10639a224f8";

  /*.... */
  const APIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  let weather;
  let error = null;

  /* try = HTTP GET--->axios....  hendlovanje greskom ako se pojavi prilikom API yahteva */
  try {
    const response = await axios.get(APIUrl);
    weather = response.data;
  } catch (error) {
    weather = null;
    error = "Error, Please try again";
  }
 /* ovo je primer rendovanja html stranice prema klijentu , on ce videti sve , wremensku prognozu i gresku ukoliko se desi */
  res.render("index", { weather, error });
});

/* process.env.PORT nije definisan i koristim vrednost sa desne strane (3000) */
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});