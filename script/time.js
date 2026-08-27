module.exports = {
  config: {
    name: "time",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "time command",
    usage: "/time",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /time command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
