module.exports = {
  config: {
    name: "pingv2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "pingv2 command",
    usage: "/pingv2",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /pingv2 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
