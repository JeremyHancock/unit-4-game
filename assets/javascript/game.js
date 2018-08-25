// function that generates a random number between a min and max number, including those numbers.
$(document).ready(function () {
    function randomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    var wins = 0;
    var losses = 0;
    var currentScore = 0;
    var rubyValue = (randomValue(1, 12));
    var diamondValue = (randomValue(1, 12));
    var emeraldValue = (randomValue(1, 12));
    var saphireValue = (randomValue(1, 12));
    console.log("Ruby value is " + rubyValue);
    console.log("Diamond value is " + diamondValue);
    console.log("Emerald value is " + emeraldValue);
    console.log("Saphire value is " + saphireValue);
    $("#yourScore").html(currentScore);
    var goalScore = (randomValue(19, 120));
    $("#goalScore").html(goalScore)

    function resetGame() {
         rubyValue = (randomValue(1, 12));
         diamondValue = (randomValue(1, 12));
         emeraldValue = (randomValue(1, 12));
         saphireValue = (randomValue(1, 12));
        console.log("Ruby value is " + rubyValue);
        console.log("Diamond value is " + diamondValue);
        console.log("Emerald value is " + emeraldValue);
        console.log("Saphire value is " + saphireValue);
        $("#yourScore").html(currentScore);
         goalScore = (randomValue(19, 120));
        $("#goalScore").html(goalScore)
        console.log("The current score is " + currentScore);
        console.log("The goal score is " + goalScore);
    }
    function checkForWin() {
        if (currentScore === goalScore) {
            wins++;
            $("#numOfWins").html(wins);
            currentScore = 0;
            console.log("win")
            resetGame();
        }
        if (currentScore > goalScore) {
            losses++;
            console.log("loss")
            $("#numOfLosses").html(losses);
            currentScore = 0;
            resetGame();
        }
    }
    $("#ruby").click(function () {
        $("#yourScore").html(currentScore + rubyValue);
        currentScore = currentScore + rubyValue;
        checkForWin();
    });
    $("#diamond").click(function () {
        $("#yourScore").html(currentScore + diamondValue);
        currentScore = currentScore + diamondValue;
        checkForWin();
    });
    $("#emerald").click(function () {
        $("#yourScore").html(currentScore + emeraldValue);
        currentScore = currentScore + emeraldValue;
        checkForWin();
    });
    $("#saphire").click(function () {
        $("#yourScore").html(currentScore + saphireValue);
        currentScore = currentScore + saphireValue;
        checkForWin();
    });
});
// function to capture clicked crystal value and add it to currentScore
// check for win and add win
// check for loss and add loss
// on click function
