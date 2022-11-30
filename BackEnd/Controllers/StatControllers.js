const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { DbOptions } = require("../KnexConfig/config");
const knex = require("../KnexConfig/config");

require("dotenv").config();

const getnbSimulation = async (req, res) => {
  knex("simulations")
    .where(
      "created_at",
      "like",
      `%${new Date().toISOString().substring(0, 10)}%`
    )
    .count("id as nb")
    .then((rows) => {
      res.json(rows[0].nb).status(200);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getnbMeeting = async (req, res) => {
  knex("reservation")
    .count("id as nb")

    .where("date", "like", `%${new Date().toISOString().substring(0, 10)}%`)
    .then((rows) => {
      res.json(rows[0].nb).status(200);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getnbcontacts = async (req, res) => {
  knex("contacts")
    .where(
      "created_at",
      "like",
      `%${new Date().toISOString().substring(0, 10)}%`
    )
    .count("id as nb")
    .then((rows) => {
      res.json(rows[0].nb).status(200);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getnbSimulationNbr = async (req, res) => {
  
  let January = 0;
  let February = 0;
  let March = 0;
  let April = 0;
  let May = 0;
  let June = 0;
  let July = 0;
  let August = 0;
  let September = 0;

  let oct = 0;
  let nouv = 0;
  let des = 0;

  

  await knex("simulations")
    .where("created_at", "like", '%-01%')
    .count("id as nb")
    .then((rows) => {
      January = rows[0].nb;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

    console.log("j",January )

  await knex("simulations")
    .where("created_at", "like", '%-02%')
    .count("id as nb")
    .then((rows) => {
      February = rows[0].nb;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  await knex("simulations")
    .where("created_at", "like", '%-03%')
    .count("id as nb")
    .then((rows) => {
      March = rows[0].nb;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  await knex("simulations")
    .where("created_at", "like", '%-04%')
    .count("id as nb")
    .then((rows) => {
      April = rows[0].nb;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  await knex("simulations")
    .where("created_at", "like", '%-05%')
    .count("id as nb")
    .then((rows) => {
      May = rows[0].nb;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  await knex("simulations")
    .where("created_at", "like", '%-06%')
    .count("id as nb")
    .then((rows) => {
      June = rows[0].nb;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  await knex("simulations")
    .where("created_at", "like", '%-07%')
    .count("id as nb")
    .then((rows) => {
      July = rows[0].nb;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  await knex("simulations")
    .where("created_at", "like", '%-08%')
    .count("id as nb")
    .then((rows) => {
      August = rows[0].nb;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  await knex("simulations")
    .where("created_at", "like", '%-09%')
    .count("id as nb")
    .then((rows) => {
      September = rows[0].nb;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  await knex("simulations")
    .where("created_at", "like", '%-10%')
    .count("id as nb")
    .then((rows) => {
      oct = rows[0].nb;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  await knex("simulations")
    .where("created_at", "like", '%-11%')
    .count("id as nb")
    .then((rows) => {
      nouv = rows[0].nb;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

    
  await knex("simulations")
  .where("created_at", "like", '%-12%')
  .count("id as nb")
  .then((rows) => {
    des = rows[0].nb;
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });


 var months = [
      
        January,
        February ,
        March,
        April,
        May,
        June,
        July,
        August,
        September,
        oct,
        nouv,
        des
    
    ];

    const data = { months};

 if (data) {
      res.status(200).json(data);
    } else res.status(500).json({ err });
  

};

module.exports = {
  getnbSimulation,
  getnbcontacts,
  getnbMeeting,
  getnbSimulationNbr
};
