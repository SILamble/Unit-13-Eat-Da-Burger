$(function() {
    $(".devour").on("click", function(event) {
      const id = $(this).data("id");
      const devoured = $(this).data("devoured");
  
      const nowDevoured = {
        devoured: devoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/:" + id, {
        type: "PUT",
        data: nowDevoured
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val()
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
  