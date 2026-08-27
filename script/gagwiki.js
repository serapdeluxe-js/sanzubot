module.exports = {
  config: {
    name: "gagwiki",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "gagwiki command",
    usage: "/gagwiki",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /gagwiki command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
