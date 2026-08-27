module.exports = {
  config: {
    name: "setusage",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "setusage command",
    usage: "/setusage",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /setusage command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
