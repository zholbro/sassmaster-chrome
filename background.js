function sendTextToAPI(info) {
  axios.post('http://localhost:4567/sarc', {
        text: info.selectiontext
    })
    .then(function (response) {
      
      console.log(response)
    }).catch(function (error) {
      console.log(error)
    }); 
};

chrome.contextMenus.create({title: "Check the selection for sarcasm", contexts:["selection"], onclick: sendTextToAPI});

