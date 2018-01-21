function sendTextToAPI(selection) {
  axios.post('http://localhost:4567', {
        text: info.selectiontext
    })
    .then(function (response) {
      alert(response)
    }).catch(function (error) {
      console.log(error))};  
}
