module.exports = {
  config: {
    name: "kissv3",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "kissv3 command",
    usage: "/kissv3",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /kissv3 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
