const jwt = require("jsonwebtoken");
const knex = require('../KnexConfig/config');

require("dotenv").config();

const Adddata= async (req, res) => {
  const { data,
    number,
    fa_icon } = req.body;
        knex("data")
          .insert(
            {
              data,
              number,
              fa_icon,
              created_at: Date.now(),
            }
          )
          .then((user) => {
            res.json({ message: "data Created " });
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

const updatedata= async (req, res) => {
  const { data,
    number,
    fa_icon} = req.body;

  const id = req.params.id
  knex("data")
    .update({
      data,
      number,
      fa_icon,
      updated_at: Date.now(),
    })
    .where({ id: id })
    .then((user) => {
      res.json({ message: "data Updated " });
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


const deletedata = async (req, res) => {
  const id = req.params.id
  knex("data")
  .where({id:id})
  .delete()
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



const getdata = async (req, res) => {
  knex("data")
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
  Adddata,
  updatedata,
  deletedata,
  getdata
};
