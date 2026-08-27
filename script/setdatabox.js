module.exports = {
  config: {
    name: "setdatabox",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "setdatabox command",
    usage: "/setdatabox",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /setdatabox command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
