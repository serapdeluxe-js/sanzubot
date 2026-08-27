module.exports = {
  config: {
    name: "setimggroup",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "setimggroup command",
    usage: "/setimggroup",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /setimggroup command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
