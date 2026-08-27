module.exports = {
  config: {
    name: "ip",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "ip command",
    usage: "/ip",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /ip command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
