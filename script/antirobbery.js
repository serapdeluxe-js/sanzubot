module.exports = {
  config: {
    name: "antirobbery",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "antirobbery command",
    usage: "/antirobbery",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /antirobbery command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
