const Chance = require("chance");
require("dotenv").config();
const chance = new Chance();

module.exports = {
  createUser: () => ({
    firstName: chance.first(),
    lastName: chance.last(),
    email: chance.email({ domain: "gmail.com" }),
    password: chance.string({
      length: 12,
      alpha: true,
      symbols: true,
      numeric: true,
    }),
    emaillog: process.env.EMAIL,
    passwordlog: process.env.PASSWORD,
    invalidPasswordlog: process.env.INVPASSWORD,
    // searchSofa: process.env.SOFA
    // passwordRepeat: chance.string()
  }),
};
