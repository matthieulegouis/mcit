const fs = require("fs");
const atob = require("atob");
const crypto = require("crypto");

global.window = {
  document: {
    createElementNS: () => {
      return {};
    }
  }
};
global.navigator = {};
global.btoa = () => {};
global.atob = atob;
const jsPDF = require("jspdf/dist/jspdf.node.min");

const SECRET_SALT = process.env.SECRET_SALT || "dracaena";

module.exports = (imgData, res) => {
  // Create new PDF
  const pdf = new jsPDF({
    orientation: "p",
    unit: "mm",
    format: "a4",
    putOnlyUsedFonts: true
  });

  // Get name for PDF file
  const hash = crypto
    .createHash("sha256")
    .update(SECRET_SALT + Date.now(), "utf8")
    .digest("hex")
    .slice(0, 20);
  const name = hash + ".pdf";

  // Add content to PDF
  const width = pdf.internal.pageSize.getWidth();
  const height = pdf.internal.pageSize.getHeight();
  pdf.addImage(imgData, "JPEG", 0, 0, width, height);

  // Save PDF file
  const pdfData = new Buffer(pdf.output("arraybuffer"));
  fs.writeFileSync("./pdf/" + name, pdfData);

  return "/pdf/" + name;
};
