$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox({
    alwaysShowClose: true,
  });
});

$('.dropdown-chevron-mobile').on('click', function(e) {

  e.preventDefault();

  // Toggles the arrow class on itself.
  $(this).toggleClass('open');

  // Get the parent list item and its id.
  var parent = $(e.target).parent('li');
  parent.children('ul').toggleClass('open');

});

// Add smooth scrolling on all links inside the navbar
$(".nav-smooth").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });

  } // End if

});


// modal options

$('#specsModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('selected') // Extract info from data-* attributes
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this);
  modal.find('th.' + recipient).addClass('bg-success');
  modal.find('td.' + recipient).addClass('bg-light');
})
$('#specsModal').on('hide.bs.modal', function (event) {
  var modal = $(this);
  modal.find('th').removeClass('bg-success');
  modal.find('td').removeClass('bg-light');
})