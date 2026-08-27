module.exports = {
  config: {
    name: "resend",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "resend command",
    usage: "/resend",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /resend command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
