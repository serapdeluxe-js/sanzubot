module.exports = {
  config: {
    name: "marriedv3",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "marriedv3 command",
    usage: "/marriedv3",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /marriedv3 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
