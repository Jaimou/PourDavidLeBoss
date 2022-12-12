import { useState } from "react";

const RandomCocktail = () => {

    const [cocktailRandom, setCocktailRandom] = useState(null);

    const handleClick = async () => {
        const cocktailResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        const cocktailRandom = await cocktailResponse.json();
        setCocktailRandom(cocktailRandom);
    };

    // créer un composant random cocktail
    // qui affiche un cocktail random au click sur un bouton
    // Pour ça, créez une variable d'état coktailRandomData avec useState
    // creéz un bouton avec un event listener onClick
    // au click, faites l'appel fetch à l'API
    // et utilisez la fonction retournée par useState pour modifier la valeur de la variable d'état
    // et demandez à react de re-rendre le composant

    return(
        <div>
            <button onclick = {handleClick}>Afficher une recette random</button>
            {cocktailRandom ? (
                <div>
                    <h1>{cocktailRandom.drinks[0].strDrink}</h1>
                </div>
            ) : (
                <div>
                    <h1>Recette en cours de chargement</h1>
                </div>
            )}
        </div>
    );
}

export default RandomCocktail;