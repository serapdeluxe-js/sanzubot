module.exports = {
  config: {
    name: "rumbledletter",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "rumbledletter command",
    usage: "/rumbledletter",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /rumbledletter command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
