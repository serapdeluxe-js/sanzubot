module.exports = {
  config: {
    name: "ngl-spam",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "ngl-spam command",
    usage: "/ngl-spam",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /ngl-spam command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
