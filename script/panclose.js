module.exports = {
  config: {
    name: "panclose",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "panclose command",
    usage: "/panclose",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /panclose command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
