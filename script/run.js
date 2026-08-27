module.exports = {
  config: {
    name: "run",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "run command",
    usage: "/run",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /run command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
