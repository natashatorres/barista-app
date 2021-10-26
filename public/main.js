var complete = document.getElementsByClassName("completed");


Array.from(complete).forEach(function(element) {
      element.addEventListener('click', function(){
        const id = this.parentNode.parentNode.childNodes[9].innerText
        const barista = document.querySelector('#barista').innerText
        const customerName = this.parentNode.parentNode.childNodes[3].innerText

        window.speechSynthesis.speak(new SpeechSynthesisUtterance('Order for ' + customerName));

        console.log(id)
        
        fetch('messages/like', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'id': id,
            'barista': barista
  
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

//https://usefulangle.com/post/98/javascript-text-to-speech how to add text to speech in your app
