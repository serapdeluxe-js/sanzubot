module.exports = {
  config: {
    name: "marriedv2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "marriedv2 command",
    usage: "/marriedv2",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /marriedv2 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
