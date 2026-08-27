module.exports = {
  config: {
    name: "marriedv5",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "marriedv5 command",
    usage: "/marriedv5",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /marriedv5 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
