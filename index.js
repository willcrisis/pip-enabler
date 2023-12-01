const archiver = require("archiver");
const fs = require("fs");

const DIRS_TO_IGNORE = [".DS_Store"];

if (!fs.existsSync("build")) fs.mkdirSync("build");

const output = fs.createWriteStream("build/bundle.zip");
const archive = archiver("zip");

output.on("close", function () {
  console.log(archive.pointer() + " total bytes");
  console.log(
    "archiver has been finalized and the output file descriptor has closed."
  );
});

archive.on("warning", function (err) {
  if (err.code === "ENOENT") {
    console.warn(err);
  } else {
    // throw error
    throw err;
  }
});

archive.on("error", function (err) {
  throw err;
});

archive.pipe(output);
archive.directory("app/", false);
archive.finalize();
