module.exports = {
  config: {
    name: "drake",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "drake command",
    usage: "/drake",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /drake command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
