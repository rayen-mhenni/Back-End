const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
const multer = require("multer");
const path = require("path");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
    return res.status(200).json({});
  }
  next();
});

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "../covidtest_o/src/uploads");
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Images only!");
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

// POST File
app.post("/api/upload", upload.single("image"), (req, res) => {
  if (req.file.location) {
    return res.status(200).json({ message: "Image Uploaded With Success" });
  }

  res.send(req.file.location);
});

const UserRoutes = require("./Routers/usersRouters");
app.use("/api/users", UserRoutes);

const ArtilesRoutes = require("./Routers/articlesRouters");
app.use("/api/articles", ArtilesRoutes);

//Oussama....
const ConfigRoutes = require("./Routers/configRouters");
app.use("/api/config", ConfigRoutes);

const ContactRoutes = require("./Routers/contactRouters");
app.use("/api/contact", ContactRoutes);

const InformationsRoutes = require("./Routers/informationsRouters");
app.use("/api/informations", InformationsRoutes);

const InfosRoutes = require("./Routers/infosRouters");
app.use("/api/infos", InfosRoutes);

const OpinionsRoutes = require("./Routers/opinionsRouters");
app.use("/api/opinions", OpinionsRoutes);

const PartenersRoutes = require("./Routers/partenersRouters");
app.use("/api/parteners", PartenersRoutes);

const ReservationRoutes = require("./Routers/reservationRouters");
app.use("/api/reservation", ReservationRoutes);




app.get("/", (req, res) => {
  res.send("Api is Running Boy :=) ");
});

app.listen(process.env.PORT, () => {
  console.log(
    "server started at port " +
      process.env.PORT +
      " Connecting To Data Base " +
      process.env.DB_NAME
  );
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
