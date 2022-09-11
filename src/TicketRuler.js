import React from "react";

function ticketRuler() {
    return (
        <div>
            <p>
                Ticket Ruler is the my third group project at Flatiron. Our objective was to make a basic front-end that would interact with our Ruby back-end. We created a website inspired by <a target="_blank" href="https://www.ticketmaster.com/" >ticketmaster</a>. The goal was to implement full CRUD and get the front-end and back-end communicating using Rake.
            </p>
            <p>
                Initial render will load the homepage. The homepage has a search bar to filter the show cards by show name, artist, or show time. Show cards have a Purchase Tickets button that will render a form prompting users to input party size. This will then create a ticket associated to the hard-coded initial user. The Account route initialy renders a create account form that will create a new user instance. The login button will render a different form prompting the user to input and email and password to login. This login is flawed but will change the hard-coded user to the inputed one if the email is found in the database. The My Tickets route will render ticket cards associated with the current user instance. Ticket cards have a edit party size button that renders a form to change party size on the ticket. Ticket cards also have a cancel button to delete the ticket instance. 
            </p>
            <p>
                The Ruby database has show, ticket, and user models. The user and show models have a many-to-many relationship joined by the ticket model.
            </p>
            <a target="_blank" href="https://github.com/wayland-i/ticketruler-project" >GitHub Repo</a>
        </div>
    )
}

export default ticketRuler