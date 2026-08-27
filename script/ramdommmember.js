module.exports = {
  config: {
    name: "ramdommmember",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "ramdommmember command",
    usage: "/ramdommmember",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /ramdommmember command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
