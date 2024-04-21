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
        <div style={{margin: "-5px 0px 10px 0px"}}>
            {quantity && <h3>({quantity}) {name}</h3>}
            <h4 style={{fontSize:"12px", margin:"-10px 0px"}}>{new Date(expirationDate).toDateString()}</h4>
        </div>
    )

}