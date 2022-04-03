import {Client, TextChannel, CollectorFilter, Message, Snowflake, MessageCollectorOptions, MessageCollector} from "discord.js";
import {CONFIG} from "../../config/config";

export default class BotWelcome {

    async welcomeMessage(client: any) {
        const _textChannel: TextChannel = client.channels.cache.get(CONFIG.TEXT_CHANNEL);
        await _textChannel.send(
            `I'm chat bot`,
            {
                files: [{
                    attachment: 'D:\\Projects\\discord_bot\\assets\\hello.png',
                    name: 'file.jpg'
                }]
            }
        )
            .then(message => console.log(`TEXT CHANNEL: ${_textChannel.id}, MESSAGE: ${message.content}`))
            .catch(console.error);
    }
}