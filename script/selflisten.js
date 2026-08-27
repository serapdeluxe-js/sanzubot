module.exports = {
  config: {
    name: "selflisten",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "selflisten command",
    usage: "/selflisten",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /selflisten command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
