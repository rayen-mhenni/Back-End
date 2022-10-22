const jwt = require("jsonwebtoken");
const knex = require("../KnexConfig/config");

require("dotenv").config();

const Addinfos = async (req, res) => {
  const { title, text, fa_icon } = req.body;
  knex("infos")
    .insert({
      intitle,
      text,
      fa_icon,
      created_at: new Date()
    })
    .then((user) => {
      res.json({ message: "infos Created " });
    })
    .catch((err) => {
      res
        .json({
          user: {},
          error: "check your infos",
        })
        .status(500);
    });
};

const updateinfos = async (req, res) => {
  const { title, text, fa_icon } = req.body;

  const id = req.params.id;
  knex("infos")
    .update({
      title,
      text,
      fa_icon,
      updated_at: new Date()
    })
    .where({ id: id })
    .then((user) => {
      res.json({ message: "infos Updated " });
    })
    .catch((err) => {
      res
        .json({
          user: {},
          error: "Check your infos",
        })
        .status(400);
    });
};

const deleteinfos = async (req, res) => {
  const id = req.params.id;
  knex("infos")
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

const getinfos = async (req, res) => {
  knex("infos")
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
  Addinfos,
  updateinfos,
  deleteinfos,
  getinfos,
};
