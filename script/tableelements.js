module.exports = {
  config: {
    name: "tableelements",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "tableelements command",
    usage: "/tableelements",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /tableelements command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
