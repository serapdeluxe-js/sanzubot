module.exports = {
  config: {
    name: "weatherv2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "weatherv2 command",
    usage: "/weatherv2",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /weatherv2 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
