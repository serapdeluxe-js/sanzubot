module.exports = {
  config: {
    name: "bigtext",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "bigtext command",
    usage: "/bigtext",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /bigtext command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
