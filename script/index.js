const fs = require("fs");
const path = require("path");

const commands = new Map();
const dir = __dirname;

for (const file of fs.readdirSync(dir).filter(f => f.endsWith(".js") && f !== "index.js")) {
  const command = require(path.join(dir, file));
  if (command?.config?.name && typeof command.run === "function") {
    commands.set(command.config.name.toLowerCase(), command);
  }
}

module.exports = commands;
