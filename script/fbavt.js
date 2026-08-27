module.exports = {
  config: {
    name: "fbavt",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "fbavt command",
    usage: "/fbavt",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /fbavt command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
