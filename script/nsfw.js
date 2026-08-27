module.exports = {
  config: {
    name: "nsfw",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "nsfw command",
    usage: "/nsfw",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /nsfw command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
