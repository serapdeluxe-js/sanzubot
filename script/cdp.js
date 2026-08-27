module.exports = {
  config: {
    name: "cdp",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "cdp command",
    usage: "/cdp",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /cdp command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
