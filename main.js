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

// Variables needed for the global operation
let output_buffer = "";
let stacking = false;

// Toggle stacking function
function toggle_stacking(){
    if (stacking == false){
        stacking = true;
    }
    else{
        stacking = false;
    };
};

// Main function, executed on button press
function main(){
    // Get word in the input box
    let term = $("#word_search").val();
    // Take spaces out of term
    let term_search = "";
    for (i in term){
        if (term[i] != " "){
            term_search += term[i];
        };
    };
    // Get the words index
    let index1 = words.indexOf(term_search.toLowerCase());
    // Adds the definition and the term to the ouput
    // Check stacking
    if (stacking == false){
        output = "<p>" + term + " - " + definition[index1] + "</p>";
        output_buffer = term + " - " + definition[index1];
    }
    else{
        output += "<p>" + term + " - " + definition[index1] + "</p>";
        output_buffer += term + " - " + definition[index1];
    };
    term_search = "";
    // Ouputs the output
    $("#Output").html(output);
};

function copy_text() {
    let dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = output_buffer;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}