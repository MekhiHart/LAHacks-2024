import IngredientsList from "../../components/IngredientsListComponent/IngredientsList";
import styles from './Recipes.module.css';

type Ingredient = {
  name: string;
  quantity: number;
  expirationDate: Date;
  weight: number
}

interface IngredientItemProps {
  name: string;
  quantity: string;
  daysRemaining: number;
}

type RecipesPageProps = {
  pantryIngredients: Ingredient[];
  setPantryIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>;
}

export default function RecipesPage(props:RecipesPageProps) {
  const {pantryIngredients} = props
  const newData: IngredientItemProps[] = pantryIngredients.map((ingredient,idx) => ({
    id: `${idx}`,
    name: ingredient.name,
    quantity: `${ingredient.quantity}x`, // Assuming quantity needs to be appended with 'x'
    daysRemaining: calculateDaysRemaining(ingredient.expirationDate), // Implement your logic to calculate daysRemaining
  }));

  return (
    <div className={styles.recipesPage}>
      <IngredientsList ingredients={[
    {
      id:"1",
        "name": "tomato paste",
        "daysRemaining": 3,
        "quantity": "2"
    },
    {
        id:"2",
        "name": "kraft mac n cheese",
        "daysRemaining": 2,
        "quantity": "1"
    },
    {
      id:"3",
      "name": "kraft mac n cheese",
      "daysRemaining": 2,
      "quantity": "1"
    },
    {
      id:"4",
      "name": "kraft mac n cheese",
      "daysRemaining": 2,
      "quantity": "1"
    },
    {
      id:"5",
      "name": "kraft mac n cheese",
      "daysRemaining": 2,
      "quantity": "1"
    }
]} />
      <button className={styles.searchRecipeButton}>Search Recipe</button>
    </div>
  );
};

function calculateDaysRemaining(expirationDate: Date): number {
  const oneDayInMs = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
  const currentDate = new Date();
  const expiryDate = new Date(expirationDate);
  const timeDifference = expiryDate.getTime() - currentDate.getTime();
  const daysDifference = Math.round(timeDifference / oneDayInMs);

  return daysDifference;
}

