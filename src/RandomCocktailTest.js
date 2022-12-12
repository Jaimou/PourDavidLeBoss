// /!\ CONSIGNES /!\

// créer un composant random cocktail
// qui affiche un cocktail random au click sur un bouton
// Pour ça, créez une variable d'état coktailRandomData avec useState
// creéz un bouton avec un event listener onClick
// au click, faites l'appel fetch à l'API
// et utilisez la fonction retournée par useState pour modifier la valeur de la variable d'état
// et demandez à react de re-rendre le composant

import { useState } from "react";

const RandomCocktailTest = () => {

    // useState() sert à stocker des données qui peuvent changer
    // de valeur dans un composant
    // On a en paramètre n°1 la variable cocktailRandomData
    // et en n°2 la fonction qui permet de modifier cette variable
    const [cocktailRandomData, setCocktailRandomData] = useState(null);

    // Ici on fait une fonction asynchrone pour que ça puisse
    // quand même s'éxécuter sans impacter le reste du code
    const onClick = async () => {
        // Appel de l'API grâce à fetch
        const cocktailResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        // On retourne le résultat en JSON
        const cocktailRandomData = await cocktailResponse.json();
        // Appel de la fonction qui modifie la variable du cocktail
        setCocktailRandomData(cocktailRandomData);
    }

    return(
        <div>
            {/* Listener sur le bouton qui au click */}
            <button onClick={onClick}>Afficher un cocktail au hasard</button>
            {/* Faire des conditions grâce à ? () : ()

                Si le cocktailRandomData renvoie un résultat */}
            {cocktailRandomData ? (
                <div>
                    {/* On arrive ici et ça affiche le titre du cocktail*/}
                    <h1>{cocktailRandomData.drinks[0].strDrink}</h1>
                </div>
            ) : ( 
                <div>
                    {/* Sinon on est là */}
                    <h1>Chargement des cocktails</h1>
                </div>
            )}
        </div>
    );
}

export default RandomCocktailTest;