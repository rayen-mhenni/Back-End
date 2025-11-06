const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { DbOptions } = require("../KnexConfig/config");
const knex = require('../KnexConfig/config');

require("dotenv").config();


const Addarticle = async (req, res) => {
let list = 0;

 knex("articles")
    .where({})
    .then((rows) => {
      list = rows.length
    })
    .catch((err) => {
      console.log(err);
      throw err;
    })


  const { author, content, title , image } = req.body;
        knex("articles")
          .insert(
            {
		id:list,
              author,
               content,
                title ,
                 image ,
              created_at: new Date(),
		updated_at:new Date()
            }
          )
          .then((user) => {
            res.json(user);
          })
          .catch((err) => {
            res
              .json({
                user: {},
                error: err,
              })
              .status(500);
          });
      };

const updatearticle = async (req, res) => {
  const { author, content, title , image} = req.body;
  const id = req.params.id
  knex("articles")
    .update({
      author, content, title , image,
      updated_at: new Date()
    })
    .where({ id: id })
    .then((user) => {
      res.json({ message: "Article Updated " });
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


const deletearticles = async (req, res) => {
  const id = req.params.id
  knex("articles")
  .where({id:id})
  .delete()
    .then((rows) => {
      res.json(rows).status(200);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    })
 
};



const getarticles = async (req, res) => {
  knex("articles")
    .where({})
    .then((rows) => {
      res.json(rows).status(200);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    })
 
};


const getarticlesById = async (req, res) => {
  const id = req.params.id
  knex("articles")
    .where({id:id})
    .then((rows) => {
      res.json(rows).status(200);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    })
 
};
module.exports = {
  Addarticle,
  updatearticle,
  getarticles,
  deletearticles,
  getarticlesById
};
