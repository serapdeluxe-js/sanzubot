module.exports = {
  config: {
    name: "girlnude",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "girlnude command",
    usage: "/girlnude",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /girlnude command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
