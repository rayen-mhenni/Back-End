const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { DbOptions } = require("../KnexConfig/config");
const knex = require("../KnexConfig/config");

require("dotenv").config();

const AddWeAre = async (req, res) => {
  const { content, title, icon } = req.body;
  knex("weare")
    .insert({ title, content, icon })
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

const updateWeAre = async (req, res) => {
  const { content, title, icon } = req.body;
  const id = req.params.id;
  knex("weare")
    .update({
      title, content, icon
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

const deleteweare = async (req, res) => {
  const id = req.params.id;
  knex("weare")
    .where({ id: id })
    .delete()
    .then((rows) => {
      res.json(rows).status(200);
    })
    .catch((err) => {
      throw err;
    })
 
};

const getweare = async (req, res) => {
  knex("weare")
    .then((rows) => {
      res.json(rows).status(200);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    })
 
};

const getweareBytitle = async (req, res) => {
  const { title } = req.body;
  knex("weare")
    .where({ title: title })
    .then((rows) => {
      res.json(rows).status(200);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    })
 
};

module.exports = {
  AddWeAre,
  updateWeAre,
  getweare,
  deleteweare,
  getweareBytitle,
};
