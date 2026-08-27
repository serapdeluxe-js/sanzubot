module.exports = {
  config: {
    name: "stk",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "stk command",
    usage: "/stk",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /stk command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
