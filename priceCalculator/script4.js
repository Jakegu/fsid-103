function calculateSubtotal(price, quantity) {
    var subtotal = price * quantity;
    return subtotal;
  }
  function calculateTax(subTotal){
    var tax = subTotal*.0725;
    return tax;
  }


  
  var productName = prompt("Enter the product's name:");
  var price = Number(prompt("Enter the price: $"));
  var quantity = Number(prompt("Enter the quantity:"));
  

  var subTotal = calculateSubtotal(price, quantity);
  var tax = calculateTax(subTotal);
  var finalPrice = subTotal + tax;
  

  console.log(productName, subTotal, finalPrice);