// listen for the user changing any settings and call getResults()
$(function(){
    $('input').change(function() {
        getResults()
    });
    $('select').change(function() {
        getResults()
    });
});


function getResults(){
    
    // send the current settings to the endpoint
    var parameters = {mood: $('select[name="mood"]').val()}
    $.get( '/pb',parameters, function(data) {
        
        // the return data (hanlebars html) is added to the blogpost DIV.
        $('#blogpost').html(data)
    // console.log(data)
    });
}





// make the call to the endpoint on pageload.
function init(){
    getResults()
}

init()

var coll = document.getElementsByClassName("collapsible");
var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }