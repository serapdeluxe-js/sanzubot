module.exports = {
  config: {
    name: "girl",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "girl command",
    usage: "/girl",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /girl command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
