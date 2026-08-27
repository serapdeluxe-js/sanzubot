module.exports = {
  config: {
    name: "chatbrainrot",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "chatbrainrot command",
    usage: "/chatbrainrot",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /chatbrainrot command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
