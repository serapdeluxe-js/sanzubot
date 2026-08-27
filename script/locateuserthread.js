module.exports = {
  config: {
    name: "locateuserthread",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "locateuserthread command",
    usage: "/locateuserthread",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /locateuserthread command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
