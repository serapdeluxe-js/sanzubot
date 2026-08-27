module.exports = {
  config: {
    name: "goibot",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "goibot command",
    usage: "/goibot",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /goibot command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
