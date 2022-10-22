const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { DbOptions } = require("../KnexConfig/config");
const knex = require('../KnexConfig/config');

require("dotenv").config();

//Login Admin

const authUser = (req, res) => {
  const { Email, Password } = req.body;

  knex("users")
    .where({ email: Email })
    .first()
    .then((user) => {
      if (!user) {
        res.status(401).json({
          error: "No user by that Email",
        });
      } else {
        return bcrypt
          .compare(Password, user.password)
          .then((isAuthenticated) => {
            if (!isAuthenticated) {
              res.status(401).json({
                error: "Unauthorized Access!",
              });
            } else {
              const token = jwt.sign(user.id, process.env.JWT_KEY);
              res.json({ user: user, token, message: `Welcome ${user.name}` });
            }
          });
      }
    });
};

//Create Admin

const Adduser = async (req, res) => {
  const { Email, Password, UserName } = req.body;
  const encryptedPassword = await bcrypt.hash(Password, 10);

  const user = await knex("users")
    .where({ email: Email })
    .then((user) => user[0]);
  if (user) {
    res.json({ error: "email is already used" });
  } else {
    knex("users")
      .insert(
        {
          email: Email,
          password: encryptedPassword,
          name: UserName,
          created_at: new Date()
        },
        "eee"
      )
      .then((user) => {
        res.json({ message: "User Created " });
      })
      .catch((err) => {
        res
          .json({
            user: {},
            error: "check your Data",
          })
          .status(401);
      })
  }
};

const updateuser = async (req, res) => {
  const { Email, Password, UserName } = req.body;
  const encryptedPassword = await bcrypt.hash(Password, 10);
  knex("users")
    .update({
      email: Email,
      password: encryptedPassword,
      name: UserName,
      updated_at: new Date()
    })
    .where({ email: Email })
    .then((user) => {
      res.json({ message: "User Updated " });
    })
    .catch((err) => {
      res
        .json({
          user: {},
          error: "Check your Email or Password",
        })
        .status(401);
    });
};

const resetpass = async (req, res) => {
  if (!req.query || !req.query.email) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const { email } = req.query;

  const user = await knex("users")
    .where({ email: email })
    .then((res) => res[0]);

  if (!user) res.status(400).send({ error: "Email Not found !" });
  else {
    const token = jwt.sign(user?.id, process.env.JWT_KEY);

    res.json({
      id: user.id,
      token: token,
      message: "success",
    });
  }
};

const updatepass = async (req, res) => {
  const id = req.params.id;
  if (!req.body) {
    res.status(400).send({ error: "Content can not be empty!" });
    return;
  }
  const Password = req.body.password;
  const encryptedPassword = await bcrypt.hash(Password, 10);

  knex("users")
    .update({
      password: encryptedPassword,
      updated_at: new Date()
    })
    .where({ id: id })
    .then(() => {
      res.json({ message: "password updated" });
    })
    .catch(() => {
      res
        .json({
          user: {},
          error: "Check your Email or Password",
        })
        .status(401);
    });
};

const getusers = async (req, res) => {
  knex("users")
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
  authUser,
  Adduser,
  updateuser,
  getusers,
  resetpass,
  updatepass,
};
