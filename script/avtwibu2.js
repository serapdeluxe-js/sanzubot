module.exports = {
  config: {
    name: "avtwibu2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "avtwibu2 command",
    usage: "/avtwibu2",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /avtwibu2 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
