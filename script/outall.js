module.exports = {
  config: {
    name: "outall",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "outall command",
    usage: "/outall",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /outall command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
