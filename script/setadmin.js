module.exports = {
  config: {
    name: "setadmin",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "setadmin command",
    usage: "/setadmin",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /setadmin command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
