var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')
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

			var presenter = {
			  showAutor: function(autor){
			    sendText(sender, autor.emoji +' /'+autor.name+'/');
			  },
			  showText: function(text){
					sendText(sender, text);
				},
			  showImage: function(url){
					sendImage(sender, url);
				},
			  showVideo: function(url){
					sendText(sender, url);
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
		} else if (response.body.error) {
			console.log('Error: ', response.body.error)
		}
	})
}

function sendQuiz(sender) {
	messageData = {
		"attachment": {
			"type": "template",
			"payload": {
				"template_type": "generic",
				"elements": [{
					"title": "Question?",
					"image_url": "http://p.fod4.com/p/channels/nqgbp/profile/kbVD8kNhRZiuH8hSi0dt_Alf.jpg",
					"buttons": [{
						"type": "postback",
						"title": "Answer 1",
						"payload": "true",
					}, {
						"type": "postback",
						"title": "Answer 2",
						"payload": "false",
					}],
				}]
			}
		}
	}
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
		} else if (response.body.error) {
			console.log('Error: ', response.body.error)
		}
	})
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
		} else if (response.body.error) {
			console.log('Error: ', response.body.error)
		}
	})
}

// spin spin sugar
app.listen(app.get('port'), function() {
	console.log('running on port', app.get('port'))
})
