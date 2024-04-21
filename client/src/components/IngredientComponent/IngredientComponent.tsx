type Ingredient = {
    name: string;
    quantity: number;
    expirationDate: Date;
    weight: number
  }

interface IngredientComponentProps{
    IngredientComponentData: Ingredient
}

export default function IngredientComponent(props:IngredientComponentProps){
    const {name, quantity, expirationDate, weight} = props.IngredientComponentData
    return(
        <div>
            {quantity && <span>({quantity}) {name}</span>}
            {weight && <span>({weight}) {name}</span>}
            <span>{new Date(expirationDate).toDateString()}</span>
        </div>
    )

}