module.exports = {
  config: {
    name: "setbio",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "setbio command",
    usage: "/setbio",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /setbio command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
