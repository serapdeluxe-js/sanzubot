const fs = require("fs-extra");
const path = require("path");

const { getPrefix } = global.utils;
const { commands, aliases } = global.GoatBot;

module.exports = {
	config: {
		name: "help",
		version: "2.0.0",
		author: "Sinzu",
		countDown: 3,
		role: 0,

		description: {
			en: "View all available Sanzu Bot commands.",
			vi: "View all available Sanzu Bot commands."
		},

		category: "system",

		guide: {
			en:
				"{pn}\n" +
				"{pn} <page>\n" +
				"{pn} <command>\n" +
				"{pn} <command> -i\n" +
				"{pn} <command> -g\n" +
				"{pn} <command> -a\n" +
				"{pn} <command> -r"
		},

		priority: 1
	},

	langs: {
		en: {
			pageNotFound:
				"╭━━━━━━━━━━━━━━━━━━━━╮\n" +
				"┃ ❌ PAGE NOT FOUND\n" +
				"╰━━━━━━━━━━━━━━━━━━━━╯\n" +
				"┃ Page %1 does not exist.\n" +
				"╰━━━━━━━━━━━━━━━━━━━━╯",

			commandNotFound:
				"╭━━━━━━━━━━━━━━━━━━━━╮\n" +
				"┃ ❌ COMMAND NOT FOUND\n" +
				"╰━━━━━━━━━━━━━━━━━━━━╯\n" +
				"┃ Command: %1\n" +
				"┃ This command is not loaded.\n" +
				"╰━━━━━━━━━━━━━━━━━━━━╯",

			help:
				"╭━━━━━━━━━━━━━━━━━━━━╮\n" +
				"┃      𝗦𝗔𝗡𝗭𝗨 𝗕𝗢𝗧\n" +
				"┃   𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗦𝗜𝗡𝗭𝗨\n" +
				"╰━━━━━━━━━━━━━━━━━━━━╯\n" +
				"%1\n" +
				"╭━━━━━━━━━━━━━━━━━━━━╮\n" +
				"┃ 📖 Page : %2 / %3\n" +
				"┃ ⚡ Commands : %4\n" +
				"┃ 🔰 Prefix : %5\n" +
				"╰━━━━━━━━━━━━━━━━━━━━╯\n" +
				"┃ %5help <page> — command list\n" +
				"┃ %5help <command> — command info\n" +
				"╰━━━━━━━━━━━━━━━━━━━━╯",

			info:
				"╭━━━━━━━━━━━━━━━━━━━━╮\n" +
				"┃      𝗦𝗔𝗡𝗭𝗨 𝗕𝗢𝗧\n" +
				"┃     𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗜𝗡𝗙𝗢\n" +
				"╰━━━━━━━━━━━━━━━━━━━━╯\n" +
				"┃ 📝 Name : %1\n" +
				"┃ 📂 Category : %2\n" +
				"┃ 📄 Description : %3\n" +
				"┃ 🔗 Alias : %4\n" +
				"┃ 👑 Role : %5\n" +
				"┃ ⏱ Cooldown : %6s\n" +
				"┃ 🛠 Version : %7\n" +
				"┃ 👤 Author : %8\n" +
				"╰━━━━━━━━━━━━━━━━━━━━╯\n" +
				"┃ 𝗨𝗦𝗔𝗚𝗘\n" +
				"╰━━━━━━━━━━━━━━━━━━━━╯\n" +
				"%9\n" +
				"╰━━━━━━━━━━━━━━━━━━━━╯\n" +
				"┃ 𝗦𝗔𝗡𝗭𝗨 𝗕𝗢𝗧 • 𝗦𝗜𝗡𝗭𝗨\n" +
				"╰━━━━━━━━━━━━━━━━━━━━╯",

			usage:
				"╭━━━━━━━━━━━━━━━━━━━━╮\n" +
				"┃       𝗨𝗦𝗔𝗚𝗘\n" +
				"╰━━━━━━━━━━━━━━━━━━━━╯\n" +
				"%1\n" +
				"╰━━━━━━━━━━━━━━━━━━━━╯",

			alias:
				"╭━━━━━━━━━━━━━━━━━━━━╮\n" +
				"┃        𝗔𝗟𝗜𝗔𝗦\n" +
				"╰━━━━━━━━━━━━━━━━━━━━╯\n" +
				"┃ Command : %1\n" +
				"┃ Alias : %2\n" +
				"╰━━━━━━━━━━━━━━━━━━━━╯",

			role:
				"╭━━━━━━━━━━━━━━━━━━━━╮\n" +
				"┃         𝗥𝗢𝗟𝗘\n" +
				"╰━━━━━━━━━━━━━━━━━━━━╯\n" +
				"┃ %1\n" +
				"╰━━━━━━━━━━━━━━━━━━━━╯",

			noAlias: "None",

			role0: "0 — Everyone",
			role1: "1 — Group Admin",
			role2: "2 — Bot Admin"
		}
	},

	onStart: async function ({
		message,
		args,
		event,
		threadsData,
		getLang,
		role
	}) {

		/*
		 * ==========================================
		 * BASIC DATA
		 * ==========================================
		 */

		const threadID = event.threadID;
		const prefix = getPrefix(threadID);

		const threadData = await threadsData.get(threadID);

		/*
		 * ==========================================
		 * FIND COMMAND
		 * ==========================================
		 */

		const commandName =
			(args[0] || "").toLowerCase();

		let command =
			commands.get(commandName) ||
			commands.get(aliases.get(commandName));

		/*
		 * GROUP ALIASES
		 */

		const groupAliases =
			threadData?.data?.aliases || {};

		if (!command && commandName) {

			for (const cmdName in groupAliases) {

				if (
					Array.isArray(groupAliases[cmdName]) &&
					groupAliases[cmdName]
						.map(x => x.toLowerCase())
						.includes(commandName)
				) {

					command =
						commands.get(cmdName);

					break;
				}
			}
		}

		/*
		 * ==========================================
		 * AUTOMATIC COMMAND LIST
		 * ==========================================
		 */

		if (
			(!args[0] && !command) ||
			(!isNaN(args[0]) && !command)
		) {

			const page =
				parseInt(args[0]) || 1;

			/*
			 * CHANGE THIS IF YOU WANT
			 * MORE COMMANDS PER PAGE
			 */

			const commandsPerPage = 25;

			const commandList = [];

			/*
			 * AUTOMATICALLY READ ALL
			 * LOADED COMMANDS
			 */

			for (const [name, value] of commands) {

				if (!value || !value.config)
					continue;

				/*
				 * HIDE COMMANDS THAT USER
				 * DOES NOT HAVE PERMISSION FOR
				 */

				if (
					Number(value.config.role || 0) >
					Number(role || 0)
				) {
					continue;
				}

				let description = "";

				/*
				 * AUTOMATIC DESCRIPTION
				 */

				if (value.config.description) {

					if (
						typeof value.config.description ===
						"string"
					) {

						description =
							value.config.description;

					} else {

						description =
							value.config.description.en ||
							value.config.description.vi ||
							"";
					}
				}

				/*
				 * AUTOMATIC CATEGORY
				 */

				const category =
					value.config.category ||
					"uncategorized";

				commandList.push({

					name: name,

					description: description,

					category: category,

					priority:
						Number(value.priority || 0)
				});
			}

			/*
			 * SORT COMMANDS
			 *
			 * Priority first
			 * Then alphabetical
			 */

			commandList.sort((a, b) => {

				if (b.priority !== a.priority) {

					return (
						b.priority -
						a.priority
					);
				}

				return a.name.localeCompare(
					b.name
				);
			});

			/*
			 * TOTAL PAGES
			 */

			const totalPages =
				Math.max(
					1,
					Math.ceil(
						commandList.length /
						commandsPerPage
					)
				);

			/*
			 * CHECK PAGE
			 */

			if (
				page < 1 ||
				page > totalPages
			) {

				return message.reply(
					getLang(
						"pageNotFound",
						page
					)
				);
			}

			/*
			 * GET CURRENT PAGE
			 */

			const start =
				(page - 1) *
				commandsPerPage;

			const currentCommands =
				commandList.slice(
					start,
					start + commandsPerPage
				);

			/*
			 * BUILD LIST
			 */

			let list = "";

			currentCommands.forEach(
				(cmd, index) => {

					const number =
						start + index + 1;

					const formattedNumber =
						number < 10
							? `0${number}`
							: `${number}`;

					list +=
						`┃ ${formattedNumber} ┃ ` +
						`${cmd.name}` +
						` — ${cmd.category.toUpperCase()}\n`;
				}
			);

			/*
			 * SEND HELP
			 */

			return message.reply(
				getLang(
					"help",

					list.trim(),

					page,

					totalPages,

					commandList.length,

					prefix
				)
			);
		}

		/*
		 * ==========================================
		 * COMMAND NOT FOUND
		 * ==========================================
		 */

		if (!command) {

			return message.reply(
				getLang(
					"commandNotFound",
					args[0]
				)
			);
		}

		/*
		 * ==========================================
		 * COMMAND CONFIG
		 * ==========================================
		 */

		const config =
			command.config;

		/*
		 * DESCRIPTION
		 */

		let description = "";

		if (
			typeof config.description ===
			"string"
		) {

			description =
				config.description;

		} else if (
			config.description
		) {

			description =
				config.description.en ||
				config.description.vi ||
				"";
		}

		/*
		 * GUIDE
		 */

		let guide =
			config.guide?.en ||
			config.guide?.vi ||
			"";

		if (
			typeof guide ===
			"object"
		) {

			guide =
				guide.body || "";
		}

		/*
		 * REPLACE VARIABLES
		 */

		guide =
			guide
				.replace(
					/\{prefix\}|\{p\}/g,
					prefix
				)
				.replace(
					/\{name\}|\{n\}/g,
					config.name
				)
				.replace(
					/\{pn\}/g,
					prefix +
					config.name
				);

		/*
		 * ALIASES
		 */

		const aliasesList =
			Array.isArray(config.aliases) &&
			config.aliases.length
				? config.aliases.join(", ")
				: getLang("noAlias");

		/*
		 * ROLE
		 */

		let roleText;

		if (
			Number(config.role || 0) === 0
		) {

			roleText =
				getLang("role0");

		} else if (
			Number(config.role || 0) === 1
		) {

			roleText =
				getLang("role1");

		} else {

			roleText =
				getLang("role2");
		}

		/*
		 * CATEGORY
		 */

		const category =
			config.category ||
			"uncategorized";

		/*
		 * ==========================================
		 * COMMAND OPTIONS
		 * ==========================================
		 */

		const option =
			(args[1] || "")
				.toLowerCase();

		/*
		 * USAGE
		 */

		if (
			option === "-g" ||
			option === "guide" ||
			option === "-u" ||
			option === "usage"
		) {

			return message.reply(
				getLang(
					"usage",

					guide
						? guide
							.split("\n")
							.map(
								line =>
									`┃ ${line}`
							)
							.join("\n")
						: "┃ No usage available"
				)
			);
		}

		/*
		 * ALIAS
		 */

		if (
			option === "-a" ||
			option === "alias" ||
			option === "aliases"
		) {

			return message.reply(
				getLang(
					"alias",

					config.name,

					aliasesList
				)
			);
		}

		/*
		 * ROLE
		 */

		if (
			option === "-r" ||
			option === "role"
		) {

			return message.reply(
				getLang(
					"role",

					roleText
				)
			);
		}

		/*
		 * ==========================================
		 * FULL COMMAND INFO
		 * ==========================================
		 */

		return message.reply(
			getLang(

				"info",

				config.name,

				category,

				description ||
				"No description",

				aliasesList,

				roleText,

				config.countDown ||
				1,

				config.version ||
				"1.0.0",

				config.author ||
				"Unknown",

				guide
					? guide
						.split("\n")
						.map(
							line =>
								`┃ ${line}`
						)
						.join("\n")
					: "┃ No usage available"
			)
		);
	}
};
