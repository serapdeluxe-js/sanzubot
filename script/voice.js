module.exports = {
  config: {
    name: "voice",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "voice command",
    usage: "/voice",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /voice command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
