module.exports = {
  config: {
    name: "altar",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "altar command",
    usage: "/altar",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /altar command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
