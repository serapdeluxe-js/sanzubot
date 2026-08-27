module.exports = {
  config: {
    name: "avtidlist",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "avtidlist command",
    usage: "/avtidlist",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /avtidlist command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
