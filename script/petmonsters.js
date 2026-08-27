module.exports = {
  config: {
    name: "petmonsters",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "petmonsters command",
    usage: "/petmonsters",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /petmonsters command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
