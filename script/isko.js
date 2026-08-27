module.exports = {
  config: {
    name: "isko",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "isko command",
    usage: "/isko",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /isko command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
