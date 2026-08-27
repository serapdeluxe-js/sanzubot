module.exports = {
  config: {
    name: "fish",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "fish command",
    usage: "/fish",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /fish command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
