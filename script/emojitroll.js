module.exports = {
  config: {
    name: "emojitroll",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "emojitroll command",
    usage: "/emojitroll",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /emojitroll command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
