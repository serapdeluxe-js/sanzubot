module.exports = {
  config: {
    name: "runshell",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "runshell command",
    usage: "/runshell",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /runshell command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
