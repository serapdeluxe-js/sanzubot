module.exports = {
  config: {
    name: "simpson",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "simpson command",
    usage: "/simpson",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /simpson command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
