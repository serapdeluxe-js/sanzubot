module.exports = {
  config: {
    name: "autoleave",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "autoleave command",
    usage: "/autoleave",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /autoleave command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
