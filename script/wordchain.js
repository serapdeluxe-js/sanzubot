module.exports = {
  config: {
    name: "wordchain",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "wordchain command",
    usage: "/wordchain",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /wordchain command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
