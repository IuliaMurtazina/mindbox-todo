module.exports = {
  "*.{js,jsx,ts,tsx}": ["yarn lint:staged", "yarn format:staged"],
  "*.{css,scss,md,json}": ["yarn format:staged"],
};
