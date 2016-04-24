var express = require('express')
var bodyParser = require('body-parser')

var request = require('request')
var Promise = require("bluebird");

var emoji = require('node-emoji');
var app = express()
var core = require('./core');

app.set('port', (process.env.PORT || 5000))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())

// index
app.get('/', function (req, res) {
	res.send('hello world i am a secret bot')
})

// for facebook verification
app.get('/webhook/', function (req, res) {
	if (req.query['hub.verify_token'] === 'my_voice_is_my_password_verify_me') {
		res.send(req.query['hub.challenge'])
	}
	res.send('Error, wrong token')
})

// to post data
app.post('/webhook/', function (req, res) {
	messaging_events = req.body.entry[0].messaging
	for (i = 0; i < messaging_events.length; i++) {
		event = req.body.entry[0].messaging[i]
		sender = event.sender.id
		if (event.message && event.message.text) {
			console.log(sender);
			var presenter = {
			  showAutor: function(autor){
			    return sendText(sender, autor.name +" is answering:").then(function(){
			    	return sendImage(sender, autor.image);
			    });
			  },
			  showText: function(text){
					return sendText(sender, text);
				},
			  showImage: function(url){
					return sendImage(sender, url);
				},
			  showVideo: function(url){
					return sendText(sender, url);
				},
			  showQuiz: function(quiz){
					return sendQuiz(sender, quiz);
				},
			  showShop: function(){
					return sendShop(sender);
				}
			}

			core.parse(event.message.text, presenter);
		}
		if (event.postback) {
			text = JSON.stringify(event.postback)
			if(text.indexOf("true") > -1) {
				sendText(sender, "You are right! :)")
			}
			else
			{
				sendText(sender, "You are wrong! :(")
			}
			continue
		}
	}
	res.sendStatus(200)
})

var token = "CAAH0CIfLMaoBALyKiSRfSxmYHZCfbj4O60nrl4lu0eGUIBxZApjNAfYzsGZCxu637dQP4MfTpe8gegC2LwRZB7JF6lNbxKWUTYeaKR7ZCouVNL12LhHDsz5dFrjVyrbVZBKjQGFC9o5zy1aDrZCx4CMZCVEwBbGkhjWA4q8HTogXXK0yRwQKJvgEA8Uiqe6SNbUZD"

function sendText(sender, text) {
	messageData = {
		text:text
	}
	return sendToUser(sender,messageData)
}

function sendQuiz(sender, quiz) {
	messageData = {
		"attachment": {
			"type": "template",
			"payload": {
				"template_type": "generic",
				"elements": [{
					"title": quiz.question,
					"image_url": quiz.image,
					"buttons": quiz.options.map(function(option){
						return {
							"type": "postback",
							"title": option.title,
							"payload": option.value ? "true" : "false"
						}
					})
				}]
			}
		}
	}
	return sendToUser(sender,messageData)
}

function sendShop(sender) {
	messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "Apparel",
                    "image_url": "http://shopnasa.com/wp-content/uploads/2015/08/Cobalt-Meatball-580x385.jpg",
                    "buttons": [{
                        "type": "web_url",
                        "url": "http://shopnasa.com/apparel/",
                        "title": "View"
                    }],
                }, {
                    "title": "Space Food",
                    "image_url": "http://shopnasa.com/wp-content/uploads/2015/08/125030-580x497.jpg",
                    "buttons": [{
                       "type": "web_url",
                        "url": "http://shopnasa.com/product-category/space-food/",
                        "title": "View"
                    }],
                },
                {
                    "title": "Accessories",
                    "image_url": "http://shopnasa.com/wp-content/uploads/2014/11/ITEM-425885-NASA-Meatball-on-chain-Keyring_clipped_rev_2-580x362.jpeg",
                    "buttons": [{
                       "type": "web_url",
                        "url": "http://shopnasa.com/accessories/",
                        "title": "View"
                    }],
                }]
            }
        }
    }
	return sendToUser(sender,messageData)
}

function sendImage(sender, url) {
	messageData = {
    "attachment":{
      "type":"image",
      "payload":{
        "url":url
      }
    }
	}
	return sendToUser(sender,messageData)
}

function sendToUser(sender, messageData){
	return new Promise(function (resolve, reject) {
		request({
			url: 'https://graph.facebook.com/v2.6/me/messages',
			qs: {access_token:token},
			method: 'POST',
			json: {
				recipient: {id:sender},
				message: messageData,
			}
		}, function(error, response, body) {
			if (error) {
				console.log('Error sending messages: ', error)
				return reject();
			} else if (response.body.error) {
				console.log('Error: ', response.body.error)
				return reject();
			}
			return resolve();
		})
	});
};

// spin spin sugar
app.listen(app.get('port'), function() {
	console.log('running on port', app.get('port'))
})
