import styles from './Pantry.module.css'

import { useNavigate } from 'react-router-dom';

const Pantry = () =>{
    const navigate = useNavigate()
    return(
        <div className={styles.container}>
        <h2 className={styles.header}>Pantry is empty</h2>
        <button className={styles.addButton} onClick={() => navigate("scan")}>Add ingredients</button>
        </div>
    )
}

export default Pantry