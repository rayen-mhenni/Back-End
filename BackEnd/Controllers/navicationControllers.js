const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { DbOptions } = require("../KnexConfig/config");
const knex = require("knex")(DbOptions);

require("dotenv").config();

const updatenavigateName = async (req, res) => {
  const { name} = req.body;
  const id = req.params.id
  knex("navigations")
    .update({
      name
    })
    .where({ id: id })
    .then((user) => {
      res.json({ message: "navigation Name Updated " });
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


const updateSubnavigateName = async (req, res) => {
  const { name} = req.body;
  const id = req.params.id
  knex("subnavigation")
    .update({
      name
    })
    .where({ id: id })
    .then((user) => {
      res.json({ message: "subnavigation Name Updated " });
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



const deleteSubnavigat = async (req, res) => {
  const id = req.params.id
  knex("subnavigation")
    .delete()
    .where({ id: id })
    .then((user) => {
      res.json({ message: "subnavigation deleted " });
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


const deletenavigat = async (req, res) => {
  const id = req.params.id
  knex("navigations")
    .delete()
    .where({ id: id })
    .then((user) => {
      res.json({ message: "navigation deleted " });
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


const getnavigation = async (req, res) => {

  await knex("navigations")
    .where({})
    .then((navig) => {
      navig.map(element => {

        knex("subnagivation")
        .where({id : element.id}).
        then ((subnagivation)=>
        {
          res.json({...subnagivation,element}).status(200);
        }).catch ((err) => {
          knex.destroy();
        })
      });      
  
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
  getnavigation
};
