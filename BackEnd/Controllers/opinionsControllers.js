const jwt = require("jsonwebtoken");
const knex = require('../KnexConfig/config');

require("dotenv").config();

const Addopinions= async (req, res) => {
  const { name,
    poste,
    rate,
    opinion} = req.body;
        knex("opinions")
          .insert(
            {
              name,
              poste,
              rate,
              opinion,
              created_at: new Date()
            }
          )
          .then((user) => {
            res.json({ user });
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

const updateopinions= async (req, res) => {
  const { name,
    poste,
    rate,
    opinion} = req.body;

  const id = req.params.id
  knex("opinions")
    .update({
      name,
      poste,
      rate,
      opinion,
      updated_at: new Date()
    })
    .where({ id: id })
    .then((user) => {
      res.json({ message: "opinions Updated " });
    })
    .catch((err) => {
      res
        .json({
          user: {},
          error: "Check your opinions",
        })
        .status(400);
    });
};


const deleteopinions = async (req, res) => {
  const id = req.params.id
  knex("opinions")
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



const getopinions = async (req, res) => {
  knex("opinions")
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
  Addopinions,
  updateopinions,
  deleteopinions,
  getopinions
};
