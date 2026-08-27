module.exports = {
  config: {
    name: "groupimage",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "groupimage command",
    usage: "/groupimage",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /groupimage command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
