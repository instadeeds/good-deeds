module.exports = {
  future: {
    webpack5: true,
  },
  basePath: process.env.ASSET_PREFIX ?? "",
  assetPrefix: process.env.ASSET_PREFIX ?? "" + "/",
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$/i,
      type: "asset/resource",
    });
    return config;
  },
};
