// src/components/IngredientsList.tsx

import React from 'react';
import IngredientItem from "../IngredientItemComponent/IngredientItem"
import styles from './IngredientsList.module.css'; // Make sure to create and import a corresponding CSS module

// If you have TypeScript in your project, define the props for the component like this:
interface Ingredient {
  id: string; // or number if your IDs are numeric
  name: string;
  quantity: string;
  daysRemaining: number;
}

interface IngredientsListProps {
  ingredients: Ingredient[];
}

const IngredientsList: React.FC<IngredientsListProps> = ({ ingredients }) => {
  return (
    <>
      <h2 className={styles.header}>Save your ingredients!</h2>
      <div className={styles.ingredientsList} style={{maxHeight:"300px", overflowY:"scroll", overflowX:"hidden"}}>
      {ingredients.map((ingredient) => (
        <IngredientItem
          key={ingredient.id}
          name={ingredient.name}
          quantity={ingredient.quantity}
          daysRemaining={ingredient.daysRemaining}
        />
      ))}
    </div>
    </>

  );
};

export default IngredientsList;
