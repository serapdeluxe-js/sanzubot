module.exports = {
  config: {
    name: "gagstock",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "gagstock command",
    usage: "/gagstock",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /gagstock command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
