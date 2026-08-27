module.exports = {
  config: {
    name: "avtfbcover",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "avtfbcover command",
    usage: "/avtfbcover",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /avtfbcover command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
