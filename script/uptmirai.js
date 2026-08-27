module.exports = {
  config: {
    name: "uptmirai",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "uptmirai command",
    usage: "/uptmirai",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /uptmirai command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
