import {TextChannel} from "discord.js";
import {CONFIG} from "../../config/config";

export default class WarnMessage {

    async getLogs(client: any) {
        const _textChannel: TextChannel = client.channels.cache.get(CONFIG.TEXT_CHANNEL);
        const _logChannel: TextChannel = client.channels.cache.get(CONFIG.LOG_CHANNEL);
        let lastMessage: any = _textChannel.lastMessage?.content;
        let author: any = _textChannel.lastMessage?.author;
        if (lastMessage) {
            return _logChannel.send(
                `User: ${author}\nMessage: ${lastMessage}`,
            )
                .then(message => console.log(`TEXT CHANNEL: ${_textChannel.id}, MESSAGE: ${message.content}`))
                .catch(console.error);
        }
    }
}