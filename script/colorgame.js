module.exports = {
  config: {
    name: "colorgame",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "colorgame command",
    usage: "/colorgame",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /colorgame command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
