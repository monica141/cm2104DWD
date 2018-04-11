$(function(){

   $('td').mousedown( function(){
      $(this).css( 'backgroundColor','red');
   });

   $('td').mouseup( function(){
      $(this).css( 'backgroundColor','lightgrey');
   });

   $("tr:odd").addClass("odd");

});
