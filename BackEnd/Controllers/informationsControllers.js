const jwt = require("jsonwebtoken");
const knex = require("../KnexConfig/config");

require("dotenv").config();

const Addinformations = async (req, res) => {
  const { phone, email, adress } = req.body;
  knex("informations")
    .insert({
      phone,
      email,
      adress,
      created_at: new Date()
    })
    .then((user) => {
      res.json({ message: "information Created " });
    })
    .catch((err) => {
      res
        .json({
          user: {},
          error: "check your informations",
        })
        .status(500);
    });
};

const updateinformations = async (req, res) => {
  const { phone, email, adress } = req.body;

  const id = req.params.id;
  knex("informations")
    .update({
      phone,
      email,
      adress,
      updated_at: new Date()
    })
    .where({ id: id })
    .then((user) => {
      res.json({ message: "contact Updated " });
    })
    .catch((err) => {
      res
        .json({
          user: {},
          error: "Check your informations",
        })
        .status(400);
    });
};

const deleteinformations = async (req, res) => {
  const id = req.params.id;
  knex("informations")
    .where({ id: id })
    .delete()
    .then((rows) => {
      res.json(rows).status(200);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    })
 
};

const getinformations = async (req, res) => {
  knex("informations")
    .where({})
    .then((rows) => {
      res.json(rows).status(200);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    })
 
};

module.exports = {
  Addinformations,
  updateinformations,
  deleteinformations,
  getinformations,
};
