$(document).ready(function() {
    const pages = $("#notebook .page");
    let current = 0;
  
    pages.click(function() {
      if(current < pages.length) {
        $(pages[current]).addClass("flipped");
        current++;
      }
    });
  
    $("#reset").click(function() {
      pages.removeClass("flipped");
      current = 0;
    });
  });