$(document).ready(function(){
  var $btnSetUsername = $('#set-username-btn'),
      $username       = $('#username'),
      $password       = $('#password');
  
  var app = {
    initialize: function(){
      app.bindables();
    },
    bindables: function(){
      
      $btnSetUsername.on("click", function(){
        $.ajax({
          type: "POST",
          url: "/user/",
          data: { username: $username.val(), password: $password.val() }
        }).done(function( result ) {
          if ( result == "success" ) {
            location.reload();
          }
        });
      });
      
    }
  };
  
  app.initialize();
});