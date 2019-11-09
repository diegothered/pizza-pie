// business logic
function Pizza (size, toppings) {
  this.size = size
  this.toppings = toppings
  this.price = 0
}

Pizza.prototype.getPrice = function() {
  this.toppings.forEach(function(topping) {
    this.price += 1;
    if (this.size === "small") {
      this.price += 10;
    } else if (this.size === "medium") {
      this.price += 12;
      consol.log(this.price);
    } else {
      this.price += 15;
    }
  });
  return this.price
}

// user logic
$(document).ready(function() {

  $("form#input").submit(function(event) {
    event.preventDefault();


    var toppingInputs = $(".toppings:checked");
    (console.log(toppingInputs))
    var toppingsArray = [];
    var sizeInput = $("#size").val();
    console.log(sizeInput);
    toppingInputs.each(function(toppings) {
      toppingsArray.push(toppingInputs.val());
      console.log(toppingsArray)
    });
    var myPizza = new Pizza(sizeInput,toppingsArray);

    var price = myPizza.getPrice();
    console.log(price)
  });
});
