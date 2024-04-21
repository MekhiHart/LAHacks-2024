import styles from './Pantry.module.css'

import { useNavigate } from 'react-router-dom';
import IngredientComponent from '../../components/IngredientComponent/IngredientComponent';
import { useEffect } from 'react';

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
    console.log(pantryIngredients)
    useEffect(() => {
        console.log("type: ", typeof pantryIngredients)
    },[pantryIngredients])
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
            pantryIngredients.map((ingredient) => <IngredientComponent IngredientComponentData={ingredient}/>)
        )}
    </div>
  );
}

