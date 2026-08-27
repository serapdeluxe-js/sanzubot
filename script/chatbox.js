module.exports = {
  config: {
    name: "chatbox",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "chatbox command",
    usage: "/chatbox",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /chatbox command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
