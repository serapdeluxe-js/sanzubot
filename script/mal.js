module.exports = {
  config: {
    name: "mal",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "mal command",
    usage: "/mal",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /mal command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
