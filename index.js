// import BotUI from 'botui';
var botui = new BotUI('botui-app') // id of container

botui.message.bot({ // show first message
    delay: 200,
    content: 'hello'
}).then(() => {
    return botui.message.bot({ // second one
        delay: 1000, // wait 1 sec.
        content: 'how are you?'
    })
}).then(() => {
    return botui.action.button({ // let user do something
        delay: 1000,
        action: [
            {
                text: 'Good',
                value: 'good'
            },
            {
                text: 'Really Good',
                value: 'really_good'
            }
        ]
    })
}).then(res => {
    return botui.message.bot({
        delay: 1000,
        content: `You are feeling ${res.text}!`
    })
}).then(() => {
    botui.action.text({
        action:{
            placeholder: "your name"
        }
    });
})