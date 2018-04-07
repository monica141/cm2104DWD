$(function(){

   // Document ready
   alert("Document ready");

   $('#searchform').submit( function(){
      // Get current value and add to items list
      var searchterms = $("#searchterms").val();
      // Call our search OMDB function
      getResultsFromODMB(searchterms);
      return false;
   });
});

// Call OMDB API using ajax
function getResultsFromODMB(searchterms){
   // Build URL for the request
   var url = "http://www.omdbapi.com/?apikey=7afe5a65&s=" + searchterms;
   //Use jQuery JSON shortcut
   $.getJSON(url, function(jsondata){
      // Handle the results
      printJSON(jsondata);
   })
}

function printJSON(jsondata){
   // Prints the JSON to the screen
   var normal = JSON.stringify(jsondata);
   $('#resultsbox').append("<p>" + normal + "</p>");
}
