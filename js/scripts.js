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