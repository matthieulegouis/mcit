const fs = require("fs");
const path = require("path");
const cron = require("node-cron");

const cleanDir = directory => {
  fs.readdir(directory, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.unlink(path.join(directory, file), err => {
        if (err) throw err;
      });
    }
  });
};

module.exports = directories =>
  // Clean les dossiers tous les jours à 02:00
  cron.schedule("0 2 * * *", () => {
    console.log(`Clean directories ${directories.join(", ")}`);
    directories.forEach(cleanDir);
  });
