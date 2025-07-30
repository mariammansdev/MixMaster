import Wrapper from "../assets/wrappers/CocktailList";
import CocktailCard from "./CocktailCard";

const CocktailList = ({drinks}) => {
    if (!drinks || drinks.length === 0) {
        return <div className='no-results'>No cocktails found</div>; 
    }
    const formattedDrinks = drinks.map(drink => ({
        id: drink.idDrink,
        isAlcoholic: drink.strAlcoholic,
        category: drink.strCategory,
        glass: drink.strGlass,
        image: drink.strDrinkThumb,
        name: drink.strDrink,
        instructions: drink.strInstructions,
        tags: drink.strTags ? drink.strTags.split(',') : [],
        ingredients: [
            drink.strIngredient1,
            drink.strIngredient2,
            drink.strIngredient3,
            drink.strIngredient4,
            drink.strIngredient5,
            drink.strIngredient6,
            drink.strIngredient7,
            drink.strIngredient8,
            drink.strIngredient9,
            drink.strIngredient10
        ].filter(ingredient => ingredient)
    }));

  return (
    <Wrapper>
        {formattedDrinks.map(drink => (
            <CocktailCard key={drink.id} {...drink} />
        ))}
    </Wrapper>
  )
}

export default CocktailList