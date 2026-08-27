module.exports = {
  config: {
    name: "listadmin",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "listadmin command",
    usage: "/listadmin",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /listadmin command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
