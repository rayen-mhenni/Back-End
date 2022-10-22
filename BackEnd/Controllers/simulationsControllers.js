const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { DbOptions } = require("../KnexConfig/config");
const knex = require("../KnexConfig/config");

require("dotenv").config();

const Addsimulations = async (req, res) => {
  const { email, phone, file } = req.body;
  knex("simulations")
    .insert({ email, phone, file, created_at: new Date() })
    .then((user) => {
      res.json({ message: "created with success" });
    })
    .catch((err) => {
      res
        .json({
          user: {},
          error: "check your Data",
        })
        .status(500);
    });
};

const updatesimulations = async (req, res) => {
  const { email, phone, file } = req.body;
  const id = req.params.id;
  knex("simulations")
    .update({
      email,
      phone,
      file,
      updated_at: new Date()
    })
    .where({ id: id })
    .then((user) => {
      res.json({ message: "Updated with success" });
    })
    .catch((err) => {
      res
        .json({
          user: {},
          error: "Check your Data",
        })
        .status(400);
    });
};

const deletesimulations = async (req, res) => {
  const id = req.params.id;
  knex("simulations")
    .where({ id: id })
    .delete()
    .then((rows) => {
      res.json(rows).status(200);
    })
    .catch((err) => {
      throw err;
    })
 
};

const getsimulations = async (req, res) => {
  knex("simulations")
    .then((rows) => {
      res.json(rows).status(200);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    })
 
};

module.exports = {
  Addsimulations,
  updatesimulations,
  getsimulations,
  deletesimulations,
};
