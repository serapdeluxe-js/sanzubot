module.exports = {
  config: {
    name: "job",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "job command",
    usage: "/job",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /job command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
