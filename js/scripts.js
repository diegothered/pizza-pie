// business logic
function Pizza (size, toppings) {
  this.size = size
  this.toppings = toppings
  this.price = 0
}

Pizza.prototype.getPrice = function() {
  this.toppings.forEach(function(toppings) {
    this.price += 1;
    if (this.size === small) {
        this.price +=10
      } else if (this.size === medium) {
        this.price +=12;
      } else {
        this.price +=15
      }
    });
    return this.price
}





// user logic
$(document).ready(function() {
    // event.preventDefault();

});
