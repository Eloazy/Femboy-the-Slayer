const { EmbedBuilder } = require('discord.js')
const embed = new EmbedBuilder()
	.setAuthor({ name: 'Embers Familly' })
	.setTitle('Femboy the Slayer')
	.setDescription('Torn API, created by Eloazy & Caesarra. Name creator: LegendaryMelons\n\n[Femboy the Slayer](https://github.com/Eloazy/Femboy-the-Slayer) © 2025 by [Eloazy[3028393]](https://www.torn.com/profiles.php?XID=3028393) & [Caesarra[3655365]](https://www.torn.com/profiles.php?XID=3655365) is licensed under [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)')
	.setColor(0xffa6c9)
	.setTimestamp()
	.setFooter({ text: 'V:1.0.0'});

module.exports = {
	name: 'info',
	execute(interaction) {
		interaction.reply({ embeds: [embed] })
	}
}