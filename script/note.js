module.exports = {
  config: {
    name: "note",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "note command",
    usage: "/note",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /note command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
