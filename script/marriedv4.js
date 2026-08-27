module.exports = {
  config: {
    name: "marriedv4",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "marriedv4 command",
    usage: "/marriedv4",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /marriedv4 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
