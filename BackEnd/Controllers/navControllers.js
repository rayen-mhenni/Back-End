const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { DbOptions } = require("../KnexConfig/config");
const knex = require("../KnexConfig/config");

require("dotenv").config();

const Addnavigation = async (req, res) => {
  const { navname, parentid } = req.body;
  knex("navigation")
    .insert({
      navname,
      parentid,
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

const updatenavigation = async (req, res) => {
  const { navname, parentid } = req.body;
  const id = req.params.id;
  knex("navigation")
    .update({
      navname,
      parentid,
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

const deletenavigation = async (req, res) => {
  const id = req.params.id;
  let rowsres = [];
  await knex("navigation")
    .where({ id: id })
    .delete()
    .then((rows) => {
      rowsres.push(rows);
    })
    .catch((err) => {
      throw err;
    });
  await knex("navigation")
    .where({ parentid: id })
    .delete()
    .then((rows) => {
      rowsres.push(rows);
    })
    .catch((err) => {
      throw err;
    });

  res.json(rowsres).status(200);
};

const getnavigation = async (req, res) => {
  let parent = [];
  let resp = [];

  knex("navigation")
    .then((rows) => {
      parent = rows.filter((val) => val.parentid == null);
      parent.forEach((par) => {
        const child = rows.filter((val) => val.parentid === par.id);
        resp.push({ id: par.id, navname: par.navname, child: child });
      });

      res.json(resp).status(200);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

module.exports = {
  Addnavigation,
  updatenavigation,
  getnavigation,
  deletenavigation,
};
