let words = ["abiotic", "active solar energy", "acculturation"];
let definition = [
    "Composed of nonliving or inorganic matter.", 
    "Solar radiation captured with photovoltaic cells that convert light energy to electrical energy.", 
    "The process of changes in culture that result from the meeting of two groups, each of which retains distinct culture features."
];

var output = "";

function main(){
    let term = $("#word_search").val();
    let index1 = words.indexOf(term.toLowerCase());
    output += "<p>" + term + ": " + definition[index1] + "</p>";
    console.log(output);
    $("#Output").html(output);
};
