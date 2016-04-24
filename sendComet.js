var request = require("request");
var Promise = require("bluebird");
var sendTo = '964112640362982';

var token = "CAAH0CIfLMaoBALyKiSRfSxmYHZCfbj4O60nrl4lu0eGUIBxZApjNAfYzsGZCxu637dQP4MfTpe8gegC2LwRZB7JF6lNbxKWUTYeaKR7ZCouVNL12LhHDsz5dFrjVyrbVZBKjQGFC9o5zy1aDrZCx4CMZCVEwBbGkhjWA4q8HTogXXK0yRwQKJvgEA8Uiqe6SNbUZD"

function sendText(text) {
	messageData = {
		text:text
	}
	return sendToUser(sendTo, messageData)
}

function sendImage(url) {
	messageData = {
    "attachment":{
      "type":"image",
      "payload":{
        "url":url
      }
    }
	}
	return sendToUser(sendTo,messageData)
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

sendImage("https://pp.vk.me/c633128/v633128068/2643b/uPBWkFVlyqM.jpg").then(function(){
  return sendText("Comet news!");
}).then(function(){
  return sendText("Happy #EarthDay!\n'Look again at that dot, That's home... on a mote of dust suspended in a sunbeam.'"' -Carl Sagan");
}).then(function(){
  return sendImage("https://meridianes.files.wordpress.com/2011/07/iss022e080014.jpg")
});
