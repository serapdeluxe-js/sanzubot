module.exports = {
  config: {
    name: "setgroupemoji",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "setgroupemoji command",
    usage: "/setgroupemoji",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /setgroupemoji command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
