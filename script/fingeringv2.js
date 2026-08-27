module.exports = {
  config: {
    name: "fingeringv2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "fingeringv2 command",
    usage: "/fingeringv2",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /fingeringv2 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
