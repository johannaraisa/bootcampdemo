$(function () {

  // Getting the data from json and adding it to knockoutjs template
  
  var westerosViewModel = function() {
    var self = this;

    

      
  }

  var westerosVM = new westerosViewModel();

  ko.applyBindings(westerosVM);

  // Showing the data when clicking markers

  var slideUp = function() {
    $( ".col-md-12" ).css("margin-top", "-300px");
  }

  var slideDown = function() {
    $( ".col-md-12" ).animate({
      marginTop: "40px",
    }, 400, function() {
        // Animation complete.
    });
  }

});