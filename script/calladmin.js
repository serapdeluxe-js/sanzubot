module.exports = {
  config: {
    name: "calladmin",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "calladmin command",
    usage: "/calladmin",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /calladmin command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
