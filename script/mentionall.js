module.exports = {
  config: {
    name: "mentionall",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "mentionall command",
    usage: "/mentionall",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /mentionall command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
