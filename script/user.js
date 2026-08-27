module.exports = {
  config: {
    name: "user",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "user command",
    usage: "/user",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /user command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
