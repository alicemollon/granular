$(document).ready(function() {
  $('.scroll-to').click(function() {

    var href = $(this).attr("href");

    // based on the link, find the section
    // e.g. if we click on <a href="#company">
    // section is $("#company")
    var section = $(href).offset().top;
    
    // lets animate the page to a particular point
    $("body, html").animate({ scrollTop: section }, 1000);

    return false;
  });
});