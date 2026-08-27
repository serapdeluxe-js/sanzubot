module.exports = {
  config: {
    name: "warning",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "warning command",
    usage: "/warning",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /warning command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
