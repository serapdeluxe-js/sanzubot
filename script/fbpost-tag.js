module.exports = {
  config: {
    name: "fbpost-tag",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "fbpost-tag command",
    usage: "/fbpost-tag",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /fbpost-tag command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
