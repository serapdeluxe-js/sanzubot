module.exports = {
  config: {
    name: "finduid",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "finduid command",
    usage: "/finduid",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /finduid command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
