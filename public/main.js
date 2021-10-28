var orderButtons = document.getElementsByClassName("order");
var submitOrderButton = document.getElementById('submit')
var nameInput = document.getElementById("nameInput")
submitOrderButton.addEventListener('click', submitOrder)


/*
0 Latte
1 Cappucino
2 House Blend
*/

function submitOrder(event){
    let order = document.querySelectorAll('.orderItem')
    let orderArr = []

    for(let i = 0; i < order.length; i++){
        orderArr[i] = order[i].innerHTML
    }
      console.log("sending name to the server", nameInput.value)
    fetch('/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
       "order": orderArr,
       "name": nameInput.value
      })
    }).then(function (response) {
      window.location.reload()
    })
}

Array.from(orderButtons).forEach(function(orderButton) {
  orderButton.addEventListener('click', function(){
    
    let li = document.createElement('li')
    li.innerHTML = orderButton.value
    li.classList.add("orderItem")
    document.getElementById("orderTicket").appendChild(li)

    });
})

