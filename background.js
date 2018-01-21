function sendTextToAPI(window) {
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
      body: JSON.stringify({'text': window.getselection})
  }).then(function(res) {
    res.text().then(response => {
      x = JSON.parse(response)
      //alert(JSON.stringify(x));
      alert(`That was: ${x.prediction}. Bayes predicts: ${x.bayes.prediction}. ML predicts: ${x.ml.prediction}.`);
      // Bayes predicts: ${x.bayes.prediction}. ML predicts: ${x.ml.prediction}.
    });
  }).catch(function(error) {
    alert(error)
  });
}

chrome.contextMenus.create({title: "Check this selection for sarcasm", contexts:["selection"], onclick: sendTextToAPI});

