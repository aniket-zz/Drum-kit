// -----------Sound on Button Press through mouse -----------------

var NumberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0; i< NumberOfDrumButtons ; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", function () 
    { 
       var buttonSymbol = this.innerHTML;
       MakeSound(buttonSymbol);
       butonAnimation(buttonSymbol);

    });
}

// -----------------Sound on Keyboard keys press-----------------

document.addEventListener("keydown", function(event) 
{
    MakeSound(event.key);
    butonAnimation(event.key);
});


function MakeSound (key){
    
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();   
        break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();  
        break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();  
        break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();  
        break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();  
        break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();  
        break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();  
        break;

        default: console.log(buttonSymbol);
    }

}

// -------------Button Animation----------------------

function butonAnimation (PressedKey){
    document.querySelector("." + PressedKey).classList.add("pressed");

    setTimeout(function() {
        document.querySelector("." + PressedKey).classList.remove("pressed");
    }, 110);
}





