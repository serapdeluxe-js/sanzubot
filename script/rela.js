module.exports = {
  config: {
    name: "rela",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "rela command",
    usage: "/rela",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /rela command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
