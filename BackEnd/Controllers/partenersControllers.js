const jwt = require("jsonwebtoken");
const knex = require("../KnexConfig/config");

require("dotenv").config();

const Addparteners = async (req, res) => {
  const { image, url } = req.body;
  knex("parteners")
    .insert({
      image,
      url,
      created_at: Date.now(),
    })
    .then((user) => {
      res.json({ message: "parteners Created " });
    })
    .catch((err) => {
      res
        .json({
          user: {},
          error: "check your parteners",
        })
        .status(500);
    });
};

const updateparteners = async (req, res) => {
  const { image, url } = req.body;

  const id = req.params.id;
  knex("parteners")
    .update({
      image,
      url,
      updated_at: Date.now(),
    })
    .where({ id: id })
    .then((user) => {
      res.json({ message: "parteners Updated " });
    })
    .catch((err) => {
      res
        .json({
          user: {},
          error: "Check your parteners",
        })
        .status(400);
    });
};

const deleteparteners = async (req, res) => {
  const id = req.params.id;
  knex("parteners")
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

const getparteners = async (req, res) => {
  knex("parteners")
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
  Addparteners,
  updateparteners,
  deleteparteners,
  getparteners,
};
