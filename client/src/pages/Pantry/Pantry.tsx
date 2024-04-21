import styles from './Pantry.module.css'

import { useNavigate } from 'react-router-dom';

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

export default function Pantry(props : PantryProps){
    const navigate = useNavigate()
    const {pantryIngredients, setPantryIngredients} = props
 return (
    <div className={styles.container}>
      {pantryIngredients.length === 0 ? (
        <div>
          <h3 className={styles.header}>Pantry is empty</h3>
          <button className={styles.addButton} onClick={() => navigate("scan")}>
            Add ingredients
          </button>
        </div>
      ) : (
            <h1>Ingredients exist</h1>        
      )}
    </div>
  );
}

