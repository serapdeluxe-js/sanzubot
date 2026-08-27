module.exports = {
  config: {
    name: "groupname",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "groupname command",
    usage: "/groupname",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /groupname command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
