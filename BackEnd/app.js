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
    cb(null, "../../Portalite/src/assets/uploads");
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

const ArticlesRoutes = require("./Routers/articlesRouters");
app.use("/api/articles", ArticlesRoutes);

const WeareRoutes = require("./Routers/weareRouters");
app.use("/api/weare", WeareRoutes);

const TeamsRoutes = require("./Routers/teamsRouters");
app.use("/api/teams", TeamsRoutes);

const ConfigRoutes = require("./Routers/configRouters");
app.use("/api/config", ConfigRoutes);

const ContactRoutes = require("./Routers/contactRouters");
app.use("/api/contact", ContactRoutes);

const SocialsRoutes = require("./Routers/socialsRouters");
app.use("/api/socials", SocialsRoutes);

const SlidersRoutes = require("./Routers/slidersRouters");
app.use("/api/sliders", SlidersRoutes);

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

const SimulationRoutes = require("./Routers/simulationsRouters");
app.use("/api/simulations", SimulationRoutes);

const servicesRoutes = require("./Routers/servicesRouters");
app.use("/api/services", servicesRoutes);

const DataRoutes = require("./Routers/dataRouters");
app.use("/api/data", DataRoutes);


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
