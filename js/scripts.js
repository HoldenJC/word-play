$(function(){
  var sentence = prompt("Enter in a sentence:");

  var userArray = sentence.split(" ");

  var progArray = userArray.filter(word => word.length > 2);

  progArray.reverse();
  // progArray = progArray.reverse();

  var finalSentence = "";

  finalSentence = progArray.join('');


  // finalSentence = progArray.toString();
  // for (var i = 0; i < progArray.length; i++){
  //   finalSentence += progArray[i];
  // }

  alert(finalSentence);

});
