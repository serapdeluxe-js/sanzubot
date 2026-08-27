module.exports = {
  config: {
    name: "couple",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "couple command",
    usage: "/couple",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /couple command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
