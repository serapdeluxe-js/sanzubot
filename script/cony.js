module.exports = {
  config: {
    name: "cony",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "cony command",
    usage: "/cony",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /cony command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
