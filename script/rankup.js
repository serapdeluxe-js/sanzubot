module.exports = {
  config: {
    name: "rankup",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "rankup command",
    usage: "/rankup",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /rankup command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
