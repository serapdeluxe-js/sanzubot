module.exports = {
  config: {
    name: "doof",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "doof command",
    usage: "/doof",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /doof command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
