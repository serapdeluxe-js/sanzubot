module.exports = {
  config: {
    name: "capwall",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "capwall command",
    usage: "/capwall",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /capwall command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
