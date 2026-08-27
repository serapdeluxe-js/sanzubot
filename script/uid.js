module.exports = {
  config: {
    name: "uid",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "uid command",
    usage: "/uid",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /uid command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
