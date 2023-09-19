function getComputerChoice(){
    var Choices =  ["Rock","Paper","Scissors"];
    var randomReturn =    [Math.floor(Math.random()*Choices.length)]
    var Choices = Choices[randomReturn];
    console.log(Choices);
    
}

getComputerChoice();