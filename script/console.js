module.exports = {
  config: {
    name: "console",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "console command",
    usage: "/console",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /console command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
