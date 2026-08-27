module.exports = {
  config: {
    name: "antimultiplebot",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "antimultiplebot command",
    usage: "/antimultiplebot",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /antimultiplebot command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
