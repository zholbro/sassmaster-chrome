function sendTextToAPI(info) {
  axios({
  	method: 'post',
  	url: 'http://localhost:4567/sarc',
  	data: {
  		text: info.selectiontext
  	}
  }).then(function (response) {
  	console.log(response)
  }).catch(function (error) {
  	console.log(error)
  });
}

chrome.contextMenus.create({title: "Check this selection for sarcasm", contexts:["selection"], onclick: sendTextToAPI});

