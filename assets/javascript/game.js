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
        currentScore = 0;
        $("#yourScore").html(currentScore);
        // creates the goal score using the randomValue function to assign a value between 19 and 120
        goalScore = (randomValue(19, 120));
        $("#goalScore").html(goalScore)
    }
    function checkForWin() {
        if (currentScore === goalScore) {
            wins++;
            $("#numOfWins").html(wins);
            $("#instructions").text("Your score totals " + currentScore + " and matches the goal! Congratulations, you've won! All of the crystals have been assigned new values and there is a new goal. Click a crystal to begin playing again.")
            resetGame();
        }
        if (currentScore > goalScore) {
            losses++;
            $("#numOfLosses").html(losses);
            $("#instructions").text("Your score totals " + currentScore + " and exceeds the goal of " + goalScore + ". You have lost the game! All of the crystals have been assigned new values and there is a new goal. Click a crystal to begin playing again.")
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