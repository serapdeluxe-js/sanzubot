module.exports = {
  config: {
    name: "adminconfig",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "adminconfig command",
    usage: "/adminconfig",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /adminconfig command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
