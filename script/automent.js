module.exports = {
  config: {
    name: "automent",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "automent command",
    usage: "/automent",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /automent command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
