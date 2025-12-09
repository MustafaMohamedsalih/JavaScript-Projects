// --- Project4_Dictionaries Assignment ---
// Create a dictionary (JavaScript object) with key-value pairs
var myDictionary = {
    name: "Mustafa",
    language: "JavaScript",
    project: "Project4_Dictionaries",
    year: 2025
};

// Function to delete a key and then try to output its value
function showDeletedValue() {
    // Delete the "language" property from the dictionary
    delete myDictionary.language;

    // Attempt to access the deleted property
    var value = myDictionary.language;

    // Display the result in the paragraph with id="Dictionary"
    document.getElementById("Dictionary").innerHTML =
        "After deletion, the value of 'language' is: " + value;
}
