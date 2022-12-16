import React from "react";

function pickyEater() {
    return (
        <div className="grid justify-items-center items-center">
            <br/>
            <h1>Picky Eater</h1>
            <br/>
            <p className="tracking-wide w-2/3 mb-3 text-xl text-black-500 md:text-xl dark:text-black-400">
                Picky Eater is the second group project I collaborated in at Flatiron. We wanted to create a humorous website for the Picky Eater restaurant. 
            </p>
            <p className="tracking-wide w-2/3 mb-3 text-xl text-black-500 md:text-xl dark:text-black-400">
                On initial render, the user is presented with the landing page. From here, the user can use the navbar to navigate to the homepage, full menu, and recipe form. The user can also use a button to toggle dark mode on or off at the top of the page. The home page contains a basic introduction as well as a randomly generated suggested dish. The full menu generates cards for each dish. Each card contains whether the item contains meat, contains peanuts, and contains dairy. Each card also has a persisting like button, persisting comment section, and persisting delete button. The full menu also has a search bar to filter the cards by name or ingredients. The recipe form renders a form to create a dish that will dynamically render and persist. To imitate a back-end we used a json file and JSON server to make GET, POST, PATCH, and DELETE requests.
            </p>
            <br/>
            <a target="_blank" className="text-purple-700 text-xl no-underline hover:underline ..." href="https://github.com/joshuag95/restaurant" >GitHub Repo</a>
            <br/>
            <iframe
                width="800"
                height="400"
                src="https://www.youtube.com/embed/eiMCfVZ2CvY">
            </iframe>
            <br/>
            <a target="_blank" className="text-purple-700 text-xl no-underline hover:underline ..." href="https://www.youtube.com/watch?v=eiMCfVZ2CvY" >Video Demo</a>
            <br/>
            <br/>
        </div>
    )
}

export default pickyEater