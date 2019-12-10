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
    });
}

// make the call to the endpoint on pageload.
function init(){
    getResults()
}

init()