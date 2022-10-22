const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { DbOptions } = require("../KnexConfig/config");
const knex = require("../KnexConfig/config");

require("dotenv").config();

const Addservices = async (req, res) => {
  const { title, resume, fa_icon, link, description } = req.body;
  knex("services")
    .insert({
      title,
      resume,
      fa_icon,
      link,
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

const updateservices = async (req, res) => {
  const { title, resume, fa_icon, link, description } = req.body;
  const id = req.params.id;
  knex("services")
    .update({
      title,
      resume,
      fa_icon,
      link,
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

const deleteservices = async (req, res) => {
  const id = req.params.id;
  knex("services")
    .where({ id: id })
    .delete()
    .then((rows) => {
      res.json(rows).status(200);
    })
    .catch((err) => {
      throw err;
    })
    .finally(() => {
      knex.destroy();
    });
};

const getservices = async (req, res) => {
  knex("services")
    .then((rows) => {
      res.json(rows).status(200);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    })
    .finally(() => {
      knex.destroy();
    });
};

module.exports = {
  Addservices,
  updateservices,
  getservices,
  deleteservices,
};
