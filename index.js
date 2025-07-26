const fs = require('fs')
const path = require('path')

console.log('loading commands: ')
const commands = new Map()
const commandPath = path.join(__dirname, 'commands')
const commandsFiles = fs.readdirSync(commandPath).filter(file => file.endsWith('js'))

for (const file of commandsFiles) {
	const filePath = path.join(commandPath, file)
	const command = require(filePath)
	if(command.name && typeof command.execute === 'function') {
		commands.set(command.name, command)
		console.log(`loaded ${file}`)
	} else {
		console.warn(`FILE SINTAX ERROR ${file}`)
	}
}

const { Client, GatewayIntentBits } = require('discord.js')
require('dotenv').config({ quiet: true })

const client = new Client({ 
		intents: [

		]
	})

client.on("ready", () => {
	console.log("--------------")
	console.log("client started")
})

client.on("interactionCreate", async(interaction) => {
	if(interaction.isCommand() && interaction.user.bot == false) {
		if(commands.has(interaction.commandName)) {
			const cmd = commands.get(interaction.commandName)
			cmd.execute(interaction)
		} else {
			console.warn(`FILE NOT FOUND: ${interaction.commandName}`)
		}
	}
})

client.login(process.env.token)