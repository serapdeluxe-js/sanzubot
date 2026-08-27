module.exports = {
  config: {
    name: "schoolid",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "schoolid command",
    usage: "/schoolid",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /schoolid command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
