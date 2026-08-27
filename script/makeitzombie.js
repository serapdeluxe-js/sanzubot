module.exports = {
  config: {
    name: "makeitzombie",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "makeitzombie command",
    usage: "/makeitzombie",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /makeitzombie command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
