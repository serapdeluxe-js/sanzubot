module.exports = {
  config: {
    name: "spambannopref",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "spambannopref command",
    usage: "/spambannopref",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /spambannopref command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
