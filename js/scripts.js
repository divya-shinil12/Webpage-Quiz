document.addEventListener('DOMContentLoaded', () => {
    // Function to process each element recursively
    function processElement(element) {
        // Get the parent node of the current element
        const parent = element.parentNode;
        
        // Create a new element with the same tag name but in lowercase
        const newElement = document.createElement(element.tagName.toLowerCase());

        // Copy attributes to the new element
        for (let attr of element.attributes) {
            newElement.setAttribute(attr.name, attr.value);
        }

        // Move all child nodes to the new element
        while (element.firstChild) {
            newElement.appendChild(element.firstChild);
        }

        // Replace the old element with the new one
        parent.replaceChild(newElement, element);

        // Process the new element's children
        for (let child of newElement.children) {
            processElement(child);
        }
    }

    // Start processing from the body element
    processElement(document.body);
});

// Below defines the answers. Only correct buttons have correct answers.
Answer = new Array("",
                  "","","","","5",   //Answers for 1 thru 5 buttons
                  "","","","4","",   //Answers for 6 thru 10 buttons
                  "","","","","5");  //Answers for 11 thru 15 buttons

// Below defines the computescore function.
function computescore ()  // Name the function to be defined
{                         // Start the function definition
  var nCorrect=0;         // Set the variables to their starting values
  var nItems = 3;
  var nButtons = 15;
  var score = 0;

  for (i=1; i<=nButtons; i++)  // For the 1st to the 15th radio button repeat
  {                              // the following series of commands
    if ( (document.PE1.elements[i].value == Answer[i]) && // If button correct
         (document.PE1.elements[i].checked == true) )     // & checked
      nCorrect+=1;                                        // Add 1 to nCorrect
  }
  score = (Math.floor((nCorrect/nItems)*10000+0.5))/100;  //Compute % & Round
  return score;                                           //Return score when
                                                          //function executes
}                        // End the function definition