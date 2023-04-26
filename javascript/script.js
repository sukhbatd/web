fetch('../javascript/product.json', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer TOKEN',
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => console.log(product))
  .catch(error => console.error("Error to us"));