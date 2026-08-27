module.exports = {
  config: {
    name: "hug",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "hug command",
    usage: "/hug",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /hug command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
