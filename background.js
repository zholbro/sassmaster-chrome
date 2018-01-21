function sendTextToAPI(info) {
  // axios({
  // 	method: 'post',
  // 	url: 'http://localhost:4567/sarc',
  // 	data: {
  // 		'text': info.selectiontext
  // 	}
  // }).then(function (response) {
  // 	console.log(response)
  // }).catch(function (error) {
  // 	console.log(error)
  // });
  fetch('http://localhost:4567/sarc', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({'text': 'testtext'})
  }).then(function(res) {
    alert(JSON.stringify(res.body))
  }).catch(function(error) {
    alert(error)
  });
}

chrome.contextMenus.create({title: "Check this selection for sarcasm", contexts:["selection"], onclick: sendTextToAPI});

