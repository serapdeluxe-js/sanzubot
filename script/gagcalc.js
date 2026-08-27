module.exports = {
  config: {
    name: "gagcalc",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "gagcalc command",
    usage: "/gagcalc",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /gagcalc command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
