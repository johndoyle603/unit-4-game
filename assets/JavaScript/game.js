$(document).ready(function() {
    let char = {
        dog: {
            image: "hotdog",
            value: 0
        },
        nch: {
            image: "nachos",
            value: 0
        },
        pnt: {
            image: "peanuts",
            value: 0
        },
        crj: {
            image: "CrackerJack",
            value: 0
        },
    };

    let targetNum = 0;
    let counter = 0;

    let wins = 0;
    let losses = 0;

    function start() {
        counter = 0;

        targetNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        console.log("This is " + targetNum);

        $("#targetnum").html(targetNum);

        char.dog.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        char.nch.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        char.pnt.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        char.crj.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;


        $("#yournum").html(counter);

    };


    function adding(char) {
        counter = counter + char.value;
        $("#yournum").html(counter);
        check();
        console.log("Your Score is  " + counter);
    }

    function check() {
        if (counter > targetNum) {
            alert("Sorry, you lost. Please return all items to the concession stand");

            console.log("YOU LOST");
            losses++;
            $("#loss").html(losses);
            start();

        } else if (counter == targetNum) {
            alert("Congratulations, you won! Be sure to share with your friends");
            console.log("YOU WIN!");
            wins++;
            $("#wins").html(wins);
            start();
        }
    }

    start()

    $("#hotdog").on("click", function() {
        adding(char.dog);
    });

    $("#nachos").on("click", function() {
        adding(char.nch);
    });
    $("#peanuts").on("click", function() {
        adding(char.pnt);
    });
    $("#CrackerJack").on("click", function() {
        adding(char.crj);
    });


});