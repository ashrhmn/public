module.exports = {
  content: ["pages", "components"].map(
    (folderName) => `${folderName}/**/*.{tsx,jsx,ts,js}`
  ),
  theme: {
    extend: {},
  },
  plugins: [],
};
