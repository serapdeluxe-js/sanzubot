module.exports = {
  config: {
    name: "avtwibu4",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "avtwibu4 command",
    usage: "/avtwibu4",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /avtwibu4 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
