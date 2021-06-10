import { GET_POKEMONS } from "@/utils/apollo/constant";
import { client } from "@/utils/apollo/client";

const sitemapXml = (pokemons) => {
  let latestPost = 0;
  let projectsXML = "";

  pokemons.map((pokemon) => {
    const generatedDate = new Date();
    const postDate = date.toISOString();

    if (!latestPost || postDate > latestPost) {
      latestPost = postDate;
    }

    const projectURL = `https://pokemon-web-888fon0wi-crusherblack.vercel.app/${pokemon.name}/`;
    projectsXML += `
      <url>
        <loc>${projectURL}</loc>
        <lastmod>${generatedDate}</lastmod>
        <priority>0.50</priority>
      </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">    
        <url>
            <loc>https://pokemon-web-888fon0wi-crusherblack.vercel.app/</loc>
            <lastmod>2020-03-12T09:35:12+00:00</lastmod>
            <priority>1.00</priority>
        </url>
        <url>
            <loc>https://pokemon-web-888fon0wi-crusherblack.vercel.app/pokemon</loc>
            <lastmod>2020-03-12T09:35:12+00:00</lastmod>
            <priority>0.80</priority>
        </url>
      ${projectsXML}
    </urlset>`;
};

const Sitemap = () => {
  Sitemap.getInitialProps = async (context) => {
    const { data } = await client.query({
      query: GET_POKEMONS,
    });

    const { pokemons } = data;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemapXml(pokemons));
    res.end();
  };
};

export default withAuthSync(Sitemap, "landing");
