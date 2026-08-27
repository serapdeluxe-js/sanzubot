module.exports = {
  config: {
    name: "couplepic",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "couplepic command",
    usage: "/couplepic",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /couplepic command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
