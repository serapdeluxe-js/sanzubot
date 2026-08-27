module.exports = {
  config: {
    name: "log",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "log command",
    usage: "/log",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /log command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
