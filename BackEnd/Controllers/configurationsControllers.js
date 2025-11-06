const jwt = require("jsonwebtoken");
const knex = require('../KnexConfig/config');

require("dotenv").config();

const Addconfig = async (req, res) => {
  const {frais_gestion,
    ind_repas,
    taux_charge ,
    email_text ,
    abon_public,
    notice,
wawashi,
igd_province,
igd_ile_france,
    status} = req.body;
        knex("configurations")
          .insert(
            {
              frais_gestion,
              ind_repas,
              taux_charge ,
              email_text ,
              abon_public,
              notice,
              status,
wawashi,
igd_province,
igd_ile_france,
              created_at: new Date()
            }
          )
          .then((user) => {
            res.json({ message: "config Created " });
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

const updateconfig = async (req, res) => {
  const { frais_gestion,
    ind_repas,
    taux_charge ,
    email_text ,
    abon_public,
    notice,
wawashi,
igd_province,
igd_ile_france,
    status} = req.body;

  const id = req.params.id
  knex("configurations")
    .update({
              frais_gestion,
              ind_repas,
              taux_charge ,
              email_text ,
              abon_public,
wawashi,
igd_province,
igd_ile_france,
              notice,
              status,
      updated_at: new Date()
    })
    .where({ id: id })
    .then((user) => {
      res.json({ message: "config Updated " });
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


const updateconfigstatus = async (req, res) => {
  const {status } = req.body;

  const id = req.params.id
  knex("configurations")
    .update({
      status
    })
    .where({ id: id })
    .then((user) => {
      res.json({ message: "config Updated " });
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

const deleteconfigs = async (req, res) => {
  const id = req.params.id
  knex("configurations")
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



const getconfigs = async (req, res) => {
  knex("configurations")
    .where({})
    .then((rows) => {
      res.json(rows).status(200);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    })
 
};


const getconfigsActive = async (req, res) => {
  knex("configurations")
    .where({status:'ACTIVE'})
    .then((rows) => {
      res.json(rows).status(200);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    })
 
};



module.exports = {
  Addconfig,
  updateconfig,
  getconfigs,
  deleteconfigs,
  updateconfigstatus,
getconfigsActive 
};
