// Example usage in Recipes.tsx

import IngredientsList from "../../components/IngredientsListComponent/IngredientsList";

const RecipesPage = () => {
  const ingredientsData = [
    { id: '1', name: 'Garlic Cloves', quantity: '3x', daysRemaining: 3 },
    { id: '2', name: 'Broccoli', quantity: '50g', daysRemaining: 5 },
  ];

  return (
    <div>
      <IngredientsList ingredients={ingredientsData} />
    </div>
  );
};

export default RecipesPage;
