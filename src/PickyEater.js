import React from "react";

function pickyEater() {
    return (
        <div>
            <p>
                Picky Eater is the second group project I collaborated in at Flatiron. We wanted to create a humorous website for the Picky Eater restaurant. 
            </p>
            <p>
                On initial render, the user is presented with the landing page. From here, the user can use the navbar to navigate to the homepage, full menu, and recipe form. The user can also use a button to toggle dark mode on or off at the top of the page. The home page contains a basic introduction as well as a randomly generated suggested dish. The full menu generates cards for each dish. Each card contains whether the item contains meat, contains peanuts, and contains dairy. Each card also has a persisting like button, persisting comment section, and persisting delete button. The full menu also has a search bar to filter the cards by name or ingredients. The recipe form renders a form to create a dish that will dynamically render and persist. To imitate a back-end we used a json file and JSON server to make GET, POST, PATCH, and DELETE requests.
            </p>
            <a target="_blank" href="https://github.com/joshuag95/restaurant" >GitHub Repo</a>
        </div>
    )
}

export default pickyEater