const jwt = require("jsonwebtoken");
const knex = require('../KnexConfig/config');

require("dotenv").config();

const Addcontact= async (req, res) => {
  const { name,
    email,
    phone ,
    message ,
    identity} = req.body;
        knex("contacts")
          .insert(
            {
             name,
              email,
              phone ,
              message ,
              identity,
              created_at: new Date()
            }
          )
          .then((user) => {
            res.json({ message: "contact Created " });
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

const updatecontact= async (req, res) => {
  const { name,
    email,
    phone ,
    message ,
    identity} = req.body;

  const id = req.params.id
  knex("contacts")
    .update({
      name,
      email,
      phone ,
      message ,
      identity,
      updated_at: new Date()
    })
    .where({ id: id })
    .then((user) => {
      res.json({ message: "contact Updated " });
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


const deletecontacts = async (req, res) => {
  const id = req.params.id
  knex("contacts")
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



const getcontacts = async (req, res) => {
  knex("contacts")
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
  Addcontact,
  updatecontact,
  deletecontacts,
  getcontacts
};
