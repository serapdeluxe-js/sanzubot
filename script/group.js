module.exports = {
  config: {
    name: "group",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "group command",
    usage: "/group",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /group command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
