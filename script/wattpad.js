module.exports = {
  config: {
    name: "wattpad",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "wattpad command",
    usage: "/wattpad",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /wattpad command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
