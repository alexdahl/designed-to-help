$(document).ready(function(){

  $('header .share.button').click( function(e){
    e.preventDefault();
    if( $(e.target).hasClass('active') ){
      $(e.target).removeClass('active');
      $('header .share-panel').css('-webkit-transform', 'perspective(350px) rotateX(-90deg)');
    } else {
      $(e.target).addClass('active');
      $('header .share-panel').css('-webkit-transform', 'perspective(350px) rotateX(0deg)');
    }

  });

});