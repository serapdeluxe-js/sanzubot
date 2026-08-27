module.exports = {
  config: {
    name: "outbox",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "outbox command",
    usage: "/outbox",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /outbox command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
