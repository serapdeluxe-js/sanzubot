module.exports = {
  config: {
    name: "mark",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "mark command",
    usage: "/mark",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /mark command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
