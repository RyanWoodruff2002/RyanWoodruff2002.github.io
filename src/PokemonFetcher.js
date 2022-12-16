import React from "react";

function pokemonFetcher() {
    return (
        <div className="grid justify-items-center items-center">
            <br/>
            <h1>Pokemon Fetcher</h1>
            <br/>
            <p className="tracking-wide w-2/3 mb-3 text-xl text-black-500 md:text-xl dark:text-black-400">
                Pokemon Fetcher is the first group project I collaborated in at Flatiron. During the creation of this app, my team members and I only knew vanilla JavaScript. We wanted to create a fun app that would allow you to generate Pokemon and add them to your team. We also wanted to let users remove pokemon from their team. For this project we used <a target="_blank" href="https://pokeapi.co/" >PokeApi.</a>
            </p>
            <p className="tracking-wide w-2/3 mb-3 text-xl text-black-500 md:text-xl dark:text-black-400">
                On Initial startup, the user will be presented with a button that will render three random starter Pokemon of grass, water, and fire types. Upon choosing a starter, it will be added to your team. After this the user will have the option to "Search the Tall Grass" to generate three random pokemon and have the opportunity to capture one and add it to their team. The user will also have the option to find a specific Pokemon by inputing its name or ID. The "My Team" feature is limited to a size of six. If the user attempts to add a pokemon to a full team, their oldest pokemon will be removed and the new one will be added. Pokemon in your team will have the options of "PokeDex" to generate more details of the specific Pokemon and "Release" to remove the Pokemon from your team.
            </p>
            <a target="_blank" className="text-purple-700 text-xl no-underline hover:underline ..."  href="https://github.com/AndreaRose92/pokemon-fetcher" >GitHub Repo</a>
            <br/>
            <a target="_blank" className="text-purple-700 text-xl no-underline hover:underline ..." href="https://andrearose92.github.io/pokemon-fetcher/" >GitHub Pages Deployment</a>
            <br/>
            <iframe
                width="800"
                height="400"
                src="https://www.youtube.com/embed/T9cMqLCsjqY">
            </iframe>
            <br/>
            <a target="_blank" className="text-purple-700 text-xl no-underline hover:underline ..." href="https://www.youtube.com/watch?v=T9cMqLCsjqY" >Video Demo</a>
            <br/>
            <br/>
        </div>
    )
}

export default pokemonFetcher