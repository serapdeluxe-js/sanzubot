module.exports = {
  config: {
    name: "chess",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "chess command",
    usage: "/chess",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /chess command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
