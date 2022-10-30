const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { DbOptions } = require("../KnexConfig/config");
const knex = require("../KnexConfig/config");

require("dotenv").config();

const getnbSimulation = async (req, res) => {
  knex("simulations")
    .where(
      "created_at",
      "like",
      `%${new Date().toISOString().substring(0, 10)}%`
      
    )
    .count("id as nb")
    .then((rows) => {
      res.json(rows[0].nb).status(200);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getnbMeeting = async (req, res) => {

  knex("reservation")
    .count("id as nb")

    .where("date", "like", `%${new Date().toISOString().substring(0, 10)}%`)
    .then((rows) => {
      res.json(rows[0].nb).status(200);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getnbcontacts = async (req, res) => {

  knex("contacts")
    .where(
      "created_at",
      "like",
      `%${new Date().toISOString().substring(0, 10)}%`
    )
    .count("id as nb")
    .then((rows) => {
      res.json(rows[0].nb).status(200);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

module.exports = {
  getnbSimulation,
  getnbcontacts,
  getnbMeeting,
};
