//? It is advisable to use environment variables instead of directly putting secrets in repository file but I have skipped this part as it would become complicated for many.
//? Alternatively you can download the repository instead or forking and upload it from your account and keep it private, in that way, your secrets will not be exposed to the public.

const APP_KEY = "TFN0Q0dEdHpkVVhaOWVKd1VUeEs6MTpjaQ";
const APP_SECRET = "xaMIOnpQhoyVW6LIhGiYnyhmxe-7mlSahZdO9o1AvHEa10bif_";
const ACCESS_TOKEN = "YOUR_TWITTER_ACCESS_TOKEN";
const ACCESS_SECRET = "YOUR_TWITTER_ACCESS_SECRET";
const GEMINI_API_KEY = "AIzaSyBxK88vvxEkjKGutHwhrViM2bQCRqpciAE";

const SECRETS = {
  APP_KEY,
  APP_SECRET,
  ACCESS_TOKEN,
  ACCESS_SECRET,
  GEMINI_API_KEY,
};

module.exports = SECRETS;
