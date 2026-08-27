module.exports = {
  config: {
    name: "avtwibu1",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: avtwibu1",
    usage: "+avtwibu1",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +avtwibu1 received: ${text}`
      : `✅ +avtwibu1 is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
