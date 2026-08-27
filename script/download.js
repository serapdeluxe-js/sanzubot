module.exports = {
  config: {
    name: "download",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "download command",
    usage: "/download",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /download command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
