module.exports = {
  config: {
    name: "post",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "post command",
    usage: "/post",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /post command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
