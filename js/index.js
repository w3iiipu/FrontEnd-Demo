var noFood = [];

var noPrice = [];

function display() {
  for (var i=0; i < noFood.length; i++) {
    console.log(noFood[i] + "<br>" + noPrice[i] + "<br>");
    }
}


function total(){
  var totalPrice = 0;
  for (var i=0; i < noPrice.length; i++){
    totalPrice += noPrice[i];
  }
  console.log(totalPrice);
}