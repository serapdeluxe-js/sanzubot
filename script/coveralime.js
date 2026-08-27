module.exports = {
  config: {
    name: "coveralime",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "coveralime command",
    usage: "/coveralime",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /coveralime command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
