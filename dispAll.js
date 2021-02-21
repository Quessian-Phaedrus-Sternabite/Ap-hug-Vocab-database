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

function main() {
    // The array of all finished data for the glossory
    let finished_array = [];

    for (let i in words) {
        finished_array.push(words[i] + " - " + definition[i]);
    };
    // Sort the main data storage array
    finished_array.sort();
    // Display buffer
    let buffer = "";
    for (let i in finished_array) {
        buffer += "<p>" + finished_array[i] + "</p>";
    };

    $("#Display").html(buffer);
};
