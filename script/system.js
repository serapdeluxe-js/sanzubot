module.exports = {
  config: {
    name: "system",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "system command",
    usage: "/system",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /system command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
