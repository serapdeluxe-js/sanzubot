module.exports = {
  config: {
    name: "groupemoji",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "groupemoji command",
    usage: "/groupemoji",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /groupemoji command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
