module.exports = {
  config: {
    name: "halloween",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "halloween command",
    usage: "/halloween",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /halloween command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
