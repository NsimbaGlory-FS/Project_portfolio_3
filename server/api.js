const SpotifyWebApi = require("spotify-web-api-node");
const express = require("express");
const { default: SignIn } = require("../my-app/src/SignIn");

const app = express();

app.get("/SignIn", function (req, res) {
  const SpotifyWebApi = SignIn;
  AUTH_URL = "http://localhost:3000";
  clientId = "56457ed506eb4fd7b916be6e7573f55e";
  clientSecret = "143a7e6c3b3c4cf99926d83da01fcdd1";
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});

SpotifyWebApi()
  .AUTH_URL()
  .authorization_code(AUTH_URL)
  .then((data) => console.log(data))
  .res.jsaon({
    accessToken: data.accessToken,
    refreshToken: data.refreshToken,
    expiresIn: data.expiresIn,
    tokerType: data.tokerType,
  })
  .catch((err) => console.log(err))
  .res.sendStatus(200);
