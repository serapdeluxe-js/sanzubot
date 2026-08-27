module.exports = {
  config: {
    name: "setprefix",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "setprefix command",
    usage: "/setprefix",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /setprefix command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
