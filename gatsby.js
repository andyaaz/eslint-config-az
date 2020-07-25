module.exports = {
  extends: ["react-app", "prettier/react"],
  globals: {
    __PATH_PREFIX__: true,
  },
  rules: {
    "react/prop-types": "off",
  },
};
