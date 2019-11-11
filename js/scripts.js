// business logic
function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.getPrice = function() {
  this.toppings.forEach(function(topping) {
    this.price += 1;
    if (this.size === "small") {
      this.price += 10;
    } else if (this.size === "medium") {
      this.price += 12;
    } else {
      this.price += 15;
    }
  })
  return this.price;
}


// user logic
$(document).ready(function() {

  $("form#input").submit(function(event) {
    event.preventDefault();

    var toppingInputs = $(".toppings:checked");
    var toppingsArray = [];
    var sizeInput = $("#size").val();
    toppingInputs.each(function(toppings) {
      toppingsArray.push(toppingInputs.val());
    });

    var myPizza = new Pizza(sizeInput,toppingsArray);

    var price = myPizza.getPrice();

    $("#show-price").text("The price of your pizza is $" + price + ".");
  });
});
