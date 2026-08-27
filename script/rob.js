module.exports = {
  config: {
    name: "rob",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "rob command",
    usage: "/rob",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /rob command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
