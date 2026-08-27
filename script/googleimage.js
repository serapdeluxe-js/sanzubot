module.exports = {
  config: {
    name: "googleimage",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "googleimage command",
    usage: "/googleimage",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /googleimage command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
