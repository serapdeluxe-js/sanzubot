module.exports = {
  config: {
    name: "fortunetellinglove",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "fortunetellinglove command",
    usage: "/fortunetellinglove",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /fortunetellinglove command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
