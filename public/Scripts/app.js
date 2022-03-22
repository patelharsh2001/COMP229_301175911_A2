/*
This is app.js file
Name : Harsh Patel
Student ID: 301175911
Date : 4th March 2022 
*/

//IIFE - Immediately Invoked function Expression

const { event } = require("jquery");

(function(){
    function start(){
        console.log("Our Express App Started....");
        let deleteButtons = document.querySelectorAll('.btn-danger');
        for(button of deletebuttons){
            button.addEventListener('click', (event) => {
                if(!confirm("Do you want to continue?"))
                {
                    event.preventDefault();
                    window.location.assign('/tournament-list');
                }
            });
        }
    }

    window.addEventListener("load",start);

})();