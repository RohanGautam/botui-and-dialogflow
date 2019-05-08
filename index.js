// import BotUI from 'botui';
var botui = new BotUI('botui-app') // id of container

//Function to query flask api for dialogflow response
const callAPI = async (requestStr) => {
    console.log(requestStr);
    const response = await fetch(`http://localhost:5000/request/${requestStr}`);
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson);
    return (myJson);
}

botui.message.bot({ // show first message
    delay: 200,
    content: 'hello'
}).then(() => {
    return botui.action.text({
        action: {
            placeholder: "Your query"
        }
    });
}).then(async (res) => {

    botui.message.add({
        loading: true
    }).then(async (index) => {
        jsonResult = await callAPI(res.value);
        console.log('here it\'s', res.value);
        return botui.message.update(index, {
            loading: false,
            content: `${jsonResult['response']}`
        });
    }).then(() => {///////////////////////////////////////////////////////////////
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
    })
})

/*
.then(() => {
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
})
*/