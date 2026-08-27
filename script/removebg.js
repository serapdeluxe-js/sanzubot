module.exports = {
  config: {
    name: "removebg",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "removebg command",
    usage: "/removebg",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /removebg command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
