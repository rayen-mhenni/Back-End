const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { DbOptions } = require("../KnexConfig/config");
const knex = require("../KnexConfig/config");

require("dotenv").config();

const Addsliders = async (req, res) => {
  const { image, title, description } = req.body;
  knex("sliders")
    .insert({
      image,
      title,
      description,
      created_at: Date.now(),
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

const updatesliders = async (req, res) => {
  const { image, title, description } = req.body;
  const id = req.params.id;
  knex("sliders")
    .update({
      image,
      title,
      description,
      updated_at: Date.now(),
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

const deletesliders = async (req, res) => {
  const id = req.params.id;
  knex("sliders")
    .where({ id: id })
    .delete()
    .then((rows) => {
      res.json(rows).status(200);
    })
    .catch((err) => {
      throw err;
    })
 
};

const getsliders = async (req, res) => {
  knex("sliders")
    .then((rows) => {
      res.json(rows).status(200);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    })
 
};

module.exports = {
  Addsliders,
  updatesliders,
  getsliders,
  deletesliders,
};
