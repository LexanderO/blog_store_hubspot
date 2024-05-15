const axios = require("axios");
const Token = require("../models/Token");

exports.startAuthentication = (req, res) => {
  const authUrl = `https://app-eu1.hubspot.com/oauth/authorize?client_id=${process.env.HUBSPOT_CLIENT_ID}&redirect_uri=${process.env.HUBSPOT_REDIRECT_URI}&scope=content%20oauth`;
  res.redirect(authUrl);
};

exports.handleCallback = async (req, res) => {
  const { code } = req.query;
  try {
    const response = await axios.post(
      "https://api.hubapi.com/oauth/v1/token",
      new URLSearchParams({
        grant_type: "authorization_code",
        client_id: process.env.HUBSPOT_CLIENT_ID,
        client_secret: process.env.HUBSPOT_CLIENT_SECRET,
        redirect_uri: process.env.HUBSPOT_REDIRECT_URI,
        code,
      }),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    const { access_token, refresh_token, expires_in } = response.data;
    const expirationDate = new Date(new Date().getTime() + expires_in * 1000);

    const newToken = new Token({
      accessToken: access_token,
      refreshToken: refresh_token,
      expiresIn: expirationDate,
    });
    await newToken.save();

    res.redirect("http://localhost:5173/blogs");
  } catch (error) {
    console.error("OAuth token exchange error:", error.response.data);
    res
      .status(500)
      .json({ message: "Authentication failed", error: error.response.data });
  }
};
