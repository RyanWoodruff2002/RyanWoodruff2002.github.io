import React from "react";

function pokemonFetcher() {
    return (
        <div>
            <p>
                Pokemon Fetcher is the first group project I collaborated in at Flatiron. During the creation of this app, my team members and I only knew vanilla JavaScript. We wanted to create a fun app that would allow you to generate Pokemon and add them to your team. We also wanted to let users remove pokemon from their team. For this project we used <a target="_blank" href="https://pokeapi.co/" >PokeApi.</a>
            </p>
            <p>
                On Initial startup, the user will be presented with a button that will render three random starter Pokemon of grass, water, and fire types. Upon choosing a starter, it will be added to your team. After this the user will have the option to "Search the Tall Grass" to generate three random pokemon and have the opportunity to capture one and add it to their team. The user will also have the option to find a specific Pokemon by inputing its name or ID. The "My Team" feature is limited to a size of six. If the user attempts to add a pokemon to a full team, their oldest pokemon will be removed and the new one will be added. Pokemon in your team will have the options of "PokeDex" to generate more details of the specific Pokemon and "Release" to remove the Pokemon from your team.
            </p>
            <a target="_blank" href="https://github.com/AndreaRose92/pokemon-fetcher" >GitHub Repo</a>
            <br/>
            <br/>
            <a target="_blank" href="https://andrearose92.github.io/pokemon-fetcher/" >GitHub Pages Deployment</a>
        </div>
    )
}

export default pokemonFetcher