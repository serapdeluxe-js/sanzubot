module.exports = {
  config: {
    name: "tid",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "tid command",
    usage: "/tid",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /tid command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
