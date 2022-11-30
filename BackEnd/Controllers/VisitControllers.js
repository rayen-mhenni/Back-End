const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { DbOptions } = require("../KnexConfig/config");
const knex = require('../KnexConfig/config');

require("dotenv").config();

const visit = async (req, res) => {
  const nb = await knex("visit").then((res)=>res[0].number)
  const idate = await knex("visit").then((res)=>res[0].date)

  const nowdate = new Date().toISOString().substring(0, 10);


if (idate.toISOString().substring(0, 10) === nowdate)
{
  await knex("visit")
    .update({
     number:nb+1
    }).where({id : 1})
    .then((user) => {
      res.json({ message: "Article Updated " });
      console.log("Article Updated");
    })
    .catch((err) => {
      res
        .json({
          user: {},
          error: "Check your Data",
        })
        .status(400);
    });

  }else {
    await knex("visit")
    .update({
     number:1,
     date :nowdate
    }).where({id : 1})
    .then((user) => {
      res.json({ message: "Article Updated " });
      console.log("Article Updated");
    })
    .catch((err) => {
      res
        .json({
          user: {},
          error: "Check your Data",
        })
        .status(400);
    });

  }
};


const getvisit = async (req, res) => {
  knex("visit")
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
getvisit,
visit
  };
