module.exports = {
  config: {
    name: "avtwibu1",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "avtwibu1 command",
    usage: "/avtwibu1",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /avtwibu1 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
