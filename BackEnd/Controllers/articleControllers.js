const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { DbOptions } = require("../KnexConfig/config");
const knex = require("knex")(DbOptions);

require("dotenv").config();

const Addarticle = async (req, res) => {
  const { auther, content, title , image } = req.body;
        knex("articles")
          .insert(
            {
              auther,
               content,
                title ,
                 image ,
              created_at: Date.now(),
            }
          )
          .then((user) => {
            res.json({ message: "article Created " });
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

const updatearticle = async (req, res) => {
  const { auther, content, title , image} = req.body;
  const id = req.params.id
  knex("articles")
    .update({
      auther, content, title , image,
      updated_at: Date.now(),
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
    .finally(() => {
      knex.destroy();
    });
};

module.exports = {
  Addarticle,
  updatearticle,
  getarticles,
};
