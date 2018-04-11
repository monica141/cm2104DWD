// Load the program when the document is loaded
$(document).ready(function(){

   // When clicking the div with retrieve-sources id
   $('#retrieve-resources').click(function(){
      // Show on the display-sources div that the data is being loaded
      var displayResources = $('#display-resources');
      displayResources.text('Loading data from JSON source…');

      // AJAX request
      $.ajax({
         type: "GET",
         url: "resources.json",

         success: function(result) {
            console.log(result);
            // Preparing the beginning of the table
            var output = "<table><thead><tr><th>Name</th><th>Provider</th><th>URL</th></thead><tbody>";
            // Loop through the JSON object
            for (var i in result) {
               output+="<tr><td>" + result[i].name + "</td><td>" + result[i].provider + "</td><td>" + result[i].url + "</td></tr>";
            }
            // Add the end of the table
            output+="</tbody></table>";
            // Output the result onto the html
            displayResources.html(output);
            $("table").addClass("table");
         }

      });// End of ajax request

   });// End of clicking function

});// End of jquery function
