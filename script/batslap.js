module.exports = {
  config: {
    name: "batslap",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "batslap command",
    usage: "/batslap",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /batslap command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
