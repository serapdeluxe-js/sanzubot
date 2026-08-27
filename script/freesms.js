module.exports = {
  config: {
    name: "freesms",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "freesms command",
    usage: "/freesms",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /freesms command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
