module.exports = {
  config: {
    name: "setname",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "setname command",
    usage: "/setname",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /setname command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
