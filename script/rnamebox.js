module.exports = {
  config: {
    name: "rnamebox",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "rnamebox command",
    usage: "/rnamebox",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /rnamebox command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
