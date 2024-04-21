import IngredientsList from "../../components/IngredientsListComponent/IngredientsList";
import styles from './Recipes.module.css';

const RecipesPage = () => {
  const ingredientsData = [
    { id: '1', name: 'Garlic Cloves', quantity: '3x', daysRemaining: 1 },
    { id: '2', name: 'Broccoli', quantity: '50g', daysRemaining: 2 },
  ];

  return (
    <div className={styles.recipesPage}>
      <IngredientsList ingredients={ingredientsData} />
      <button className={styles.searchRecipeButton}>Search Recipe</button>
    </div>
  );
};

export default RecipesPage;