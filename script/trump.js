module.exports = {
  config: {
    name: "trump",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "trump command",
    usage: "/trump",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /trump command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
