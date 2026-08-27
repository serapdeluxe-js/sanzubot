module.exports = {
  config: {
    name: "idst",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "idst command",
    usage: "/idst",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /idst command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
