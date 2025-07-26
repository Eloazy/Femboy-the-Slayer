require("dotenv").config({ quiet: true })
const { REST, Routes }= require("discord.js")

const commands = [
	{
		name: 'info',
		description: 'info about the bot'
	}
]

const rest = new REST({ version: '10' }).setToken(process.env.token);

(async () => {
	try {
		await rest.put(
			Routes.applicationGuildCommands("1397765769118617641", "1315502142676533360"),
			{ body: commands }
		)
	console.log('registered')
	} catch(error){console.error(error)}
})()
