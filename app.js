welcome = alert("Hello user welcome to my humble webpage. Lets get to know each other!");
usersName = prompt("Please can you tell me your name?");

favouriteAnimal = prompt("Nice to meet you " + usersName + ", my name is Johnny. What's your favourite animal?");
if (favouriteAnimal === "cat"){
    alert ("That's awesome, my favourite animal is also a cat")
}
else { (alert ("So your favourite animal is a " + favouriteAnimal + "! Thank you for sharing that with me. My favourite animal is a cat."))
}
function quiz() {

    let score = 0
    let notYesOrNo = "Sorry pal, I don't know what that is, but it ain't yes or no. Try again, but better."
    
    alert("BOO!!! - Just kidding, lets get started with the quiz. Please make sure to only answer yes or no, alternatively use y or n instead")
    
    q1 = prompt("Question One: Is Rio de Janeiro the capital of Brazil ?") .toLowerCase()

        if (q1 === "y" || q1 === "yes"){
            alert ("Sorry, I'm afraid that's incorrect, the capital of Brasil is actually Brasilia. At least you were honest and didnt look up the answer.");
        }
            else if (q1 === "n" || q1 === "no"){
            alert ("That's correct, Rio de Janeiro is not the capital of Brasil. It's actually Brasilia, but I bet you already knew that didn't you, you smarty pants!");
            score++
            }
            else {
            alert(notYesOrNo);
            quiz()
            }

    q2 = prompt("Question Two: Is Canberra the Capital of Australia?") .toLowerCase()

        if (q2 === "y" || q2 === "yes"){
            alert ("That's correct, well done you. You get to laugh at all the people who thought it was Sydney")
            score++
        }
            else if (q2 === "n" || q2 === "no"){
                alert ("I'm afraid that's incorrect. A lot of people think the capital is Sydney but it is in fact Canberra")
            }
            else {
                alert(notYesOrNo);
                quiz()  
            }
    q3 = prompt(" Question Three: Is New York City the capital of America?") .toLowerCase()

        if (q3 === "y" || q3 === "yes"){
            alert ("Nope, not the right answer I'm afraid. The capital of America is actually Washington D.C")
        }
    console.log (score);
}

//if answer to question === correct ++ to variable totalScore, totalScore=0 at start, if user gets 5/5 
//give special prompt saying you won cookie and if totalScore === 5 link cookie image on page