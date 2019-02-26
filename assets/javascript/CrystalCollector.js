// GLobal Variable Section
// -----------------------------------------


// Crystal Variables
var crystal = {
    green: {
        name: "Green",
        value: 0
    },
    blue:
    {
        name: "Blue",
        value: 0
    },
    red: {
        name: "Red",
        value: 0
    },

    yellow: {
        name: "Yellow",
        value: 0
    }
}

// Scores ( Current and Target)
var currentScore = 0;
var targetScore = 0;

// Wins and losses 
var winCount = 0;
var lossCount = 0;

// Functions
// -----------------------------------------

//  Helper function for getting random numbers
var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

//  Starts the game and restarts the game
var startGame = function () {

    // Reset the current score

    currentScore = 0;

    // Set  a new Target score ( between 19 and 120)
    targetScore = getRandom(19, 120);

    // Set different values for each of the crystals (Between 1 and 12)
    crystal.green.value = getRandom(1, 12);
    crystal.blue.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);
    // Change the HTML to reflect all of these changes
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);

    // Testing Console
    console.log("----------------------------------");
    console.log("Target Score = " + targetScore);
    console.log("Blue: " + crystal.blue.value + " | Red: " + crystal.red.value + " | Green :" + crystal.green.value + " | Yellow: " + crystal.yellow.value);
    console.log("----------------------------------");


}

// Respond to clicks on the crystals
var addValues = function (crystal) {

    currentScore = currentScore + crystal.value;

    // Change the html to reflect changes in currentScore
    $("#yourScore").html(currentScore);

    // Call the checkWin function
    checkWin();
    // Testing Console.
    console.log("Your Score: " + currentScore);
}

// Check if user Won or Lost and Reset the Game

var checkWin = function () {

    // Check if currentScore is larget than targetScore
    if (currentScore > targetScore) {
        alert("Sorry, you Lost!");
        console.log("Sorry, you Lost!");
        // Add to lost Counter
        lossCount++;
        // Change loss count HTML
        $("#lossCount").html(lossCount);
        // Restart the Game
        startGame();
    }
    else if (currentScore === targetScore) {
        alert("Congratulations, You Win!");
        console.log("You Win");
        // Add to the win count
        winCount++;
        // Change loss count HTML
        $("#winCount").html(winCount);

        // Restart the game 
        startGame();
    }
}

// Main Process
// -----------------------------------------

// Starts the Game the first time  
startGame();

$("#green").click(function () {
    addValues(crystal.green)
    console.log("test");

})

$("#blue").click(function () {
    addValues(crystal.blue)
    console.log("test");

})

$("#red").click(function () {
    addValues(crystal.red)
    console.log("test");

})
$("#yellow").click(function () {
    addValues(crystal.yellow)
    console.log("test");

})