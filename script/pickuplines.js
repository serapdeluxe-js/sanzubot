module.exports = {
  config: {
    name: "pickuplines",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "pickuplines command",
    usage: "/pickuplines",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /pickuplines command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
