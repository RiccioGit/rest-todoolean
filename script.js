/* API:
READ: GET - http://157.230.17.132:porta/todos
INSERT: POST - http://157.230.17.132:porta/todos - DATA: text
DELETE: DELETE - http://157.230.17.132:porta/todos/ID */

// Roberto Riccioli: 3026

$(document).ready(init);

function getList() {

  $.ajax({
    url: "http://157.230.17.132:3026/todos",
    method:"GET",
    success: function(data){
      printList(data);
    },
    error: function(err){
      console.log("err", err);
    }
  });
}

function printList(data) {

  var target = $("#list");

  for (var i = 0; i < data.length; i++) {
    var listItem = data[i]["text"];
    var itemID = data[i]["id"];
    target.append(`<li data-id="${itemID}"><span>${listItem}</span><i class="fas fa-trash-alt"></i></li>`);
  }

}

function addInputListener() {

  var target = $("#add-btn");

  target.click(addItem);

}

function addItem() {

  var text = $("#add-input").val();

  $("#add-input").val("");

  $.ajax({
    url: "http://157.230.17.132:3026/todos",
    method: "POST",
    data: {
      text: text
    },
    success: function(data){
      getList();
    },
    error: function(err){
      console.log("err", err);
    }
  });
}

// Function List
function init(){
  getList();
  addInputListener();
}
