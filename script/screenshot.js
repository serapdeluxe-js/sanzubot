module.exports = {
  config: {
    name: "screenshot",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "screenshot command",
    usage: "/screenshot",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /screenshot command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
