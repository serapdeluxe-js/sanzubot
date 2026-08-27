module.exports = {
  config: {
    name: "adminupdate",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "adminupdate command",
    usage: "/adminupdate",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /adminupdate command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
