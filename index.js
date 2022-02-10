const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
       Discord.Intents.FLAGS.GUILDS,
       Discord.Intents.FLAGS.GUILD_MESSAGES,
       Discord.Intents.FLAGS.DIRECT_MESSAGES,
    ]
});

const prefix = "?";

Client.on("ready", () => {
    console.log("bot opérationnel");
});


Client.login("");


//variables exprimer des sentiments par gif

let hug = "https://tenor.com/view/mochi-peachcat-mochi-peachcat-hug-pat-gif-19092449";

let cuddle = "https://tenor.com/view/mochi-cuddle-peach-goma-gif-20216925";

let feed = "https://tenor.com/view/pokemon-pikachu-food-feed-eat-gif-16389999";

let kiss = "https://tenor.com/view/kisses-love-couple-kiss-muah-gif-16851922";

let slap = "https://tenor.com/view/pikachu-slap-fight-mad-no-gif-16415016";

let tickle = "https://tenor.com/view/tickle-laugh-gif-19915995";

let rage = "https://tenor.com/view/rosycheeks-mochi-peach-mochi-cat-cute-kitty-peach-cat-gif-16992614";



Client.on("messageCreate", message => {
    if (message.author.bot) return;
    //commande de fun gif
    else if(message.content === prefix + "hug"){
        message.reply(hug)
    }
    else if(message.content === prefix + "cuddle"){
        message.reply(cuddle)
    }
    else if(message.content === prefix + "feed"){
        message.reply(feed)
    }
    else if(message.content === prefix + "kiss"){
        message.reply(kiss)
    }
    else if(message.content === prefix + "slap"){
        message.reply(slap)
    }
    else if(message.content === prefix + "tickle"){
        message.reply(tickle)
    }
    else if(message.content === prefix + "rage"){
        message.reply(rage)
    }


    //commandes help
    if(message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
            .setColor("#80ff00")
            .setTitle("Commandes helps")
            .setDescritpion("Vous avez en dessous, la liste des commande help:")
        

    message.channel.send({ embeds: [embed]});


}





});
