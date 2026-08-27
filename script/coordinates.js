module.exports = {
  config: {
    name: "coordinates",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "coordinates command",
    usage: "/coordinates",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /coordinates command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
