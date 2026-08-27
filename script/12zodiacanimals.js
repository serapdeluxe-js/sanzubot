module.exports = {
  config: {
    name: "12zodiacanimals",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "12zodiacanimals command",
    usage: "/12zodiacanimals",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /12zodiacanimals command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
