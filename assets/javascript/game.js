	var scotchlist = ["jwalker", "macallan", "ardbeg", "glenlivet", "glenfiddich"];
	var wins = 0;
  var guesses = 5;
	var loses = 0; 
  var score = 0;
  var charlist = scotchlist[0].split("");

  console.log(charlist);

  //when key is pressed by start function and store pressd letter
	document.onkeyup = function(event) {
        //store pressd key as userguess and convert to lower case
    
     


		    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();



          if(score === charlist.length){
            wins ++;
            guesses = 5;
            score=0;
            charlist = scotchlist[wins].split("");
          }

          for (i in charlist){
            if(userGuess === charlist[i]){
              score ++;
              }
            }
          var notfound = 0
            for(var i = 0; i < charlist.length; i ++){
              if(userGuess !== charlist[i]){
                notfound ++;
                if (notfound === charlist.length){
                    guesses --;
            }
          }
        }

          if(guesses === 0){
            loses ++;
            guesses = 5;
            score = 0;
            charlist = scotchlist[loses].split("");
          }
          $("#guesses").html(guesses);

        console.log(guesses);
        console.log(score);
        console.log(wins);
        console.log(loses);
        console.log(charlist);
        };


              

