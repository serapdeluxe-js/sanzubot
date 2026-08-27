module.exports = {
  config: {
    name: "hugv3",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "hugv3 command",
    usage: "/hugv3",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /hugv3 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
