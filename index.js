const fs = require("fs");
const path = require("path");

function constructObject(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const result = { pages: [] };

  entries.forEach((entry) => {
    if (entry.isDirectory()) {
      result.pages.push({
        group: entry.name,
        pages: constructObject(path.join(dirPath, entry.name)).pages,
      });
    } else {
      const fileName = entry.name.replace(path.extname(entry.name), "");
      result.pages.push(path.join(dirPath.split("/").slice(1).join("/"), fileName));
    }
  });

  return result;
}

// const rootDir = "."; // Replace with your root directory path
const structure = constructObject("./docs");

console.log(JSON.stringify(structure, null, 2));
