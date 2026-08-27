module.exports = {
  config: {
    name: "hi",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "hi command",
    usage: "/hi",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /hi command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
