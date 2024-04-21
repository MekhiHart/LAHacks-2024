import styles from './Pantry.module.css'

import { useNavigate } from 'react-router-dom';
import IngredientsList from '../../components/IngredientsListComponent/IngredientsList';
type Ingredient = {
    name: string;
    quantity: number;
    expirationDate: Date;
    weight: number
  }

type PantryProps = {
    pantryIngredients: Ingredient[];
    setPantryIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>;
}
  
interface IngredientItemProps {
    name: string;
    quantity: string;
    daysRemaining: number;
  }

export default function Pantry(props : PantryProps){
    const navigate = useNavigate()
    const {pantryIngredients} = props
    const newData: IngredientItemProps[] = pantryIngredients.map((ingredient,idx) => ({
        id: `${idx}`,
        name: ingredient.name,
        quantity: `${ingredient.quantity}x`, // Assuming quantity needs to be appended with 'x'
        daysRemaining: calculateDaysRemaining(ingredient.expirationDate), // Implement your logic to calculate daysRemaining
      }));

 return (
    <div className={styles.container} style={{maxHeight:"400px", overflowY:"scroll", overflowX:"hidden"}}>
      {pantryIngredients.length === 0 ? (
        <div>
          <h3 className={styles.header}>Pantry is empty</h3>
          <button className={styles.addButton} onClick={() => navigate("scan")}>
            Add ingredients
          </button>
        </div>
      ) : (
            <IngredientsList ingredients={newData} />
            // pantryIngredients.map((ingredient) => <IngredientComponent IngredientComponentData={ingredient}/>)
        )}
    </div>
  );
}

function calculateDaysRemaining(expirationDate: Date): number {
    const oneDayInMs = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
    const currentDate = new Date();
    const expiryDate = new Date(expirationDate);
    const timeDifference = expiryDate.getTime() - currentDate.getTime();
    const daysDifference = Math.round(timeDifference / oneDayInMs);
  
    return daysDifference;
  }

