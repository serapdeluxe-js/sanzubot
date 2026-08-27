module.exports = {
  config: {
    name: "studentv3",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "studentv3 command",
    usage: "/studentv3",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /studentv3 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
