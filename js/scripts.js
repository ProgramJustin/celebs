$(document).ready(function() {

  $("form#userForm").submit(function(event) {
    event.preventDefault();
    var faveColor = $("input:radio[name=color]:checked").val();

    var age = $("input:radio[name=age]:checked").val();

    if (faveColor === "red" && age === "40orOlder") {
      $("#cheeto").show();
    }


  });

});
