const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { DbOptions } = require("../KnexConfig/config");
const knex = require("../KnexConfig/config");

require("dotenv").config();

const AddEmail = async (req, res) => {
  const { reference, htmlsource } = req.body;

  knex("emailtemplate")
    .insert({
      reference: reference,
      htmlsource: htmlsource,
      defaulthtmlsource: htmlsource,
    })
    .then((user) => {
      res.json({ message: "email Template Created " });
    })
    .catch((err) => {
      res
        .json({
          user: {},
          error: "check your Data",
        })
        .status(401);
    });
};

const updateEmailByReference = async (req, res) => {
  const { reference, htmlsource } = req.body;
  knex("emailtemplate")
    .update({
      htmlsource:htmlsource
    })
    .where({ reference: reference })
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

const getEmailByReference = async (req, res) => {
  const reference  = req.params.ref;

  knex("emailtemplate")
    .where({reference:reference})
    .then((rows) => {
      res.json(rows[0]).status(200);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getAllemail = async (req, res) => {
  knex("emailtemplate")
    .then((rows) => {
      res.json(rows).status(200);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const deleteEmail = async (req, res) => {
  const id = req.params.id;
  knex("emailtemplate")
    .where({ id: id })
    .delete()
    .then((rows) => {
      res.json(rows).status(200);
    })
    .catch((err) => {
      throw err;
    })
 
};
module.exports = {
  AddEmail,
  updateEmailByReference,
  getEmailByReference,
  getAllemail,
  deleteEmail,
};
