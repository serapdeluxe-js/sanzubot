module.exports = {
  config: {
    name: "speedtest",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "speedtest command",
    usage: "/speedtest",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /speedtest command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
