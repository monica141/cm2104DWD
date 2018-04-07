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
      addResultTitles(jsondata);
   });
}

function addResultTitles(jsondata){
   // Create a string to contain our HTML code to inject
   var htmlstring ="";
   // Iterate over the collection of results
   for( var i = 0 ; i < 10 ; i++ ){
      var title = jsondata.Search[i].Title;
      htmlstring += "<li>" + title + "</li>";
   }
   $('#results').html(htmlstring);
}
