const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { DbOptions } = require("../KnexConfig/config");
const knex = require("../KnexConfig/config");

require("dotenv").config();

const Addsocials = async (req, res) => {
  const { facebook, twitter, instagram, pinterest, linkedin } = req.body;
  knex("socials")
    .insert({
      facebook,
      twitter,
      instagram,
      pinterest,
      linkedin,
      created_at: new Date()
    })
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

const updatesocials = async (req, res) => {
  const { facebook, twitter, instagram, pinterest, linkedin } = req.body;
  const id = req.params.id;
  knex("socials")
    .update({
      facebook,
      twitter,
      instagram,
      pinterest,
      linkedin,
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

const deletesocials = async (req, res) => {
  const id = req.params.id;
  knex("socials")
    .where({ id: id })
    .delete()
    .then((rows) => {
      res.json(rows).status(200);
    })
    .catch((err) => {
      throw err;
    })
 
};

const getsocials = async (req, res) => {
console.log("tesssst",knex.client.connectionSettings);
  knex("socials")
    .then((rows) => {
      res.json(rows).status(200);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    })
 
};

module.exports = {
  Addsocials,
  updatesocials,
  getsocials,
  deletesocials,
};
