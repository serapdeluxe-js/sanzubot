module.exports = {
  config: {
    name: "autoseen",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "autoseen command",
    usage: "/autoseen",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /autoseen command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
