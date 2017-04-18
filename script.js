$(function() {
  var menuVisible = false;
  $('.to_nav').click(function() {
    if (menuVisible) {
      $('#primary_nav ul').css({'display':'none'});
      menuVisible = false;
      $('.to_nav').css({'color':'#1c1c1c', 'background':'#ccc'})
      return;
    }
    $('#primary_nav ul').css({'display':'block'});
    $('.to_nav').css({'color':'#fff', 'background':'#00b2ee'})
    //$('#primary_nav').show();

    menuVisible = true;
  });
  $('#primary_nav ul').click(function() {
    $(this).css({'display':'none'});
    $('.to_nav').css({'color':'#fff', 'background':'#00b2ee'})
    //$('#primary_nav').show();
    menuVisible = false;
  });
});

// resize() event jquery -> da nastavis property display: block nazaj ko gres na vecjo velikost