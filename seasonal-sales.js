

var items = []
var departments = []


// request for products

var itemRequest = new XMLHttpRequest()
itemRequest.addEventListener("load", itemRequest)
itemRequest.open("GET", "products.JSON")
itemRequest.send()


// request for departments

var deptRequest = new XMLHttpRequest()
deptRequest.addEventListener("load", deptRequest)
deptRequest.open("GET", "categories.JSON")
deptRequest.send()

//function to call items during event

function getItems(e) {
  var presetItems = JSON.parse(e.target.responsetext)
  items(presetItems)
}


// function to call depts during event

function getDepts(e) {
  var presetDepts = JSON.parse(e.target.responsetext)
  departments(presetDepts)
}
