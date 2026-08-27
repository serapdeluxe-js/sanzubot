module.exports = {
  config: {
    name: "hugv2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "hugv2 command",
    usage: "/hugv2",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /hugv2 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
