const images = require("remark-images");
const emoji = require("remark-emoji");
const highlight = require("remark-highlight.js");

const withMDX = require("@zeit/next-mdx")({
  extension: /\.(md|mdx)?$/,
  options: {
    mdPlugins: [images, emoji, highlight]
  }
});
module.exports = withMDX();
