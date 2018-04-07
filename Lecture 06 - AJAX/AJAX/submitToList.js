$(function(){
   alert("Document ready");

   $('#searchform').submit( function(){
      addItemToList(searchterms);
      return false;
   });
});

function addItemToList( item ){
   $('#results').append("<li>" + item + "</li>");
}
