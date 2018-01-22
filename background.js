function sendTextToAPI(info) {

  fetch('http://localhost:4567/sarc', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(
        {'text': info.selectionText }
      )
  }).then(function(res) {
    res.text().then(response => {
      x = JSON.parse(response)
      alert(`That was: ${x.prediction}.
            Bayes predicts: ${x.data.bayes.prediction}.
            ML predicts: ${x.data.ml.prediction}.`);
    });
  }).catch(function(error) {
    alert(error)
  });
}

chrome.contextMenus.create({title: "Check this selection for sarcasm", contexts:["selection"],
                            onclick: sendTextToAPI});

