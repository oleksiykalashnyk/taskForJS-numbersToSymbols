"use strict";

// input: 5
// output: #@*#@

const
    arr = ["#", "@", "*"],

    askNumber = () => {
        let userNumber = +prompt("Number?", "");
        if (!userNumber || isNaN(userNumber) || userNumber <= 0) {
            askNumber();
        } else {
            return userNumber;
        }
    },

    start = () => {
        let
            n = askNumber(),
            button = document.querySelector('.resetButton'),
            newArr = [];

        for (let j = 1; j <= n; j++) {
            for (let i = 1; i <= j; i++) {
                if (i % arr.length == 1) {
                    newArr.push(arr[0]);
                } else if (i % arr.length == 2) {
                    newArr.push(arr[1]);
                } else {
                    newArr.push(arr[2]);
                }
            }

            let newString = document.createElement("p");
            newString.innerHTML = newArr.join(' ');
            button.before(newString);
            newArr = [];
        }


    },

    reset = () => {
        setTimeout(() => {
            location.reload();
        }, 500);
    };

start();