module.exports = {
  config: {
    name: "setrankup",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "setrankup command",
    usage: "/setrankup",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /setrankup command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
