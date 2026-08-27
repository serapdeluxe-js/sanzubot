module.exports = {
  config: {
    name: "thread",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "thread command",
    usage: "/thread",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /thread command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
