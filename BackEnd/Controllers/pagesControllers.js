const jwt = require("jsonwebtoken");
const knex = require('../KnexConfig/config');

require("dotenv").config();

const Addpages= async (req, res) => {
  const { name , code } = req.body;
        knex("pages")
          .insert(
            {
          name , code,
              created_at: new Date()
            }
          )
          .then((user) => {
            res.json({ message: "pages Created " });
          })
          .catch((err) => {
            res
              .json({
                user: {},
                error: "check your pages",
              })
              .status(500);
          });
      };

const updatepages= async (req, res) => {
  const {  name , code} = req.body;
  const id = req.params.id
  knex("pages")
    .update({
      name , code,
      updated_at: new Date()
    })
    .where({ id: id })
    .then((user) => {
      res.json({ message: "pages Updated " });
    })
    .catch((err) => {
      res
        .json({
          user: {},
          error: "Check your pages",
        })
        .status(400);
    });
};


const deletepages = async (req, res) => {
  const id = req.params.id
  knex("pages")
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



const getpages = async (req, res) => {
  await knex("pages")
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
  Addpages,
  updatepages,
  deletepages,
  getpages
};
