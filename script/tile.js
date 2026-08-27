module.exports = {
  config: {
    name: "tile",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "tile command",
    usage: "/tile",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /tile command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
