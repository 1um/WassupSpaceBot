var request = require("request");
var Promise = require("bluebird");
var sendTo = '964112640362982';

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

sendImage("http://assets.mshanken.com/wso/Articles/2015/UN_Comet102915_1600.jpg").then(function(){
  return sendText("Comet news!");
}).then(function(){
  return sendText("Some amazing news here!");
}).then(function(){
  return sendImage("http://24space.ru/uploads/posts/2015-04/1429830878_spacex-reusable-rocket-test.jpg")
});
