const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("./lib/multer");
const pdfGenerator = require("./lib/pdfGenerator");
const socialImage = require("./lib/socialImage");
const cleanDirectories = require("./lib/cleanDirectories");

const app = express();
const PORT = 4000;
const PUBLIC_URL = process.env.PUBLIC_URL || "http://localhost:4000";

// Lancement du CRON de nettoyage
cleanDirectories(["./pdf"]);

// Configuration de Express
app.use(compression());
app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: false, limit: "100mb" }));
app.use(bodyParser.json({ limit: "100mb" }));
app.use(cors());

// Déclaration des routes statiques
app.use("/", express.static("../build"));
app.use("/image", express.static("uploads"));
app.use("/pdf", express.static("pdf"));

// Gestion de l'upload des images pour les réseaux sociaux
app.post("/image", multer.single("image"), (req, res) => {
  if (req.file) {
    // Send image's url with meta-tags associated
    res.send({ url: PUBLIC_URL + `/social/${req.file.filename}` });
  } else {
    console.log("No image sent");
    res.json({ error: "No image sent" });
  }
});

// Génération de page HTMl contenant une image avec méta-tags
app.get("/social/:file", (req, res) => {
  const imgUrl = PUBLIC_URL + `/image/${req.params.file}`;
  const socialUrl = PUBLIC_URL + `/social/${req.params.file}`;
  res.send(socialImage({ imgUrl, socialUrl }));
});

// Génération de PDF
app.post("/pdf", async (req, res) => {
  const { imgData } = req.body;
  if (!imgData) return res.json({ error: "No data in body" });

  try {
    const url = await pdfGenerator(imgData);
    if (url) {
      res.json({ url: PUBLIC_URL + url });
    } else {
      res.json({ error: "Error while generating PDF" });
    }
  } catch (error) {
    console.error(error);
    res.json({ error: "Error while generating PDF" });
  }
});

// Lancement du serveur Web
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));
