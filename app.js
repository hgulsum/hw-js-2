function addTax(prices) {
    let VAT_RATE = 0.20;
    
    return prices.map(price => price * (1 + VAT_RATE));
  }
  
  let pricesWithoutTax = [100, 200, 300, 400, 500];
  
  let pricesWithTax = addTax(pricesWithoutTax);
  
  console.log(pricesWithTax);