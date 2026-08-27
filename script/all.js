module.exports = {
  config: {
    name: "all",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "all command",
    usage: "/all",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /all command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
