module.exports = {
  config: {
    name: "infobox",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "infobox command",
    usage: "/infobox",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /infobox command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
