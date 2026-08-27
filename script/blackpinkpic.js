module.exports = {
  config: {
    name: "blackpinkpic",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "blackpinkpic command",
    usage: "/blackpinkpic",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /blackpinkpic command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
