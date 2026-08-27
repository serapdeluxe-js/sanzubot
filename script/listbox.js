module.exports = {
  config: {
    name: "listbox",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "listbox command",
    usage: "/listbox",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /listbox command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
