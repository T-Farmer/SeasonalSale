console.log("Files are linked");

var myRequest = new XMLHttpRequest()

function loadProducts(e) {
  var data = JSON.parse(e.target.responseText)
  console.log("products", data.products)
}
