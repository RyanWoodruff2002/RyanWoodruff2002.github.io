import React from "react";

function GameBuddy() {

    return(
        <div className="grid justify-items-center items-center">
            <br/>
            <h1>Game Buddy</h1>
            <br/>
            <p className="tracking-wide w-2/3 mb-3 text-xl text-black-500 md:text-xl dark:text-black-400">
                GameBuddy is the fifth and final project I completed at Flatiron. This was a solo project with minimal instructor interaction. For this project we were expected to incorporate everything we had learned in the program as well as one new technology we had to learn on our own. For this project I used REST client to incorporate an external API into my full stack application. 
            </p>
            <p className="tracking-wide w-2/3 mb-3 text-xl text-black-500 md:text-xl dark:text-black-400">
                Originally I created a webpage for an animal sanctuary. Users could log in and donate to a list of animals provided by and API of endangered animals. Once donated to, that animal would appear under a route titled my animals. Animal cards in this route provided more information and was going to contain an iframe of the video url provided by the API.
            </p>
            <p className="tracking-wide w-2/3 mb-3 text-xl text-black-500 md:text-xl dark:text-black-400">
                With five days before I was supposed to present, a problem occured with the API. Rather than an extensive list of endangered animals, only two animal objects were being returned. Testing using postman confirmed the API was no longer returning several animal objects. I needed to change the project or find a different API to use. With no other free endangered animal API to be found, I had to change the project and lose a majority of progress. 
            </p>
            <p className="tracking-wide w-2/3 mb-3 text-xl text-black-500 md:text-xl dark:text-black-400">
                After removing everything other than the user authentication, I began creating the GameBuddy app. Using the mmobomb API, I created a route that would show all the games and prompt users to add them to their list. Once add to their list, an instance of that game would be found or created on the back end and an instance of a join between the user and that game would be created if one did not already exist. The app unfortunately did not get a lot of functionality as optimization and security were the main focus. 
            </p>
            <br/>
            <a target="_blank" className="text-purple-700 text-xl no-underline hover:underline ..."  href="https://github.com/RyanWoodruff2002/capstone" >GitHub Repo</a>
            <br/>
            <iframe
                width="800"
                height="400"
                src="https://www.youtube.com/embed/p0vS923seD8">
            </iframe>
            <br/>
            <a target="_blank" className="text-purple-700 text-xl no-underline hover:underline ..." href="https://www.youtube.com/watch?v=p0vS923seD8" >Video Demo</a>
            <br/>
            <br/>
        </div>
    )
}

export default GameBuddy