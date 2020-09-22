document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems);

  var elems = document.querySelectorAll(".parallax");
  var instances = M.Parallax.init(elems);

  var elems = document.querySelectorAll(".slider");
  var instances = M.Slider.init(elems);

  var elems = document.querySelectorAll(".materialboxed");
  var instances = M.Materialbox.init(elems);

  var elems = document.querySelectorAll(".scrollspy");
  var instances = M.ScrollSpy.init(elems, {
    scrollOffset: 20,
  });

  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
  
  var elems = document.querySelectorAll(".fixed-action-btn");
  var instances = M.FloatingActionButton.init(elems, {
    toolbarEnabled: true,
  });

    var elems = document.querySelectorAll(".datepicker");
    var instances = M.Datepicker.init(elems);
});
$(document).ready(function () {
  $("input#id_clave, textarea#id_mensaje").characterCounter();
});
