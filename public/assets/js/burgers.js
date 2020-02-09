// JQuery event handlers for creating and updating burgers

$(function() {
    $(".devour").on("click", function(event) {
      const id = $(this).data("id");

      console.log("this is the devoured id: " + id)
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: id
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val(),
        devoured: true,
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Did a burger get created?")
          location.reload();
        }
      );
    });
  
  });
  