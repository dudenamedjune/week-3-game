var scotchlist = ["jwalker", "macallan", "ardbeg", "glenlivet", "glenfiddich"];
	var wins = 0;
  var guesses = 5;
	var loses = 0; 
  var score = 0;
  var charlist = scotchlist[0].split("");

  console.log(charlist);
  console.log(charlist.length);

  //when key is pressed by start function and store pressd letter
	document.onkeyup = function(event) {
        //store pressd key as userguess and convert to lower case
		    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();



        function showunderscore(){
          console.log(charlist);
          for(i in charlist){
           var x = $("<div>");
           x.addClass("blanks");
           x.append("#holders");

          
          }

        }

        function score(){
            for(var i = 0; i < charlist.length; i ++){
              if(userGuess === charlist[i]){
                score ++;
                console.log(score);
                }
              }
              return score;
            };

          function notfound(){
              var notfound = 0
              for(var i = 0; i < charlist.length; i ++){
                if(userGuess !== charlist[i]){
                  notfound ++;
                  if (notfound === charlist.length){
                    guesses --;
                    console.log(guesses);
                  }
                 }
                }
              };

            function winincandresetguess(){ 
              if (score === charlist.length){
                  wins ++;
                  guesses = 5;
                  score = 0;
                  charlist = scotchlist[wins].split("");
                  }


               };


          function lost(){
            if (guesses = 0){
              loses ++;

              guesses = 5;

              score = 0;

              charlist = scotchlist[wins].split("");
              console.log(loses, charlist);


            }

        

          };


  };
          