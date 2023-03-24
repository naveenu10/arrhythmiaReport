
const fs = require("fs");
const path = require("path");
const { html_to_pdf } = require("./html_to_pdf");
// const dataBinding=require('./data');
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

try {
  (async () => {
    const dataBinding = JSON.parse(argv.json)
    const templateHtml = fs.readFileSync(
      path.join(process.cwd(), "report.html"),
      "utf8"
    );

    const options = {
      format: "A4",
      headerTemplate: "<p></p>",
      footerTemplate: "<p></p>",
      displayHeaderFooter: false,
      margin: {
        top: "40px",
        bottom: "100px",
      },
      printBackground: true,
      path: `${dataBinding.patient.uuid}.pdf`,
    };
    await html_to_pdf({ templateHtml, dataBinding:dataBinding, options });

    console.log("Done: report.pdf is created!");
  })();
} catch (err) {
  console.log("ERROR:", err);
}
