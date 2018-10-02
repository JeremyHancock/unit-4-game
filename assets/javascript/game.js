// function that generates a random number between a min and max number, including those numbers.
$(document).ready(function () {
    function randomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    // Creates a number of needed variables
    var wins = 0;
    var losses = 0;
    var currentScore = 0;
    var rubyValue;
    var diamondValue;
    var emeraldValue;
    var saphireValue;
    var goalScore;

    // a function to run each time the game needs to be reset
    function resetGame() {
        // each crystal is assigned a randomValue from 1 to 12 using the randomValue function
        rubyValue = (randomValue(1, 12));
        diamondValue = (randomValue(1, 12));
        emeraldValue = (randomValue(1, 12));
        saphireValue = (randomValue(1, 12));
        $("#yourScore").html(currentScore);
        // creates the goal score using the randomValue function to assign a value between 19 and 120
        goalScore = (randomValue(19, 120));
        $("#goalScore").html(goalScore)
    }
    function checkForWin() {
        if (currentScore === goalScore) {
            wins++;
            $("#numOfWins").html(wins);
            currentScore = 0;
            resetGame();
        }
        if (currentScore > goalScore) {
            losses++;
            $("#numOfLosses").html(losses);
            currentScore = 0;
            resetGame();
        }
    }

    resetGame();

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