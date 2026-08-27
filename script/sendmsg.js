module.exports = {
  config: {
    name: "sendmsg",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "sendmsg command",
    usage: "/sendmsg",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /sendmsg command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
