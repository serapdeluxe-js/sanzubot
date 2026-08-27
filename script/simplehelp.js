module.exports = {
  config: {
    name: "simplehelp",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "simplehelp command",
    usage: "/simplehelp",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /simplehelp command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
