const jwt = require("jsonwebtoken");
const knex = require('../KnexConfig/config');

require("dotenv").config();

const Addgestion = async (req, res) => {
  const { frais,interval } = req.body;
        knex("gestion")
          .insert(
            {
              frais,interval,
              created_at: new Date()
            }
          )
          .then((user) => {
            res.json({ message: "gestion Created " });
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

const updategestion = async (req, res) => {
  const {frais,interval} = req.body;
  const id = req.params.id
  knex("gestion")
    .update({
      frais,interval,
      updated_at: new Date()
    })
    .where({ id: id })
    .then((user) => {
      res.json({ message: "gestion Updated " });
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


const deletegestion = async (req, res) => {
  const id = req.params.id
  knex("gestion")
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



const getgestion = async (req, res) => {
  knex("gestion")
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
  Addgestion,
  updategestion,
  getgestion,
  deletegestion
};
