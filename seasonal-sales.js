var items = []
var departments = []
var presetItems;
var presetDepts;

// request for items

var itemRequest = new XMLHttpRequest();
itemRequest.addEventListener("load", getItems)
itemRequest.open("GET", "products.JSON")
itemRequest.send();

//function to call items during event

function getItems(e) {
  presetItems = JSON.parse(e.target.responseText);
  console.log(presetItems);
}


// request for departments

var deptRequest = new XMLHttpRequest();
deptRequest.addEventListener("load", getDepts)
deptRequest.open("GET", "categories.JSON")
deptRequest.send();

// function to call depts during event

function getDepts(e) {
  presetDepts = JSON.parse(e.target.responseText);
  console.log(presetDepts);
}
