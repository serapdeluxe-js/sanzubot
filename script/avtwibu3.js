module.exports = {
  config: {
    name: "avtwibu3",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "avtwibu3 command",
    usage: "/avtwibu3",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /avtwibu3 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
