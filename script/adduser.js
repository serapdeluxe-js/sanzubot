module.exports = {
  config: {
    name: "adduser",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "adduser command",
    usage: "/adduser",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /adduser command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
