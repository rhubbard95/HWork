let pizzaToppings = ["pepperoni", "sausage", "bacon", "banana peppers"];

function greetCustomer() {
  let message = `Welcome to Pizza House, our toppings are`
  for (let topping of pizzaToppings) {
    message += ` ${topping}`;
  }
  console.log(message);
}
greetCustomer();



function getPizzaOrder(size, crust, ...pizzaToppings) {

  let message = `One ${size} ${crust} crust pizza with`
  for (let topping of pizzaToppings) {
    message += ` ${topping}`;
  }

  message += " ...coming up"
  console.log(message);

  return [size, crust, pizzaToppings];
}

getPizzaOrder("large", "stuffed", "pepperoni", "sausage");

function preparePizza([size, crust, pizzaToppings]) {
  console.log("...Cooking pizza...")

  return {
    size: size,
    crust: crust,
    pizzaToppings: pizzaToppings,
  }
}
preparePizza(getPizzaOrder("large", "stuffed", "pepperoni", "sausage"));

function servePizza(pizza) {
  console.log(`Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with ${pizza.pizzaToppings}, Enjoy!`)
}

servePizza(preparePizza(getPizzaOrder("large", "stuffed", "pepperoni", "sausage")))
