const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { DbOptions } = require("../KnexConfig/config");
const knex = require("../KnexConfig/config");

require("dotenv").config();

const Addteams = async (req, res) => {
  const { name, poste, image,facebook , twitter , linkedin  } = req.body;
  knex("teams")
    .insert({ name, poste, image,facebook , twitter , linkedin , created_at: new Date() })
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

const updateteams = async (req, res) => {
  const { name, poste, image,facebook , twitter , linkedin   } = req.body;
  const id = req.params.id;
  knex("teams")
    .update({
      name, poste, image,facebook , twitter , linkedin , 
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

const deleteteams = async (req, res) => {
  const id = req.params.id;
  knex("teams")
    .where({ id: id })
    .delete()
    .then((rows) => {
      res.json(rows).status(200);
    })
    .catch((err) => {
      throw err;
    })
 
};

const getteams = async (req, res) => {
  knex("teams")
    .then((rows) => {
      res.json(rows).status(200);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    })
 
};

module.exports = {
  Addteams,
  updateteams,
  getteams,
  deleteteams,
};
