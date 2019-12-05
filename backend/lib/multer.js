const multer = require("multer");
const crypto = require("crypto");

const SECRET_SALT = process.env.SECRET_SALT || "dracaena";

// Configuration du storage pour Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const hashFn = crypto.createHash("sha256");
    const hash = hashFn
      .update(req.body.name + Date.now() + SECRET_SALT, "utf8")
      .digest("hex")
      .slice(0, 20);
    const ext = file.mimetype.split("/")[1];
    cb(null, `${hash}.${ext}`);
  }
});

module.exports = multer({
  storage: storage,
  limits: { fieldSize: "150MB" },
  fileFilter: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    const isAccepted = ["png", "jpg", "jpeg"].includes(ext);
    cb(null, isAccepted);
  }
});
