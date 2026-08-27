module.exports = {
  config: {
    name: "setgroupname",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "setgroupname command",
    usage: "/setgroupname",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /setgroupname command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
