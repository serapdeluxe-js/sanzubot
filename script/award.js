module.exports = {
  config: {
    name: "award",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "award command",
    usage: "/award",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /award command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
