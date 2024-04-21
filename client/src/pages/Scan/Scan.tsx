import CameraComponent from "../../components/CameraComponent/CameraComponent"
type Ingredient = {
    name: string;
    quantity: number;
    expirationDate: Date;
    weight: number
  }

type ScanProps = {
    pantryIngredients: Ingredient[];
    setPantryIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>;
}

export default function Scan(props: ScanProps){
    const {pantryIngredients, setPantryIngredients} = props

    return(
        <div id="scan--body">
            <h1>Scan Receipt</h1>
            <CameraComponent pantryIngredients={pantryIngredients} setPantryIngredients={setPantryIngredients}/>
        </div>
    )
}