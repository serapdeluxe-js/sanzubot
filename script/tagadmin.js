module.exports = {
  config: {
    name: "tagadmin",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "tagadmin command",
    usage: "/tagadmin",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /tagadmin command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
