import React from "react";

function TicketRuler() {

    return (
        <div className="grid justify-items-center items-center">
            <br/>
            <h1 className="text-5xl text-white centered pt-5 pb-5 bg-[#1F7A8C] w-screen">Ticket Ruler</h1>
            <br/>
            <p className="tracking-wide w-2/3 mb-3 text-xl text-black-500 md:text-xl dark:text-black-400">
                Ticket Ruler is the my third group project at Flatiron. Our objective was to make a basic front-end that would interact with our Ruby back-end. We created a website inspired by <a target="_blank" href="https://www.ticketmaster.com/" >ticketmaster</a>. The goal was to implement full CRUD and get the front-end and back-end communicating using Rake.
            </p>
            <p className="tracking-wide w-2/3 mb-3 text-xl text-black-500 md:text-xl dark:text-black-400">
                Initial render will load the homepage. The homepage has a search bar to filter the show cards by show name, artist, or show time. Show cards have a Purchase Tickets button that will render a form prompting users to input party size. This will then create a ticket associated to the hard-coded initial user. The Account route initialy renders a create account form that will create a new user instance. The login button will render a different form prompting the user to input and email and password to login. This login is flawed but will change the hard-coded user to the inputed one if the email is found in the database. The My Tickets route will render ticket cards associated with the current user instance. Ticket cards have a edit party size button that renders a form to change party size on the ticket. Ticket cards also have a cancel button to delete the ticket instance. 
            </p>
            <p className="tracking-wide w-2/3 mb-3 text-xl text-black-500 md:text-xl dark:text-black-400">
                The Ruby database has show, ticket, and user models. The user and show models have a many-to-many relationship joined by the ticket model.
            </p>
            <br/>
            <a target="_blank" className="text-purple-700 text-xl no-underline hover:underline ..." href="https://github.com/wayland-i/ticketruler-project" >GitHub Repo</a>
            <br/>
            <iframe
                width="800"
                height="400"
                src="https://www.youtube.com/embed/yqgnQ6X36dQ">
            </iframe>
            <br/>
            <a target="_blank" className="text-purple-700 text-xl no-underline hover:underline ..." href="https://www.youtube.com/watch?v=yqgnQ6X36dQ" >Video Demo</a>
            <br/>
            <br/>
        </div>
    )
}

export default TicketRuler