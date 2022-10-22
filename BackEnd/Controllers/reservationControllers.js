const jwt = require("jsonwebtoken");
const knex = require("../KnexConfig/config");

require("dotenv").config();

const Addreservation = async (req, res) => {
  const { email, phone, name, date, type } = req.body;
  knex("reservation")
    .insert({
      email,
      phone,
      name,
      date,
      type,
    })
    .then((user) => {
      res.json({ message: "reservation Created " });
    })
    .catch((err) => {
      res
        .json({
          user: {},
          error: "check your reservation",
        })
        .status(500);
    });
};

const updatereservation = async (req, res) => {
  const { email, phone, name, date, type } = req.body;

  const id = req.params.id;
  knex("reservation")
    .update({
      email,
      phone,
      name,
      date,
      type,
    })
    .where({ id: id })
    .then((user) => {
      res.json({ message: "reservation Updated " });
    })
    .catch((err) => {
      res
        .json({
          user: {},
          error: "Check your reservation",
        })
        .status(400);
    });
};

const deletereservation = async (req, res) => {
  const id = req.params.id;
  knex("reservation")
    .where({ id: id })
    .delete()
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

const getreservation = async (req, res) => {
  knex("reservation")
    .where({})
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
  Addreservation,
  updatereservation,
  deletereservation,
  getreservation,
};
