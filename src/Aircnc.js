import React from "react";

function Aircnc() {

    return(
        <div className="grid justify-items-center items-center">
            <br/>
            <h1>Aircnc</h1>
            <br/>
            <p className="tracking-wide w-2/3 mb-3 text-xl text-black-500 md:text-xl dark:text-black-400">
                Aircnc is the fourth group project I worked on at Flatiron. This project was a collaboration between me and one fellow student. This was unusual as groups of three were assigned for previous projects. Our primary goal was to make a full-stack project using our newly learned Ruby on Rails skills with full CRUD and user authentication. User auth was especially difficult to implement during this project as we were given less than a week to learn it.
            </p>
            <p className="tracking-wide w-2/3 mb-3 text-xl text-black-500 md:text-xl dark:text-black-400">
                The idea behind Aircnc was to make a clone website of airbnb. Given the time constraints and difficulty of learning user auth while implementing it, many features and functionality were not get developed. Upon launching the app you are presented with a splash pages prompting the user to sign up or log in. Both work as intended and when successfull render the listings page. The listings page renders several cards, one for each listing instance in the database. A listing card has a reviews button to dynamically render the reviews associated with that listing. While toggled to be visible, reviews can be read, edited, and deleted. A form is also rendered prompting the user to input a rating and the text content of their review. When the user is finished they may logout using the button in the nav bar.
            </p>
            <br/>
            <a target="_blank" className="text-purple-700 text-xl no-underline hover:underline ..."  href="https://github.com/Millsy24/phase-4-project" >GitHub Repo</a>
            <br/>
            <iframe
                width="800"
                height="400"
                src="https://www.youtube.com/embed/y56mV6r59d8">
            </iframe>
            <br/>
            <a target="_blank" className="text-purple-700 text-xl no-underline hover:underline ..." href="https://www.youtube.com/watch?v=y56mV6r59d8" >Video Demo</a>
            <br/>
            <br/>
        </div>
    )
}

export default Aircnc