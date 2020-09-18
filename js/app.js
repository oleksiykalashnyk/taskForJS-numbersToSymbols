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
        let n = askNumber();
        let newArr = [];

        for (let i = 1; i <= n; i++) {
            if (i % arr.length == 1) {
                newArr.push(arr[0]);
            } else if (i % arr.length == 2) {
                newArr.push(arr[1]);
            } else {
                newArr.push(arr[2]);
            }
        }

        document.querySelector("#numbers").innerHTML = newArr.join(" ");
        document.querySelector("#howMany").innerHTML = newArr.length;

    },

    reset = () => {
        setTimeout(() => {
            location.reload();
        }, 500);
    };

start();