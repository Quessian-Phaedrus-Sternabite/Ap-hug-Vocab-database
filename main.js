// Load words.txt to an Array
let words = new Array();
    $.get("words.txt", function(data){
            words = data.split("\n");
        });

// Load deffinition.txt into an array
let definition = new Array();
    $.get("deffinitions.txt", function(data){
            definition = data.split("\n");
    });


// Main function, executed on button press
function main(){
    // Get word in the input box
    let term = $("#word_search").val();
    // Get the words index
    let index1 = words.indexOf(term.toLowerCase());
    // Adds the definition and the term to the ouput
    output = "<p>" + term + " - " + definition[index1] + "</p>";
    // Ouputs the output
    $("#Output").html(output);
};

