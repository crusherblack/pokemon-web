const description =
  "Pokemon Game adalah aplikasi yang sederhana untuk bermain game Pokemon dalam bentuk Web";
const url = "www.tahucoding.com";
const site_name = "Pokemon Game";
const title = site_name;

export default {
  title,
  titleTemplate: `%s | Pokemon Game`,
  description,
  canonical: url,
  openGraph: {
    type: "website",
    locale: "id_ID",
    url,
    title: `${site_name} | Pokemon Game`,
    description,
    site_name,
    images: [
      {
        url: "https://pokeapi.co/static/pokeapi_256.888baca4.png",
        width: 220,
        height: 220,
        alt: "icon Pokemon Game",
      },
    ],
  },
};
