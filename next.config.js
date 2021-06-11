const path = require("path");
const withPWA = require("next-pwa");

const prod = process.env.NODE_ENV === "production";

module.exports = withPWA({
  excludeFile: (str) => /\*.{spec,test}.js/.test(str),

  pwa: {
    disable: prod ? false : true,
    dest: "public",
  },
  webpack: (config) => {
    config.resolve.modules.push(path.resolve("./"));

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  future: {
    webpack5: true,
  },
  images: {
    domains: ["raw.githubusercontent.com", "localhost"],
  },
});
