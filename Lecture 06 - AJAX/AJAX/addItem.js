$(function(){
   alert("Document ready");

   $('#searchform').submit( function(){
      addItemToList("Example Item");
      return false;
   });
});

function addItemToList( item ){
   $('#results').append("<li>" + item + "</li>");
}
